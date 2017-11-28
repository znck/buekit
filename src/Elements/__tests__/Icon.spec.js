import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Icon from '../Icon.vue'

describe('Icon.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Icon, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
