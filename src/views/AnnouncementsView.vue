<template>
  <div class="forum">
    <!-- ANNOUNCMENTS HEADER -->
    <div class="p-5 custom-bg text-white text-center">
      <h1>📢 Announcements 📢</h1>
      <h2>
        Stay updated with the latest school announcements through this page.
      </h2>
    </div>
    <!-- ANNOUNCEMENT POSTS PLACEHOLDER -->
    <div class="announcement-posts">
      <AnnouncementPost
        v-for="announcement in announcementsList"
        :key="announcement.id"
        :announcement="announcement"
      />
    </div>
  </div>
</template>

<script>
import AnnouncementPost from "@/components/AnnouncementPost.vue";
import { readAnnouncements } from "@/backend/database";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const announcementsList = ref([]);

    onMounted(async () => {
      const announcements = await readAnnouncements();
      // announcementsList = [];
      announcements.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);

        var announcement = {
          title: doc.data().title,
          content: doc.data().content,
        };

        announcementsList.value.push(announcement);
      });
    });

    return {
      announcementsList
    }
  },

  components: {
    AnnouncementPost,
  },
  data() {
    return {
      //announcements: announcementsList,
      // announcements:
      //   [
      // { id: 1, title: "Important Announcement", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo vel eros vestibulum vulputate. Integer ac nulla ut odio aliquet cursus." },
      //   { id: 2, title: "Upcoming Event", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo vel eros vestibulum vulputate. Integer ac nulla ut odio aliquet cursus." },
      //   { id: 3, title: "Reminder", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo vel eros vestibulum vulputate. Integer ac nulla ut odio aliquet cursus." }
      // ]
    };
  },
};
</script>

<style scoped>
.custom-bg {
  background-image: url("../assets/bnhsonlineheader.png");
  color: white;
}

h1 {
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 1000;
  color: white;
}

h2 {
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-style: italic;
}

h3 {
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #02231c;
}

.custom-con {
  border: #02231c;
}
</style>
