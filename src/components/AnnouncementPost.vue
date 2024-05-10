<!-- AnnouncementPost.vue -->
<template>
    <div class="announcement-post">
      <h3>{{ announcement.title }}</h3>
      <p>{{ announcement.content }}</p>
      <!-- Add any additional fields you want to display -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      announcement: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .announcement-post {
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .announcement-post h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .announcement-post p {
    font-size: 16px;
    color: #666;
  }
  </style>
  