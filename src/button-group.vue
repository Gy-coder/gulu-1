<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export  default  {
    name:'gButtonGroup',
    mounted() {
      const nodes = this.$el.children
      for(let i=0;i<nodes.length;i++){
        const node = nodes[i]
        const name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`g-button-group内必须都是g-button,但你写了个${name}`)
        }
      }
    }
  }
</script>


<style lang="scss">
  .g-button-group {
    display:inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index:1;
      }
    }
  }
</style>