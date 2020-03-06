<template>
  <div>
    <div class="page-title">
      <h1 class="title is-1">Contact</h1>
    </div>
  
    <div class="message">
      <div class="message-body">Want to get in touch? Use the form below.</div>
    </div>

    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from "../forms/ContactForm";

export default {
  components: {
    ContactForm
  }
};
</script>