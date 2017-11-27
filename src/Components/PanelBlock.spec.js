import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import PanelBlock from './PanelBlock.vue'

describe('PanelBlock.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(PanelBlock, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
