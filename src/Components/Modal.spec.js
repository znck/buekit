import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Modal from './Modal.vue'

describe('Modal.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Modal, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
