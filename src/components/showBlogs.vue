<template>
    <div v-theme:column="'narrow'" class="show-blogs">
        <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="Search blogs">
        <div v-for="blog in filteredBlogs" v-bind:key="blog.title" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | toUppercase }}</h2></router-link>
            <article> {{ blog.body | snippet }} </article>
        </div>
    </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  computed: {

  },
  methods: {},
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => (this.blogs = res.slice(0, 10)));
  },
  filters: {
    toUppercase(val) {
      return val.toUpperCase();
    },
    snippet(val) {
      return val.slice(0, 100).concat("...");
    }
  },
  directives: {
    rainbow: {
      bind(elem, binding, vnode) {
        elem.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style>
.show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
