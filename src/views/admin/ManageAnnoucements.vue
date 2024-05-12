<!-- <template>
    <div>
      <h2>Create Announcement</h2>
      <form @submit.prevent="submitAnnouncement">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" required>
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" v-model="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
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
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
   -->