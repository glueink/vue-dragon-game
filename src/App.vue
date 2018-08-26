<template>
  <div id="app">
    <router-view/>
    <footer><a href="mailto:jegor.salajev@gmail.com" class="copyright">&copy; Jegor Šalajev</a></footer>
  </div>
</template>

<script>

</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
  height: 100vh;
}
footer {
  text-align: center;
  margin: 30px 20px;
}
.copyright {
  color: #028090; 
  &:hover { color: #05668D; text-decoration: none;}
}
</style>
