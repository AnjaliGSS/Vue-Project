 <template> 
  <div class="flex-container" id="app">
   
     <div class="innerflex-container">
      <div class="deskdiv">
        
        <h4>Sign In</h4>
        <p>Wellbeing and development tool are just click<br>away</p>
        <input type="email" placeholder="Email" name="username" v-model="username"><br>
        <input type="pass" placeholder="Password" name="password" v-model="password" >
        <p><span class="forgetpass"><a href="forgetpass" >Forget Password?</a></span></p><br>
       <router-link to='/dashboard'> <input type="button" value="Sign In" @click="checkCredentials()"></router-link>
        <p  class="signup"><span>New to Raiys?<a href="signup">Sign Up</a></span></p>
      </div>

    </div> 
</div>
</template>

<script >
export default {
  name: 'Login',
}
</script>

<style scoped>

</style>
