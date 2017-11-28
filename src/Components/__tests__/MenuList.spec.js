import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import MenuList from '../MenuList.vue'

describe('MenuList.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(MenuList, { context: { children: [] } })
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
