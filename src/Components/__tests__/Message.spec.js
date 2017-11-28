import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Message from '../Message.vue'

describe('Message.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Message, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
