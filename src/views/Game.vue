<template>
  <div class="game">
    <app-header />
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-8 mb-3">
          <h1>Quest Desk</h1>
          <div class="card-columns">
            <messages />
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <h1>Shop</h1>   
          <shop />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Messages from '@/components/Messages.vue'
import Shop from '@/components/Shop.vue'

export default {
  name: 'game',
  components: {
    appHeader: Header,
    messages: Messages,
    shop: Shop
  }
}
</script>
