<template>
    <footer class="footer">
      <div class="container">
        <p>
          <a href="https://instagram.com/laszlo_laco" target="_blank" rel="noopener">Instagram</a> |
          <a href="https://www.linkedin.com/in/laszlo-ivan/" target="_blank" rel="noopener">LinkedIn</a> |
          <a href="https://github.com/laszlo-laco" target="_blank" rel="noopener">GitHub</a> |          
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  .footer {
    padding: 1em;
    background-color: white;
    color: black;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  