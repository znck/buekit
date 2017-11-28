import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Subtitle from '../Subtitle.vue'

describe('Subtitle.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Subtitle, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
