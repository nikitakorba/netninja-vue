<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <hr>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import NinjasVue from "./components/Ninjas.vue";

export default {
  components: {
    "app-header": HeaderVue,
    "app-footer": FooterVue,
    "app-ninjas": NinjasVue
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML", show: false },
        { name: "Hithoshi", speciality: "Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data", show: false }
      ],
      title: "Vue Ninjas"
    };
  },
  methods: {
    updateTitle(event) {
      this.title = event;
    }
  }
};
</script>

<style scoped>
</style>
