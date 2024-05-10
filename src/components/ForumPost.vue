<template>
    <div class="forum-post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.content }}</p>
      
      <!-- Previously Posted Comments Section -->
      <div v-if="post.comments.length > 0" class="previous-comments">
        <h5>Previously Posted Comments</h5>
        <ul>
          <li v-for="(comment, index) in post.comments" :key="index">
            <strong>{{ comment.author }}</strong>: {{ comment.text }}
          </li>
        </ul>
      </div>
      
      <!-- Comment Form -->
      <div class="comment-section">
        <h5>Add a Comment</h5>
        <form @submit.prevent="addComment">
          <div class="form-group">
            <label for="text">Comment:</label>
            <textarea id="text" v-model="newComment.text" required></textarea>
          </div>
          <button type="submit">Add Comment</button>
        </form>
      </div>
      <!-- End Comment Form -->
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        newComment: {
          author: '', // Removing the author field
          text: ''
        }
      };
    },
    methods: {
      addComment() {
        this.post.comments.push({
          author: 'Anonymous', // Defaulting to 'Anonymous'
          text: this.newComment.text
        });
        this.newComment.text = '';
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
  
  .previous-comments {
    margin-top: 20px;
  }
  
  .previous-comments h5 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .previous-comments ul {
    list-style-type: none;
    padding: 0;
  }
  
  .previous-comments li {
    margin-bottom: 10px;
  }
  
  .comment-section {
    margin-top: 20px;
  }
  
  .comment-section h5 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .comment-section input,
  .comment-section textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  
  .comment-section button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .comment-section button:hover {
    background-color: #45a049;
  }
  </style>
  