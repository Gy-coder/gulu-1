import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <g-button @click="x" :loading="loading1">按钮</g-button>
    <g-button icon-name="setting" icon-position="Right" :loading="loading1">按钮</g-button>
    <g-button icon-name="setting" :loading="loading1">按钮</g-button>
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
