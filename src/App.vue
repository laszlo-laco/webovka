<script>
  import AppFooter from './components/Footer.vue';

  export default{
    name: "App",
    components: {
      AppFooter,
    },
    data() {
      return {
        fullText: "Tato webová stránka je aktuálně v přípravě.",
        typedText: "",
        index: 0
      };
    },
    mounted() {
      this.startTyping();
    },
    methods: {
      startTyping() {
        const typingSpeed = 90; // Speed in milliseconds (change as needed)
        const interval = setInterval(() => {
          if (this.index < this.fullText.length) {
            this.typedText += this.fullText[this.index];
            this.index++;
          } else {
            clearInterval(interval);
          }
        }, typingSpeed);
      }
    }
  }
</script>

<template>
  <div id="app">
    <div class="okno">
      <div class="typing-text">
        {{ typedText }}
      </div>
    </div>
    <!-- Comment 
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/">Domů</RouterLink>
      <RouterLink to="/maths">Na matiku</RouterLink>
      <RouterLink to="/teach">Na doučko</RouterLink>
    </nav>
    <main>
      <router-view />
    </main>
    -->
    <AppFooter />
  </div>
</template>