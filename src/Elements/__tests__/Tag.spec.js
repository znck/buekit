import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Tag from '../Tag.vue'

describe('Tag.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Tag, { context: { props: {} } })
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
