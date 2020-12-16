<template>
  <svg class="g-icon" aria-hidden="true" v-if="name">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>


<script>
  export default {
    name:'gIcon',
    props: {
      name: {
        type: String
      }
    }
  }
</script>


<style lang="scss">
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>