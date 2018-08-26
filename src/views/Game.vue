<template>
  <div class="game">
    <app-header :game="game"/>
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-12 col-lg-8 mb-3">
          <h1>Quests Desk</h1>
          <div class="card-columns">
            <messages :messages="messages" />
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <h1>Shop</h1>
          <shop :shop="shop"/>
        </div>
      </div>
    </div>
    <alerts :alerts="alerts"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Messages from '@/components/Messages.vue'
import Shop from '@/components/Shop.vue'
import Alerts from '@/components/Alerts.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    appHeader: Header,
    messages: Messages,
    shop: Shop,
    alerts: Alerts
  },
  computed: {
    ...mapGetters([ 'game', 'messages', 'shop', 'alerts' ])
  },
  created () {
    this.$store.dispatch('initGame')
  }
}
</script>

<style lang="scss">
@media (max-width: 991.98px) {
  .card-columns { column-count: 3; }
}
@media (max-width: 1199.98px) {
  .card-columns { column-count: 2; }
}
@media (max-width: 575.98px) {
  .card-columns { column-count: 1; }
}
</style>
