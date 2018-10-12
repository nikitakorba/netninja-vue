<template>
  <div>
    <keep-alive>
<component v-bind:is="component"></component>    
    </keep-alive>
<button @click="component = 'form-one'">Show form one</button>
<button @click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formHelperVue from './components/formHelper.vue';
import formOneVue from './components/formOne.vue';
import formTwoVue from './components/formTwo.vue';
export default {
  components: {
    "form-helper": formHelperVue,
    "form-one": formOneVue,
    "form-two": formTwoVue
  },
  data() {
    return {
      component: 'form-one'
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
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
