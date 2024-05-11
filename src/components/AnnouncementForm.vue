<template>
    <div class="announcement-form">
      <h2>Create Announcement</h2>
      <form @submit.prevent="submitAnnouncement">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" v-model="content" class="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-success btn-block d-grid gap-2 col-6 mx-auto">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      submitAnnouncement() {
        this.$emit('new-announcement', {
          title: this.title,
          content: this.content
        });
        this.title = '';
        this.content = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .announcement-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .announcement-form h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea.form-control {
    resize: vertical;
  }
  
  .btn-primary {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  