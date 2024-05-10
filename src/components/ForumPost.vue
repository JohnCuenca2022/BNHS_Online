<template>
    <div class="forum-post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .forum-post {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .forum-post h4 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 10px;
  }
  
  .forum-post p {
    font-size: 16px;
    color: #666666;
  }
  </style>
  