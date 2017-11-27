import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Level from './Level.vue'

function snapshots(...options) {
	options.forEach(option =>
    it('matches snapshot', () => {
	const wrapper = shallow(Level, { context: { props: option }, slots: {default: '<p>Content</p>'} })
	const renderer = createRenderer()

	renderer.renderToString(wrapper.vm, (err, str) => {
		if (err) {
			throw new Error(err)
		}
		expect(str).toMatchSnapshot()
	})
})
  )
}

describe('Level.vue', () => {
	snapshots(
    {},
    {device: 'mobile'},
    {left: true},
    {right: true},
    {item: true}
  )
})
