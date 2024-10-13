<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/demo">Event Loop Demo</router-link>
      </nav>
      
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  nav {
    padding: 15px;
    background-color: #f5f5f5;
  }
  nav a {
    margin: 10px;
    text-decoration: none;
    color: #42b983;
  }
  </style>
  