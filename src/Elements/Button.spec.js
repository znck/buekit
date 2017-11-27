import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import xButton from './Button.vue'

describe('Button.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(xButton, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
