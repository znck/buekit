import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Input from '../Input.vue'

describe('Input.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Input, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
