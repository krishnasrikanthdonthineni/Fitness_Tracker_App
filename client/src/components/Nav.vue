
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
 <!--     <router-link to="/" class="navbar-item is-size-4 has-text-weight-semibold">Crunch Fitness</router-link> -->
       <a class="navbar-item" href="https://bulma.io">
      <img src="https://www.pngfind.com/pngs/m/421-4215718_crunch-fitness-vector-logo-hd-png-download.png" width="112" height="28">
    </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarContent"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarContent" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
         <router-link to="/privatefeed" class="navbar-item" active-class="is-current">Private Feed</router-link>
       
        <router-link class="navbar-item" to="/About">About</router-link>
        <router-link class="navbar-item" to="/BmiCalculator">BMI Calculator</router-link>


        <div class="navbar-item">
          <div class="field w-24">
            <div class="control">
              <input class="input" type="text" placeholder="Search for people" />
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/Login" class="button is-primary">Sign in</router-link>
            <router-link to="/SignUp" class="button is-primary">Sign up</router-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>{{isLoggedIn ? getCurrentUserFullName : ''}}</span>
          </a>
          <div class="navbar-dropdown">
            <router-link to="/User" class="navbar-item">My profile</router-link>
            <router-link to="/" class="navbar-item">Sign out</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed:{
    ...mapGetters(['getCurrentUserFullName', 'isLoggedIn']),
  }
};
</script>

<style>
.w-24{
  width: 24vw;
}
</style>