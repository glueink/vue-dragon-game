<template>
	<nav class="navbar navbar-light bg-light sticky-top">
		<a class="navbar-brand" href="#">Dragons Of Mugloar</a>
		<div class="mr-auto">
			<span class="navbar-text px-2">Lives: <span class="badge badge-danger">{{ game.lives }}</span></span>
			<span class="navbar-text px-2">Gold: <span class="badge badge-warning">{{ game.gold }}</span></span>
			<span class="navbar-text px-2">Level: <span class="badge badge-info">{{ game.level }}</span></span>
			<span class="navbar-text px-2">Turn: <span class="badge badge-dark">{{ game.turn }}</span></span>
		</div>
		<div class="ml-auto">
			<span class="navbar-text px-2">Score: <span class="badge badge-secondary">{{ game.score }}</span></span>
			<span class="navbar-text px-2">High Score: <span class="badge badge-secondary">{{ game.highScore }}</span></span>
			<span class="mx-2"></span>
			<a class="btn btn-success" href="#" role="button" @click="newGame()">New game</a>
		</div>
	</nav>
</template>

<script>
import mapActions from 'vuex'
export default {
  props: ['game'],
  methods: {
    newGame () {
      this.$store.dispatch('initGame')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
