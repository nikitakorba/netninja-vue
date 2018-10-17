<template>

  <div class="add-blog">
      <h2>Add a New Blog Post</h2>
      <form>
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required>
          <label>Blog Content:</label>
          <textarea v-model.lazy="blog.content"></textarea>
      </form>
      <div class="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{ blog.title }}</p>
          <p>Blog content:</p>
          <p> {{ blog.content }} </p>
      </div>
  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.add-blog {
  margin: 20px auto;
  max-width: 500px;
}
.add-blog * {
  box-sizing: border-box;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input,
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
.preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 30px;
}
</style>