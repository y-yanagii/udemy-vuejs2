<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input
      id="name"
      type="text"
      v-model="name"
    >
    <br><br>
    <label for="comment">コメント：</label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br>
      <div>名前：{{ post.fields.name.stringValue }}</div>
      <div>コメント：{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    }
  },
  created() {
    axios.get(
      "/comments",
      {
        headers: {
          Authorization: `Bearer ${this.idToken}`
        }
      }
    )
    .then(response => {
      this.posts = response.data.documents
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  },
  methods: {
    createComment() {
      axios
        .post(
          "/comments",
          {
            fields: {
              name: {
                stringValue: this.name
              },
              comment: {
                stringValue: this.comment
              }
            }
          },
          {
            headers: {
              Authorization: `Bearer ${this.idToken}`
            }
          }
        )
        .then(response => {
          // 非同期処理の考えで処理が重いため先にやっといて.then
          console.log(response);
        })
        .catch(error => {
          // エラーの場合
          console.log(error);
        });
      this.name = "";
      this.comment = "";
    }
  }
}
</script>
