<template>
  <div class="alerts-container" role="alert">
    <transition-group name="fade">
    <div class="alert" :class="{ 'alert-success': alert.success, 'alert-danger': !alert.success }" role="alert" v-for="(alert, index) in alerts" :key="index">
      {{ alert.message }}
    </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['alerts']
}
</script>

<style lang="scss">

</style>