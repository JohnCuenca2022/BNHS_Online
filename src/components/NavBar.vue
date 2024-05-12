<script>
import { signOutUser, getUserID } from "../backend/auth.js";
import { isUserAdmin } from "@/backend/database.js";

export default {
  setup() {

    

    return {
      signOutUser,
    };
  },
  data() {
    return {
      isAdmin: isUserAdmin()
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" to="/">
      <img
        src="../assets/bnhslogo.png"
        alt=""
        width="50"
        height="50"
        style="margin-top: -10px"
      />
      <strong> BNHS Online</strong></router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/announcements"
            >Announcements</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/forum">Forum</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <ul class="navbar-nav flex-grow-0" style="margin-left: auto">
        <li class="nav-item">
          <p
            @click="signOutUser"
            class="nav-link"
            style="cursor: pointer; margin-top: 0.8rem"
          >
            Logout
          </p>
        </li>
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            ><img
              src="../assets/account.png"
              alt="user"
              style="width: 50px; height: 50px"
          /></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #48bf53;
  color: white;
}

.nav-link {
  color: white;
  margin: 5px;
}

.nav-link {
  font-size: 20px;
}

.navbar-brand {
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  font-weight: 1000;
  color: white;
  margin: 0px 25px 0px 20px;
}
</style>
