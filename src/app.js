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
    <div id="test"></div>
   </div>
  `,
  data(){
    return {
      loading1: false
    }
  },
  methods:{
    x(){
      this.loading1 = !this.loading1
    }
  }
})


// 单元测试

import chai from 'chai'

const  expect = chai.expect;
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      iconName:'setting'
    }
  })
  vm.$mount('#test')
  let useElement = vm.$el.querySelector('use')
  console.log(vm.$el);
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      iconName:'setting',
      loading:true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  console.log(vm.$el);
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      iconName: 'setting',
      iconPosition:'Right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}