<template>
  <div id="ninjas">
    <ul>
      <li v-for="(ninja, index) in ninjas" :key="index" @click="changeShow(ninja)">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete last bitch</button>
  </div>
</template>

<script>
  export default {
    props: {
      ninjas: {
        type: Array,
        required: true
      }
    },
    data() {
      return {};
    },
    methods: {
      changeShow(ninja) {
        ninja.show = !ninja.show;
      },
      deleteNinja() {
        this.ninjas.pop();
      }
    },
    //lifecycle hooks
    beforeCreate() {
      console.log("Before Create");
    },
    created() {
      console.log("Created");
    },
    beforeMount() {
      console.log("Before Mount");
    },
    mounted() {
      console.log("Mounted (Manipulating DOM. AfterViewInit)");
    },
    beforeUpdate() {
      console.log("Before update (before change detection)");
      
    },
    updated() {
      console.log("Updated. After Change detection"); 
    }
  };
</script>

<style scoped>
  #ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
