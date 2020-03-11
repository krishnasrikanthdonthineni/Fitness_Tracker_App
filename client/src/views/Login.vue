<template>

  <form class="container" @submit.prevent="login">
      {{error}}
   

  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
   
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="krishna@gmail.com" class="input" required v-model="email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required v-model="password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
                <p class="control">
              <button class="button is-success">
                Login
              </button>
                 </p>
            </div>
            <p class="has-text-grey">
                        <a href="/signup">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
         
        </div>
      </div>
    </div>
  </div>

  </form>
</template>

<script>
import { Login } from "../models/Users";

export default {
    data(){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            try {
                Login(this.email, this.password);
                this.$router.push('/privatefeed');
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>

<style>

</style>