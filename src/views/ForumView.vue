<template>
    <div class="forum">
      <!-- FORUM HEADER -->
      <div class="p-5 custom-bg text-white text-center">
        <h1>💬 School Forum Page 💬</h1>
        <h2>Engage, Discuss, and Collaborate: Join our vibrant School Forum page to connect with teachers, parents,
          and students. Share insights, and explore educational topics</h2>
      </div>
  
      <div class="container mt-5">
        <div class="row">
          <!-- FORUM GUIDELINES -->
          <div class="col-sm-4 bg-light rounded">
            <br>
            <img src="../assets/bnhslogo.png" class="img-fluid mx-auto d-block img-responsive margin" style="width:50%" alt="Image">
            <h3 class="mt-4 text-center">Forum Guidelines</h3>
            <p>1. <strong>Respectful Communication:</strong> Treat others with courtesy.</p>
            <p>2. <strong>Stay On Topic:</strong> Keep discussions relevant to school-related matters.</p>
            <p>3. <strong>Constructive Feedback:</strong> Provide feedback in a constructive manner.</p>
            <p>4. <strong>Privacy and Confidentiality:</strong> Respect the privacy of others and avoid sharing
              personal or confidential information.</p>
            <hr class="d-sm-none">
          </div>
  
          <!-- FORUM FORM -->
          <div class="col-sm-8 custom-con">
            <h3>Your Forum Entry:</h3>
            <p>Please make sure to adhere to our forum guidelines.</p>
            <form action="/action_page.php">
              <div class="mb-3 mt-3">
                <textarea class="form-control" rows="3" id="comment" name="text"></textarea>
              </div>
              <button type="submit" class="btn btn-success btn-lg">Submit</button>
            </form>
            <br>
            <br>
  
            <!-- FORUM POSTS PLACEHOLDER -->
            <div class="forum-posts">
              <ForumPost v-for="post in forumPosts" :key="post.id" :post="post" />
            </div>
          </div>
        </div>
        <br><br>
      </div>
    </div>
  </template>
  
  <script>
  import ForumPost from '@/components/ForumPost.vue';
  
  export default {
    components: {
      ForumPost
    },
    data() {
      return {
        forumPosts: [
          { id: 1, title: "First Forum Post", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { id: 2, title: "Second Forum Post", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
          { id: 3, title: "Third Forum Post", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .custom-bg {
    background-image: url('../assets/bnhsonlineheader.png');
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
  