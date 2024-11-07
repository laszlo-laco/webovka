<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
  </div>
</template>