import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div class="box">
      <g-button>按钮</g-button>
      <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
      <g-button icon="settings"  icon-position="right">按钮</g-button>
      <g-button icon="settings" >按钮</g-button>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right">下一页</g-button>
      </g-button-group>
    </div>
    <div class="box">
      <g-input value="g-input"></g-input>
      <g-input value="g-input" disabled></g-input>
      <g-input value="g-input" readonly></g-input>
      <g-input value="g-input" error="密码错误"></g-input>
    </div>
   </div>
  `,
  data(){
    return {
      loading1: false
    }
  }
})


// 单元测试


