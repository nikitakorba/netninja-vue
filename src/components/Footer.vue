<template>
  <footer>
    <p> {{ copyright }} {{ title }} </p>
  </footer>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        copyright: `Copyright 2018 Nikita Korba`
      }
    }
  }
</script>
<style scoped>
  footer {
    background: #222;
    padding: 10px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }
</style>
