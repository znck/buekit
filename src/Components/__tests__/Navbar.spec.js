import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Navbar from '../Navbar.vue'

const renderer = createRenderer()
function snapshots(...options) {
	options.forEach(
    option => it('matches snapshot: ' + JSON.stringify(option), () => {
      const { props: propsData, slots = {} } = option
      slots.default = slots.default || '<p>content</p>'
      const wrapper = shallow(Navbar, { propsData, slots })

      slots.default === '<p>content</p>' && // If default slot is not provied.
      expect(wrapper.contains('p')).toBe(true)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) {
          throw new Error(err)
        }

        expect(str).toMatchSnapshot()
      })
    })
  )
}

describe('Navbar.vue', () => {
  snapshots(
    {},
    {props: {color: 'white'}},
    {props: {noBurger: true}},
    {props: {tag: 'nav'}},
    {props: {transparent: true}},
    {slots: {start: '<p>content</p>'}},
    {slots: {end: '<p>content</p>'}},
    {slots: {menu: '<p>content</p>'}}
  )

  it('should have background', () => {
    const wrapper = shallow(Navbar, { propsData: { color: 'white' } })

    expect(wrapper.hasClass('is-white')).toBe(true)
  })

  it('should validate background color', () => {
    const wrapper = shallow(Navbar, { propsData: { color: 'any' } })

    expect(wrapper.vm.$options.props.color.validator('any')).toBe(false)
  })
})
