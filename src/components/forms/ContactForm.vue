<template>
  <form class="form contact-form" name="ContactForm" method="post" @submit.prevent="handleSubmit">
    <div class="field">
      <label class="label" for="contact-form-first-name">Your First Name</label>
      <input
        id="contact-form-first-name"
        v-model="firstName"
        type="text"
        class="input"
        placeholder="Your First Name"
        @input="delayTouch($v.firstName)"
      >
      <p class="help is-danger" v-if="$v.firstName.$error">Please enter your first name</p>
    </div>
    <div class="field">
      <label class="label" for="contact-form-last-name">Your Last Name</label>
      <input
        id="contact-form-last-name"
        v-model="lastName"
        type="text"
        class="input"
        placeholder="Your Last Name"
        @input="delayTouch($v.lastName)"
      >
    </div>
    <div class="field">
      <label class="label" for="contact-form-email-address">Your Email Address</label>
      <input
        id="contact-form-email-address"
        v-model="emailAddress"
        type="email"
        class="input"
        placeholder="Your Email Address"
      >
    </div>
    <div class="field">
      <label class="label" for="contact-form-message">Your Message</label>
      <textarea
        id="contact-form-message"
        v-model="message"
        class="textarea has-fixed-size"
        rows="10"
        placeholder="Your message"
      ></textarea>
    </div>
    <button class="button is-link" :class="{'is-loading': isSending }" type="submit" :disabled="true">Send</button>
  </form>
</template>

<script>
import DelayValidation from "./../mixins/DelayValidation";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [DelayValidation, validationMixin],

  data() {
    return {
      firstName: null,
      lastName: null,
      emailAddress: null,
      message: null,
      isSending: false
    };
  },

  methods: {
    handleSubmit() {
      this.isSending = true;
    }
  },

  validations() {
    return {
      firstName: { required },
      lastName: { required }
    };
  }
};
</script>