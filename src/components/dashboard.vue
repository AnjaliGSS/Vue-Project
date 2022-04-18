<template>
    <div>
        <input type="text" v-model="text"/>
        <button @click="changeText">ChangeText</button>

         <input type="text" v-model="text"/>
        <button @click="changeText2">ChangeText</button>
    </div>
</template>


<script>
//import App from '../App.vue';
  export default {
    name: 'dashboard',
    data(){
        return{
            text: 1
        }
    },
    methods:{
        changeText(){
            
            this.text=this.text+ 1; 
        },  
        changeText2(){
          
            this.text=this.text+ 1; 
        }
    },
    updated(){
        alert("I am updating");
    },
    beforeUnmount(){
        alert("This page is getting destroyed");
    },
    beforeCreate(){
        console.log("I am using ");


    }
  }
  </script>