<template>
  <button class="g-button" :class="{[`icon${iconPosition}`]:true}">
    <svg class="icon" aria-hidden="true" v-if="iconName">
      <use :xlink:href="`#i${iconName}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<style lang="scss">
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
      margin-right: .1em;
      order: 1;
    }

    > .content {
      order: 2;
    }

    &.iconRight {
      > .icon {
        margin-left: .1em;
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
    props: ['iconName', 'iconPosition']
  }
</script>