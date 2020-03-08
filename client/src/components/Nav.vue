<template>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://www.pngfind.com/pngs/m/421-4215718_crunch-fitness-vector-logo-hd-png-download.png" width="112" height="28">
    </a>
   

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">


      <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
      <router-link to="/game" class="navbar-item" active-class="is-current">Private Feed</router-link>
      <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          DropDown
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Information
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Address
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Help
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-primary" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: ()=>({
    isOpen: false
  })
}
</script>

<style>
  .is-current {
    font-weight: bold;
    color: blueviolet
  }
</style>