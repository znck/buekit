import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Title from './Title.vue'

describe('Title.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Title, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
