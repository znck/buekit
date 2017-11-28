import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import NavbarBurger from '../NavbarBurger.vue'

describe('NavbarBurger.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(NavbarBurger, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
