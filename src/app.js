import Vue from 'vue'
import Button from './button'

Vue.component('g-button', Button)

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <g-button icon-name="Up">按钮</g-button>
    <g-button icon-name="play" icon-position="Right">按钮</g-button>
    <g-button icon-name="play">按钮</g-button>
   </div>
  `
})