import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Pagination from '../Pagination.vue'

describe('Pagination.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Pagination, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
