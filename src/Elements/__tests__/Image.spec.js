import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Image from '../Image.vue'

describe('Image.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Image, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
