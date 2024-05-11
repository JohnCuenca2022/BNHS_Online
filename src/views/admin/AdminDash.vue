<template><br><br>
<h1 class="text-center">Welcome to the Admin Dashboard!</h1>
  <div class="admin-dashboard">
    <AnnouncementForm @new-announcement="handleNewAnnouncement" />
  </div><br><br>
</template>

<script>
import AnnouncementForm from '@/components/AnnouncementForm.vue';

export default {
  components: {
    AnnouncementForm
  },
  methods: {
    handleNewAnnouncement(newAnnouncement) {
      // Handle new announcement data here
      console.log(newAnnouncement);
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.admin-dashboard h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: bold;
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Add scoped styles for AdminDash.vue if needed */
</style>
