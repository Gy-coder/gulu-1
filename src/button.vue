<template>
  <button class="g-button" :class="{[`icon${iconPosition}`]:true}">
    <g-icon class="icon" :name="iconName" v-if="iconName"></g-icon>
    <g-icon class="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<style lang="scss">
  @keyframes spin {
    0%{transform: rotate(0)}
    100%{transform: rotate(360deg)}
  }
  .loading{
    animation: spin 2s linear infinite;
  }
  .g-button {
    height: var(--button-height);
    font-size: var(--button-font-size);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    padding: 0 .8em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      margin-right: .3em;
      order: 1;
    }

    > .content {
      order: 2;
    }

    &.iconRight {
      > .icon {
        margin-left: .3em;
        margin-right:0;
        order: 2;
      }

      > .content {
        order: 1;
      }
    }
  }
</style>


<script>
  export default {
    // props: ['iconName', 'iconPosition']
    props:{
      iconName:{},
      iconPosition:{
        type:String,
        default:'Left',
        validator(value){
          return !(value !== 'Left' && value !== 'Right');
        }
      }
    }
  }
</script>