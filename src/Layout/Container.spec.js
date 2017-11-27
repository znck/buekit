import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Container from './Container.vue'

function snapshots(options) {
	options.forEach(option =>
    it('matches snapshot', () => {
	const wrapper = shallow(Container, {props: option, slots: {default: '<p>Content</p>'}})
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

describe('Container.vue', () => {
	snapshots([
    {},
    {type: 'fluid'}
	])
})
