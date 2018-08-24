<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ message.probability }} <span class="badge badge-warning"> {{ message.reward }}</span></h5>
      <p class="card-text text-left mb-1">{{ message.message }}</p>
      <p class="card-text d-flex justify-content-between align-items-center">
        <small class="text-muted">Expires In {{ message.expiresIn }}</small>
        <button type="button" class="btn btn-primary btn-sm">Do This</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'message' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
