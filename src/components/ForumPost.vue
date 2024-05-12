<template>
  <div class="forum-post">
    <h4><strong>{{ post.title }}</strong> - <em>{{formatFirebaseTimestamp(post.date)}}</em></h4>
    <p>{{ post.content }}</p>

    <!-- Previously Posted Comments Section -->
    <div v-if="true" class="previous-comments">
      <h4><strong>Comments:</strong></h4>
      <ul>
        <li v-for="(comment, index) in post.comments" :key="index">
          <strong>{{ comment.username }}</strong>: {{ comment.comment }}
        </li>
      </ul>
    </div>

    <!-- Comment Form -->
    <div class="comment-section">
      <h5>Add a Comment</h5>
      <form @submit.prevent="">
        <div class="form-group">
          <label for="text">Comment:</label>
          <textarea id="text" v-model="newComment.text" required></textarea>
        </div>
        <button @click="submitComment('asdfasdf', post.id)"  type="button"><strong>Add Comment</strong></button>
      </form>
    </div>
    <!-- End Comment Form -->
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig'
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

import { getUserID } from '@/backend/auth';
import { addComment, getUserName } from '@/backend/database';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newComment: {
        author: "", // Removing the author field
        text: "",
      },
    };
  },
  methods: {
    // addComment() {
    //   this.post.comments.push({
    //     author: "Anonymous", // Defaulting to 'Anonymous'
    //     text: this.newComment.text,
    //   });
    //   this.newComment.text = "";
    // },

    async submitComment(comment, docID){
      console.log(docID)
      var userID = await getUserID()
      console.log("userID " + userID)

      onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            const username = await getUserName(uid)
            addComment(docID, comment, uid, username)
        } else {
            // User is signed out
            console.log("User not logged in")
            //return "Anonymous"
        }
    });

      
    },

    formatFirebaseTimestamp(timestamp) {
      const jsDate = timestamp.toDate();
      const dateOptions = { month: 'short', day: '2-digit', year: 'numeric' };
      const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
      const formattedDate = jsDate.toLocaleDateString('en-US', dateOptions);
      const formattedTime = jsDate.toLocaleTimeString('en-US', timeOptions);
      const formattedDateTime = `${formattedDate} ${formattedTime}`;
      return formattedDateTime;
    }
  },
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
  background-color: #4caf50;
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
