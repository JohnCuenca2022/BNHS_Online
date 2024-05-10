<template>
	<div class="wrapper">
	  <form class="form-signin">
		<br>
		<img src="../assets/bnhslogo.png" class="img-fluid mx-auto d-block img-responsive margin"  style="width:30%"
            alt="Image"><br>
		<h2 class="form-signin-heading text-center">Register Now!</h2><br>
  
		<div>
		  <label class="control-label">Email</label>
		  <input type="text" class="form-control" name="site" placeholder="yourdomain.com" required autofocus>
		</div>

        <div>
		  <label class="control-label">First Name</label>
		  <input type="text" class="form-control" name="site" placeholder="Enter First Name" required autofocus>
		</div>

        <div>
		  <label class="control-label"> Last Name</label>
		  <input type="text" class="form-control" name="site" placeholder="Enter Last Name" required autofocus>
		</div>

        <div>
		  <label class="control-label">Student Number</label>
		  <input type="text" class="form-control" name="site" placeholder="Enter Your/Your Child's Stud. #" required autofocus>
		</div>

        <div>
		  <label class="control-label">Username</label>
		  <input type="text" class="form-control" name="site" placeholder="Enter a Username" required autofocus>
		</div>

		<div>
		  <label class="control-label">Password</label>
		  <input type="password" class="form-control" name="password" placeholder="*******" required autofocus>
		</div>  
		<button class="btn btn-lg btn-success btn-block d-grid gap-2 col-6 mx-auto" type="submit">REGISTER</button><br><br>
		<p class="text-center">Already have an account?
			<router-link class="nav-link text-center" to="/login"><strong>Login here!</strong></router-link></p>
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