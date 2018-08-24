<template>
	<ul class="list-group">
		<a href="#" class="list-group-item" v-for="item in shopItems" :key="item.Id">
			{{ item.name }} 
			<span class="badge badge-warning">{{ item.cost }}</span>
		</a>
	</ul>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
	components: { Message },
	data() {
		return {
			shopItems: [
				{
					"id": "hpot",
					"name": "Healing potion",
					"cost": 50
				},
				{
					"id": "cs",
					"name": "Claw Sharpening",
					"cost": 100
				},
				{
					"id": "gas",
					"name": "Gasoline",
					"cost": 100
				}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
