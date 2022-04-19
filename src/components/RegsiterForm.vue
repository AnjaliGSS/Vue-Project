<template>

    <div class="outerdiv">
        <div class="middlediv" >
            <div class="nav">
                <div>Anywhere app</div> 
                <div>Home</div>
                <div>Join</div>
            </div>
            <div class="main">
                <p style="color:white;margin-top:60px;font-size:8px">START FOR FREE</p>
                <h2 style="color:white;margin-top:15px;">Create new account<span style="color:#00cdfe">.</span></h2>
                <p style="color:white;text-align:left;opacity:0.7;font-size:8px;margin-top:10px">Allready A Member<a href="#" style="color:#00cdfe">Log In</a></p>
            
                <div class="section1">
                    <div><input type="text" placeholder="FIRST NAME" v-model="fname"></div>
                    <div><input type="text" placeholder="LAST NAME" v-model="lname"></div>
                </div>
                <div><input type="text" placeholder="Email" v-model="Email"></div>
                <div><input type="text" placeholder="Password" v-model="Password"></div>
                <div class="section2">
                    <div><input type="button" value="Create Password" @click="addTodo" ></div>
                    <div><input type="button" value="Change Password" ></div>
                </div>
                
            </div>
        </div>
        
    </div>

    
</template>
<script>
 import axios from "axios";
const baseUrl="http://localhost:3000/todo";
export default{
    name:"RegisterFrom",
    data(){
        return{
            todo:[],
            fname:'',
            lname:'',
            Email:'',
            Password:''
        };
    },
    methods:{
        async addTodo(){
             //let res=await axios.post(baseUrl,{firstname:this.fname},{lastname:this.lname},{email:this.email},{password:this.Password});
            // this.todo=[...this.todo,res.data];
           // this.fname='',
             //this.lname='',
             //this.Email='',
             //this.Password=''
            let jsonObject = {
                firstname: this.fname,
                lastname: this.lname,
                email : this.Email,
                password: this.Password
            }
          /*  console.log(jsonObject);
            fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: new_title,
            body: new_body,
            userId: userid
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })*/
            await axios.post(baseUrl,jsonObject);
        }

    }
}

</script>
<style >
/*@import "./assets/_index.scss";
h3{

color:$primary;
}*/
*{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}
   
.outerdiv

{
    display: flex;
    justify-content: center;
    background-image: linear-gradient(0deg, rgba(83, 105, 118, 1) 15%, rgba(59, 81, 93, 1) 35%, rgba(36, 58, 70, 1) 50%, rgba(14, 36, 47, 1) 65%, rgba(0, 15, 27, 1) 85%, rgba(0, 0, 0, 1) 100%);
    
}

.middlediv{
     display: flex;
     flex-direction: column;
     padding: 25px;
     justify-content: left;
     text-align: left;
    
    

}
.nav{
    display: flex;
    font-size: 8px;
    padding-left:0px;
    justify-content: space-between;
    color: white;
    }
    
.section1
{
    display:flex;
    justify-content: space-between;
    max-width: 100%;
   
   
}
.section2{
    display: flex;
    margin-top:10px;
    
}
.section2>div{
   min-width: 50%;
}
input{
    font-size: 8px;
    height: 30px;
}
input[type=text]
{   
    border-radius: 10px;
}
input[type=button]:hover{
    background-color: #00cdfe;
    }
input[type=text]:hover{
    border-color: #00cdfe;
    color:#00cdfe;
    }

input[type=button],input[type=text]:active{
    color:white;
    }





</style>
