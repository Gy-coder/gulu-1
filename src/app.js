import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <g-button @click="x" :loading="loading1">按钮</g-button>
    <g-button icon-name="setting" icon-position="Right" :loading="loading1">按钮</g-button>
    <g-button icon-name="setting" :loading="loading1">按钮</g-button>
    <g-button-group>
      <g-button icon-name="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon-name="right">下一页</g-button>
    </g-button-group>
    
   </div>
  `,
  data(){
    return {
      loading1: false
    }
  },
  methods:{
    x(){
      console.log(this.loading1)
      this.loading1 = !this.loading1
    }
  }
})
