<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-Toast'
  }
</script>

<style lang="scss" scoped>
  $font-size:14px;
  $toast-height:40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    font-size: $font-size;height:$toast-height;line-height: 1.8;position: fixed;
    top:0;left:50%;transform: translateX(-50%);display: flex;color:white;
    align-items: center;background: $toast-bg;box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
  }
</style>