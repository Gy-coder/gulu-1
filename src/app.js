import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <g-button>按钮</g-button>
    <g-button icon-name="play" icon-position="Right">按钮</g-button>
    <g-button icon-name="play">按钮</g-button>
   </div>
  `
})