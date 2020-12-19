import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe('props', () => {

    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置value.', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('可以设置disabled.', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以设置readOnly.', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('可以设置error.', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持change', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      // 如何测试change事件以及第一个参数
      vm.$on('change',callback)
      let event = new Event('change')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持input', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      // 如何测试change事件以及第一个参数
      vm.$on('input',callback)
      let event = new Event('input')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持focus', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      // 如何测试change事件以及第一个参数
      vm.$on('focus',callback)
      let event = new Event('focus')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持blur', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      // 如何测试change事件以及第一个参数
      vm.$on('blur',callback)
      let event = new Event('blur')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
  })
})