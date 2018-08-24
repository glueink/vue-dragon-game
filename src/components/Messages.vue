<template>
	<div>
			<message v-for="message in messages" :key="message.adId" :message="message"></message>
	</div>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
	components: { Message },
	data() {
		return {
			messages: [
				{
					"adId": "V34NJILv",
					"message": "Create an advertisement campaign for Morgane Quincey to promote their house based business",
					"reward": 27,
					"expiresIn": 7,
					"probability": "Walk in the park"
				},
				{
					"adId": "2wkiBtzs",
					"message": "Escort Doron L'hernault to field in Orrinmoore where they can meet with their long lost pan",
					"reward": 72,
					"expiresIn": 7,
					"probability": "Hmmm...."
				},
				{
					"adId": "3RJqdY4j",
					"message": "Help Brooklynn Warwick to clean their horse",
					"reward": 4,
					"expiresIn": 7,
					"probability": "Piece of cake"
				},
				{
					"adId": "Bw5EdYP4",
					"message": "Help Sheenagh Sharrow to reach an agreement with Modeste Chamberlain on the matters of disputed clothes",
					"reward": 5,
					"expiresIn": 7,
					"probability": "Piece of cake"
				}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
