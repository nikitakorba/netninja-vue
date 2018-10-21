<template>

  <div class="add-blog">
      <h2>Add a New Blog Post</h2>
      <form v-if="!submitted">
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required>
          <label>Blog Content:</label>
          <textarea v-model.lazy="blog.content"></textarea>
        <div class="checkboxes">
          <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories">
          <label>Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories">
          <label>Mario</label>
          <input type="checkbox" value="mario" v-model="blog.categories">
          <label>Cheese</label>
          <input type="checkbox" value="cheese" v-model="blog.categories"> 
      </div>
      <label>Author</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
      </select>
      <button @click.prevent="addBlog()" >Add Blog</button>
      </form>
      <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
      </div>
      <div class="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{ blog.title }}</p>
          <p>Blog content:</p>
          <p> {{ blog.content }} </p>
          <p>Blog categories:</p>
          <ul>
            <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
          </ul>
          <p>Blog author: {{ blog.author }}</p>
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
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Nikita", "The Vue Ninja", "Angular Master"],
      submitted: false
    };
  },
  methods: {
    addBlog() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.blog.title,
          body: this.blog.content,
          userId: 12345
        })
      })
        .then(data => data.json())
        .then(res => {
          console.log(res)
          this.submitted = true;
          });
      // fetch("https://jsonplaceholder.typicode.com/posts", {
      //   title: this.blog.title,
      //   body: this.blog.content,
      //   userId: 12345
      // })
      // .then((data) => data.json())
      // .then((res) =>  console.log(res));
    }
  }
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
input[type="text"],
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

.checkboxes input {
  display: inline-block;
  margin-right: 0;
}

.checkboxes label {
  display: inline-block;
}
</style>