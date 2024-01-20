<template>
    <div>
        <h3>{{ data }}</h3>
       <h2>Register</h2>
       <input type="text" name="name" placeholder="name" v-model="data.name">
       <input type="password" placeholder="password" v-model="data.password" >
       <input type="password" placeholder="Confrmpassword" v-model="data.confrmpassword"  >

       <button @click="submitForm" type="button">submit</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
     name:'',
     password:'',
     confrmpassword:''
})

function submitForm(){
    console.log(data)
    localStorage.setItem("myCat",JSON.stringify(data));
}
</script>

<style lang="scss" scoped>

</style>