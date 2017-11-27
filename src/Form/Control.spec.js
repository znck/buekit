import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Control from './Control.vue'

describe('Control.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Control, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
