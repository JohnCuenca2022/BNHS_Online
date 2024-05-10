<template>
  <div class="/">
    <!-- FIRST CONTAINER: LARGE SCHOOL HEADER IMAGE -->
    <div class="position-relative vh-100">
      <img src="../assets/bnhsonlineheader.png"
        class="position-absolute top-0 start-0 w-100 h-100" alt="Background Image">
      <div class="overlay-text">
        <strong>
          <h1>BACOOR NATIONAL HIGH SCHOOL <br>- GEORGETOWN ANNEX</h1>
        </strong>
        <p>Fostering Excellence in Education.</p>
      </div>
    </div>

    <!-- SECOND CONTAINER: BNHS ONLINE -->
    <div class="container-fluid bg-3 text-center">
      <br><br>
      <h1 class="margin" style="color:#48bf53">🖥️ Welcome to BNHS ONLINE!</h1><br>
      <div class="row">
        <div class="col-sm-4">
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</h4><br>
          <img src="../assets/login.png" class="img-responsive margin" style="width:60%"
            alt="Image">
        </div>
        <div class="col-sm-4">
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</h4><br>
          <img src="../assets/login.png" class="img-responsive margin" style="width:60%"
            alt="Image">
        </div>
        <div class="col-sm-4">
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</h4><br>
          <img src="../assets/login.png" class="img-responsive margin" style="width:60%"
            alt="Image">
        </div>
      </div>
    </div>
    <br><br><br>

    <!-- THIRD CONTAINER: REGISTER/LOGIN  -->
    <div class="p-5 custom-bg text-center">
      <h1> 📩 Connect with Us! 📩</h1>
      <p>Register Now to Participate in Forum Discussions</p>
      <router-link class="btn btn-secondary btn-custom btn-lg" to="/register">
        <strong>Register here to become a BNHS Online-r!</strong>
      </router-link>
    </div>


  </div>
</template>

<style scoped>
.custom-bg {
  background-color: #48bf53;
  color: white
}

.overlay-text {
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 1000;
  color: white;
}

h4 {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}

p {
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-style: italic;
}

btn-custom {
  font-size: 60px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
</style>