<template>
<div class="outerdiv">
    <div class="middlediv">
        <div class="nav">
            <div>Anywhere app</div> 
            <div>Home</div>
            <div>Join</div>
        </div>
        <div class="main">
            <p style="color:white;text-align:left;margin-top:60px;font-size:8px">START FOR FREE</p>
            <h2 style="color:white;text-align:left;margin-top:15px">Create new account<span style="color:#00cdfe">.</span></h2>
            <p style="color:white;text-align:left;opacity:0.7;font-size:8px;margin-top:10px">Allready A Member<a href="#" style="color:#00cdfe">Log In</a></p>
            <div style="margin-top:20px">
                <div class="section1">
                    <div><input type="text" placeholder="FIRST NAME"><font-awesome-icon icon="fa-regular fa-coffee"></font-awesome-icon></div>
                    <div><input type="text" placeholder="LAST NAME"></div>
                </div>
                <div><input type="text" placeholder="Email"></div>
                <div><input type="text" placeholder="Password"></div>
                <div class="footer">
                    <div><input type="button" value="Change Password" ></div>
                    <div><input type="button" value="Change Password" ></div>
                </div>
                
            </div>
        </div>
        
    </div>
</div>
    
</template>
<script>


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
.outerdiv{
    display: flex;
    height: 500px;
    
    width: 50%;
    background-image: linear-gradient(to right, gray , white);
    margin: auto;
    border:2px solid black;
    justify-content: center;
    align-items: center;
    
}
.middlediv
{
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 80%;
    
    border-radius: 20px;
    background-image: linear-gradient(0deg, rgba(83, 105, 118, 1) 15%, rgba(59, 81, 93, 1) 35%, rgba(36, 58, 70, 1) 50%, rgba(14, 36, 47, 1) 65%, rgba(0, 15, 27, 1) 85%, rgba(0, 0, 0, 1) 100%);
    padding: 25px;
    
  
   
}
.middlediv>div{
    width: 45%;

    
    
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
   
  
    

}



.footer{
    display: flex;
    margin-top:10px;
    justify-content: space-between;
   
    
    
}
.footer div{
    width: 90%;
}
input{
    font-size: 7px;
    
    height: 30px;
    
}
input[type=text]
{
    color: white;
    border-radius: 10px;
    border: 2px hidden;
}
input[type=button]:hover{
    background-color: #00cdfe;

    }
input[type=text]:hover{
    color:white;
    
    border: 1px solid #00cdfe;
    
}
.userimg{
    position: relative;
    top: 0px;
    right: 0px;
    width: 24px;
    height: 24px;
}



</style>
