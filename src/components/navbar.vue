 <script setup>
 import {menudata} from '../menu/menu'
</script>
<template>
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul v-for="menu in menudata" :key="menu" class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" :to=menu.childpath>{{ menu.name }}</router-link>
      </li>
      <li class="nav-item">
        <!-- <router-link class="nav-link" to="/about">About</router-link> -->

      </li>
      <li class="nav-item">
        <!-- <router-link class="nav-link" to="/contact">Contact</router-link> -->

      </li>
      <li class="nav-item">

      </li>
    </ul>
  </div>
</nav></div>
</template>