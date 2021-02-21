<template>
  <form
    class="form contact-form"
    name="ContactForm"
    method="post"
    @submit.prevent="handleSubmit"
  >
    <div
      class="field"
      :class="{ 'has-error': $v.firstName.$dirty && $v.firstName.$invalid }"
    >
      <label class="label" for="contact-form-first-name">Your First Name</label>
      <input
        id="contact-form-first-name"
        v-model.trim="firstName"
        type="text"
        class="input"
        placeholder="Your First Name"
        @input="delayTouch($v.firstName)"
      />
      <p
        class="help is-danger"
        v-if="$v.firstName.$dirty && $v.firstName.$error"
      >
        Please enter your first name
      </p>
    </div>
    <div
      class="field"
      :class="{ 'has-error': $v.lastName.$dirty && $v.lastName.$invalid }"
    >
      <label class="label" for="contact-form-last-name">Your Last Name</label>
      <input
        id="contact-form-last-name"
        v-model.trim="lastName"
        type="text"
        class="input"
        placeholder="Your Last Name"
        @input="delayTouch($v.lastName)"
      />
      <p
        class="help is-danger"
        v-if="$v.lastName.$dirty && !$v.lastName.required"
      >
        Please enter your last name
      </p>
    </div>
    <div
      class="field"
      :class="{
        'has-error': $v.emailAddress.$dirty && $v.emailAddress.$invalid,
      }"
    >
      <label class="label" for="contact-form-email-address"
        >Your Email Address</label
      >
      <input
        id="contact-form-email-address"
        v-model.trim="emailAddress"
        type="email"
        class="input"
        placeholder="Your Email Address"
      />
      <p
        class="help is-danger"
        v-if="$v.emailAddress.$dirty && !$v.emailAddress.required"
      >
        Please enter an email address
      </p>
      <p
        class="help is-danger"
        v-if="$v.emailAddress.$dirty && !$v.emailAddress.email"
      >
        Please enter a valid email address
      </p>
    </div>
    <div
      class="field"
      :class="{ 'has-error': $v.message.$dirty && $v.message.$invalid }"
    >
      <label class="label" for="contact-form-message">Your Message</label>
      <textarea
        id="contact-form-message"
        v-model.trim="message"
        class="textarea has-fixed-size"
        rows="10"
        placeholder="Your message"
        @input="delayTouch($v.message)"
      ></textarea>
      <p
        class="help is-danger"
        v-if="$v.message.$dirty && !$v.message.required"
      >
        Please enter a message
      </p>
    </div>
    <vue-recaptcha
      sitekey="6LeCm2EaAAAAALtqZvGpyyXojVAghVFMxF_xdg7b"
      @verify="onVerify"
      @expired="isRecaptchaValid = false"
    >
    </vue-recaptcha>
    <button
      class="button is-link"
      :class="{ 'is-loading': isSending }"
      type="submit"
      :disabled="$v.$invalid || isSending || !isRecaptchaValid"
    >
      Send
    </button>
  </form>
</template>

<script>
import DelayValidation from "./../mixins/DelayValidation";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import VueRecaptcha from "vue-recaptcha";
import axios from 'axios';

export default {
  mixins: [DelayValidation, validationMixin],

  components: { VueRecaptcha },

  data() {
    return {
      firstName: null,
      lastName: null,
      emailAddress: null,
      message: null,
      isSending: false,
      isRecaptchaValid: false,
    };
  },

  methods: {
    handleSubmit() {
      this.isSending = true;

      axios.post('https://7s5xt2o7j7.execute-api.eu-west-2.amazonaws.com/contact-me', {
        first_name: this.firstName,
        last_name: this.lastName,
        email_address: this.emailAddress,
        message: this.message
      }).then(response => {
        this.$emit('contacted', true)
      })
    },

    onVerify(args) {
      this.isRecaptchaValid = args !== null;
    },
  },

  validations() {
    return {
      firstName: { required },
      lastName: { required },
      emailAddress: { required, email },
      message: { required },
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 1rem;
}
</style>