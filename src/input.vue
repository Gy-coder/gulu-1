<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <icon name="error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>

</template>

<script>
  import icon from './icon'

  export default {
    components: {icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*  :root {*/
  /*  --button-height: 32px;*/
  /*  --button-font-size: 16px;*/
  /*  --button-bg: white;*/
  /*  --button-active-bg: #eee;*/
  /*  --border-radius: 4px;*/
  /*  --color: #999;*/
  /*  --border-color: #999;*/
  /*  --border-color-hover: #666;*/
  /*}*/
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453d;
  .wrapper {
    font-size: $font-size;display: inline-flex; align-items: center;

    > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;

      &:hover {border: 1px solid $border-color-hover}

      &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}

      &[disabled], &[readonly] {border-color: #ccc;color: #ccc;cursor: not-allowed}
    }

    &.error {
      > input {border: 1px solid $red;}

      > .g-icon {fill: $red;margin-left: 5px}

      > .errorMessage {color: $red;}
    }
  }
</style>


