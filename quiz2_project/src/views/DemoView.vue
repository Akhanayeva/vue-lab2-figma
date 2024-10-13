<template>
    <div>
      <h1>Event Loop Live Demo</h1>
      <button @click="startDemo">Start Demo</button>
      <p>Macro Tasks:</p>
      <ul>
        <li v-for="(task, index) in macroTasks" :key="index">{{ task }}</li>
      </ul>
      <p>Micro Tasks:</p>
      <ul>
        <li v-for="(task, index) in microTasks" :key="index">{{ task }}</li>
      </ul>
      <p>{{ statusMessage }}</p>
      <router-link to="/">Back to Explanation</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        macroTasks: [],
        microTasks: [],
        statusMessage: 'Click "Start Demo" to visualize the Event Loop'
      };
    },
    methods: {
      async startDemo() {
        this.statusMessage = 'Demo started...';
        this.addMacroTask('Macro Task 1');
        
        await this.executeMicroTask('Micro Task 1');
        this.addMacroTask('Macro Task 2');
        
        await this.executeMacroTask();
        
        this.addMacroTask('Macro Task 3');
        this.statusMessage = 'Demo finished.';
      },
      addMacroTask(task) {
        this.macroTasks.push(task);
      },
      async executeMacroTask() {
        return new Promise((resolve) => {
          setTimeout(() => {
            this.addMacroTask('Macro Task (setTimeout)');
            resolve();
          }, 1000);
        });
      },
      executeMicroTask(task) {
        return new Promise((resolve) => {
          Promise.resolve().then(() => {
            this.microTasks.push(task);
            resolve();
          });
        });
      }
    },
    mounted() {
      console.log('Component Mounted');
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 20px;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
  }
  </style>
  