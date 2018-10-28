<template>
  <div id="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>
          {{ blog.body }}
      </article>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    fetch(`http://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(res => res.json())
      .then(res => {
          console.log(res);
          this.blog = res;
          });
  }
};
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
}
</style>
