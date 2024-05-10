<script>
  import { ref, onMounted } from 'vue';
  import { signInUser, getUser, redirectUserToHome } from '../backend/auth.js'
  import { useToast } from "vue-toastification";

  getUser()
  redirectUserToHome()

  export default {

    setup() {
      const toast = useToast();
      function showErrorToast() {
        toast.error("Invalid credentials.", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        });
      };

      const userEmail = ref("");
      const userPass = ref("");

      const getValue = async () => {
        console.log(userEmail.value);
        console.log(userPass.value);

        if (userEmail.value == ""){
          showErrorToast()
          return
        }
        if (userPass.value == ""){
          showErrorToast()
          return
        }
        
        const hasLoggedIn = await signInUser(userEmail.value, userPass.value)
        if (!hasLoggedIn) {
          showErrorToast()
          return
        }
        
      };

      return {
        toast,
        userEmail,
        userPass,
        getValue
      };
    }
  }
</script>

<template>
	<div class="wrapper">
	  <form class="form-signin">
		<br>
		<img src="../assets/bnhslogo.png" class="img-fluid mx-auto d-block img-responsive margin"  style="width:30%"
            alt="Image"><br>
		<h2 class="form-signin-heading text-center">Login</h2><br>
  
		<div>
		  <label class="control-label">Email</label>
		  <input ref="userEmailInput" v-model="userEmail" type="text" class="form-control" name="site" placeholder="Username" required autofocus>
		</div>
		<div>
		  <label class="control-label">Password</label>
		  <input ref="userPassInput" v-model="userPass" type="password" class="form-control" name="password" placeholder="*******" required autofocus>
		</div>
		<a class="forgot-password text-center" href="#"><router-link class="nav-link" to="/passwordreset">I forgot my password</router-link></a>  <br><br>
		<button class="btn btn-lg btn-success btn-block d-grid gap-2 col-6 mx-auto font-weight-bold" type="button" @click="getValue">LOGIN</button><br><br>
		<p class="text-center">Don't have an account?
			<router-link class="nav-link" to="/register"><strong>Register here!</strong></router-link></p>
	  </form>
	</div>
  </template>

<style scoped>
.wrapper {	
	margin-top: 20px;
  margin-bottom: 60px;
}

p{	
	margin-top: -30px;
}

.form-signin {
  max-width: 350px;
  padding: 15px 35px 45px;
  margin: 0 auto 50px;
  background-color: #fff;
  border-top: 1px solid rgba(0,0,0,0.08);
  border-right: 1px solid rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(0,0,0,0.12);
  border-left: 1px solid rgba(0,0,0,0.08);
  border-radius: 30px;
  box-shadow: 0 3rem 5rem -2rem rgba(0, 0, 0, 0.2);
}

.form-control {
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  height: auto;
  border-radius: 20px;
}

.form-signin input {
  margin-bottom:15px;
  height:44px;
}

.form-signin .forgot-password {
  display: block;
  font-size:15px;
}

.forgot-password{
	font-size: 20px;
}

.nav-link {
  font-size: 20px; 
  color:#48bf53;
  margin-bottom: -30px;
}
</style>