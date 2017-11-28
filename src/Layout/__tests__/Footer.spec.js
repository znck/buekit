import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Footer from '../Footer.vue'

describe('Footer.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Footer, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
