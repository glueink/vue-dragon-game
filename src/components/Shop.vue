<template>
	<ul class="list-group">
		<a href="#" class="list-group-item" v-for="item in shop" :key="item.Id" @click="buyShopItem(item)">
			{{ item.name }}
			<span class="badge badge-warning">{{ item.cost }}</span>
		</a>
	</ul>
</template>

<script>
export default {
  props: [ 'shop' ],
  methods: {
    buyShopItem (item) {
      this.$store.dispatch('purchaseItem', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
