<template>
<div>
  <form-helper>
<div slot="form-header">
  <h3>Some custom title</h3>
  <p>Info about form</p>
</div>
<div slot="form-field">
  <input type="text" placeholder="name" required>
  <input type="password" placeholder="password">
</div>
<div slot="form-controls">
  <button @click="handleSubmit" type="submit">Submit</button>
</div>
  </form-helper>
</div>
</template>

<script>
import formHelperVue from './components/formHelper.vue';

export default {
  components: {
    "form-helper": formHelperVue
  },
  data() {
    return {
      title: "Dynamic slot title"
    };
  },
  methods: {
    handleSubmit() {
      console.log("CLICKED");
        }
  }
};
</script>

<style scoped>
</style>
