<template>
	<div>
			<message v-for="message in messages" :key="message.adId" :message="message"></message>
	</div>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
  props: ['messages'],
  components: { Message }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
