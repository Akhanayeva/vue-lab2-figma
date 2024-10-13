<template>
    <div id="app">
      <img :src="require('./assets/background.png')" class="fullscreen-image" alt="Full Screen Image">
      <div class="rectangle"></div>
      <div class="rounded-rectangle">
        <p class="rounded-rectangle-content">New trips on Fall season! Full details on our Instagram accounts.</p>
      </div>
      <div class="layout-profile"></div>
      <img :src="require('./assets/profileicon.png')" class="profile-icon" alt="icon profile">
      <img :src="require('./assets/burger.png')" class="burger" alt="burger icon" @click="toggleMenu">
  
      <div>
        <div class="new-rectangle"></div>
        <div class="rectangledate"><h2>13.09.2024</h2></div>
        <div class="rectangletopic">{{ selectedType || "All Topics" }}</div>
      </div>
  
      <!-- <Header :toggleMenu="toggleMenu" /> -->
  
      <!-- Sidebar transition and menu logic -->
      <transition name="sidebar">
        <aside v-if="menuVisible" class="sidebar">
          <p class="sidebar_menu" @click="toggleMenu">MENU</p>
          <div class="content">
            <div class="navigation">
              <p
                v-for="menu in navigation"
                :key="menu.value"
                class="link"
                @click="filterComments(menu.value)"
              >
                {{ menu.name }}
              </p>
            </div>
            <div class="contact">
              <p class="head">CONTACTS</p>
              <div class="number">
                <p>PHONE: +1(234)-23-45-22</p>
                <p>ADDRESS: Green st., Yalow park</p>
                <p>EMAIL: Yallow@park.info</p>
              </div>
            </div>
          </div>
        </aside>
      </transition>
      <customCard :selectedTopic="selectedType" />
      <router-view :selectedType="selectedType" /> npm 
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import customCard from "./components/CustomCard.vue";
  // import Header from "./components/Header.vue";
  
  // State to control sidebar visibility
  const menuVisible = ref(false);
  const selectedType = ref(null);
  
  const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
  };


  
  // Define navigation options
  const navigation = [
    { name: "ADVENTURE BLOG", value: "Adventure" },
    { name: "SPORT BLOG", value: "Sport" },
    { name: "CULTURE BLOG", value: "Culture" },
    { name: "TECH BLOG", value: "Tech" },
    { name: "FOOD BLOG", value: "Food" },
    { name: "All Topics", value: null }
  ];
  
  // Function to filter comments by type and pass it to child components
  const filterComments = (type) => {
    selectedType.value = type;
    toggleMenu(); // Close sidebar after selection
  };


 
  </script>
  
  <style>
  html,
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    /* overflow-x: hidden; */
  }
  
  .fullscreen-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  
  .rectangle {
    background-color: rgba(255, 255, 255, 0.74);
    width: 1400px;
    height: 61px;
    top: 35px;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1;
  }
  
  .rounded-rectangle {
    background: linear-gradient(90deg, #E5F67C 0%, #ECEF64 33%, #D2E037 66%, #EAEE3A 100%);
    width: 1225px;
    height: 45px;
    top: 35px;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .layout-profile {
    width: 55px;
    height: 50px;
    position: absolute;
    top: 10px;
    right: 5px;
    background-color: #7EEFFF;
    z-index: 1;
    border-radius: 50px;
  }
  
  .profile-icon {
    width: 37px;
    height: 37px;
    position: absolute;
    top: 17px;
    right: 14px;
    z-index: 2;
  }
  
  .burger {
    width: 51px;
    height: 51px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    opacity: 1;
    cursor: pointer; /* Add cursor pointer for better UX */
  }
  
  .rounded-rectangle-content {
    position: relative;
    z-index: 3;
    font-family: 'Inknut Antiqua', sans-serif;
    font-size: 18px;
    font-weight: 750;
    line-height: 43.84px;
    text-align: justify;
    background: linear-gradient(90deg, #FFADAD 0%, #FF774C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    margin: 0;
    letter-spacing: 1px;
  }
  
  .new-rectangle {
    width: 900px;
    height: 555px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #FEFEFE 0%, #CED2D2 40%, #C1C5C5 62%, #B8BBBB 100%);
    border: 1px solid #63CFF1;
    opacity: 0.89;
    z-index: 0;
    border-radius: 50px;
  }
  
  .rectangledate {
    width: 210px;
    height: 45px;
    position: absolute;
    top: 100px;
    left: 284px;
    border-radius: 15px;
    background: #5BB9CD;
    z-index: 3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .rectangledate h2 {
    font-family: Inknut Antiqua;
    font-size: 38px;
    font-weight: 400;
    margin: 0;
  }
  
  .rectangletopic {
    width: 280px;
    height: 56px;
    position: absolute;
    top: 165px;
    left: 282px;
    border-radius: 15px;
    background: #5BB9CD;
    z-index: 3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    size: 25px;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 350px;
    background: #c1ebf1;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1000;
    transition: transform 0.3s ease;
  }
  



  /* Sidebar slide-in animation */
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition: transform 0.3s ease;
  }
  
  .sidebar-enter-from {
    transform: translateX(-100%);
  }
  
  .sidebar-leave-to {
    transform: translateX(-100%);
  }
  
  .sidebar_menu {
    width: 100%;
    border-radius: 20px;
    background: white;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    padding: 3px 0;
    cursor: pointer;
    color: #615c5c;
  }
  
  .content {
    height: 92%;
    background: white;
    margin: 25px 0;
    padding: 10px 0;
    border-radius: 10px;
  }
  
  .navigation .link {
    padding: 5px 20px; /* Adjust padding as necessary */
    background: linear-gradient(90deg, #5dde6a 0%, #43d749 43.79%, #21cd1e 100%);
    cursor: pointer;
    font-size: 20px; 
    font-weight: 500;
    color: white;
    text-align: left;
    margin: 0 0 15px 0; /* Ensure no additional margin is added */
}




  
.contact {
    padding: 5px; /* Padding for a slightly larger box */
    margin: 20px auto; /* Increased top margin to lower the box */
    border-radius: 10px;
    color: white;
    background: linear-gradient(180deg, #aff090 0%, #45c330 100%);
    width: 300px; /* Width for a larger box */
    text-align: center; /* Center text inside the box */
    
}

.contact .head {
    font-family: Jersey 15;
    font-size: 23px; /* Font size for the header */
    font-weight: 500;
}

.contact .number {
    margin-top: 15px; /* Adjusted margin for spacing */
    font-size: 16px; /* Font size for the numbers */
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px; /* Spacing between lines */
}



  </style>
  