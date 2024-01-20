<template>
    <div>
       <h2>login</h2>
       <input type="text" v-model="login.name" >
       <input type="password" v-model="login.password" >

       <button @click="loginUser" type="button">submit</button>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
// import router from 'vue-router'

const login = reactive({
    name:'',
    password:''
})

  function loginUser(){
     const formdata= localStorage.getItem('myCat')

     let data =JSON.parse(formdata)

     if(login.name == data.name){

        if(login.password == data.password){
            // this.$router.push('/');
        }else{
            alert("password not match!")
        }
     } else{
        alert("name is not match!")
     }
      console.log(data)
  }
</script>

<style lang="scss" scoped>

</style>