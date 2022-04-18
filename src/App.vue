<template>
<div>

    <!--<input type="text" placeholder="add a todo here" v-model="todo"/>
    <button @click="addTodo">Add Todo</button>
      <ul v-for="(item, index) in arrayList" :key="index">
        <div style="display:flex;justify-content:center">
          <div><li>{{item}}</li></div>
          <div><button @click="remove(index)">Remove Todo</button></div>
        </div>
      </ul>-->
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
   <!--<Users msg="Welcome to Your Vue.js App"/> -->
  
<!--<router-view />-->

<regsiter-form/>
</div>

 
</template>

<script>
//import Users from './components/Users.vue';
//import dashboard from './components/dashboard.vue';
//import Login from './components/Login.vue';
//import axios from 'axios';
//import Login from './components/RegisterForm.vue';
import RegsiterForm from './components/RegsiterForm.vue';

export default {
  name: 'App',
  components: {
   // Users,
   //Login,
   //dashboard
   
    RegsiterForm
  },
  /*data(){
    return{
      username: '',
      password:'',
      todo: '',
      arrayList: [1,2,3,4,5],
      remov:''
    }
  },*/
  /*methods: {
    checkCredentials() {
    this.username="Anjali";
    this.password="12345";
     
      /*console.log(this.username);
      console.log(this.password);*/
     /*if(this.username=="Anjali" && this.password=="12345")
      {
        console.log("it is correct")
         this.$router.push('/dashboard');
       /* alert("Username matches and password");
                const URL="https://jsonplaceholder.typicode.com/todos/9";
                axios
                .get(URL)
                .then(res=>{
                    console.log(res.data);
                })*/
            

    /*  }
      else{
        alert("Username  and password doesnt match ")
      }
    },
    addTodo(){
     this.arrayList.push(this.todo);
     this.todo = ''
    },
    remove(index){
      /*this.arrayList.pop(this.todo);
        this.todo=''*/
        /*this.remov=this.todo;
        console.log(this.remov);*/
        
     /* this.arrayList.splice(index,1); 
      
        
       
        
    }
      
      
      
      
      

    }*/
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
.flex-container{
  display: flex;
  
  flex-direction: column;
}
.flex-container>div{

  width: 80%;
  margin: auto;
}
.logodiv img{
  display: none;
}

.innerflex-container{
  display: flex;
  
  flex-direction: row;
  max-height: 60%;
  justify-content: center;
}

.desimg{
 width: 50%;
 height: 100%;
  

 
}
.desimg img{
  max-width:80% ;
  
  
  
 }
.deskdiv{
  padding: 20px;
 max-height: 50%;
  max-width: 40%;
  min-width: 30%;
}
.deskdiv img{
  height: 50px;
}
.forgetpass{
  position: relative;
  top:5px;
  left: 30%;
}
h4{
  margin-top: 30px;
  opacity: 0.7;
  margin-bottom: 20px;
}
p{
  font-size: 10px;
  opacity: 0.7;
  font-weight: bold;
}
input{
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  opacity: 0.5;
  border-radius: 4px;
  border:1px solid gray;
}
input[type=email]
{
  position: relative;
  top:10px;
  margin-bottom: 5px;
 
 
}
input[type=button]
{
  border-radius: 20px;
  border:1px;
  color:white;
  margin-top: 20px;
  background-color: black;

}
.signup{
  margin-top: 50px;
}
a{
  color: darkcyan;
}
@media only screen and (max-width:450px)
{
.desimg{
  display: none;
 width: 50%;
 height: 100%;
}
.desimg img{
  max-width:80% ;
}
 
.deskdiv{
  padding: 20px;
  max-height: 50%;
  max-width: 90%;
  min-width: 70%;
}
.deskdiv img{
  height: 50px;
}
.forgetpass{
  position: relative;
  top:5px;
  left: 30%;
}
h4{
  margin-top: 30px;
  opacity: 0.7;
  margin-bottom: 20px;
}
p{
  font-size: 10px;
  opacity: 0.7;
  font-weight: bold;
}
input{
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  opacity: 0.5;
  border-radius: 4px;
  border:1px solid gray;
}
input[type=email]
{
  position: relative;
  top:10px;
  margin-bottom: 5px;
 
 
}
input[type=button]
{
  border-radius: 20px;
  border:1px;
  color:white;
  margin-top: 70%;
  background-color: black;

}
.signup{
  margin-top: 30px;
}
}




</style>
