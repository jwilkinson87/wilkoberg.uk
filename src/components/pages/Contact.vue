<template>
  <div>
    <div class="page-title">
      <h1 class="title is-1">Contact</h1>
    </div>
  
    <div class="message" v-if="!contacted">
      <div class="message-body">Want to get in touch? Use the form below.</div>
    </div>

    <contact-form @contacted="contacted = true"></contact-form>
  </div>
</template>

<script>
import ContactForm from "../forms/ContactForm";

export default {
  components: {
    ContactForm
  },

  data() {
    return {
      contacted: false
    }
  }
};
</script>