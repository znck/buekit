import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Table from './Table.vue'

describe('Table.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Table, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
