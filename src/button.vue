<template>
  <button class="g-button">hi</button>
</template>

<style lang="scss">
  .g-button{
    height: var(--button-height);
    font-size: var(--button-font-size);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    padding: 0 1em;
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background-color: var(--button-active-bg) ;
    }
    &:focus{
      outline:none;
    }
  }



</style>


<script>
  export default {}
</script>