<script>
  import AppFooter from './components/Footer.vue';
  import ServiceView from './views/ServiceView.vue';

  export default{
    name: "App",
    components: {
      ServiceView,
      AppFooter,
    },   
  }
</script>

<template>
  <div id="app">
    <main>
    <ServiceView/>
    </main>
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