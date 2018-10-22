import {shallow} from '@vue/test-utils'
import {createRenderer} from 'vue-server-renderer'

import Columns from '../Columns.vue'

const renderer = createRenderer()

function renderWithProps(props) {
  return shallow(Columns, {
    context: { props },
    slots: {default: '<p>content</p>'}
  })
}

function snapshots(options) {
	options.forEach(
    option => it('matches snapshot: ' + JSON.stringify(option), () => {
      const wrapper = renderWithProps(option)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) {
          throw new Error(err)
        }
        expect(str).toMatchSnapshot()
      })
    })
  )
}

describe('Columns.vue', () => {
	snapshots([
    {},
    {centered: true},
    {vcentered: true},
    {gap: false},
    {gap: 8},
    {mobile: true},
    {tablet: true},
    {desktop: true},
    {multiline: true}
  ])
  
  test('custom tag', () => {
    const wrapper = renderWithProps({ tag: 'section' })

    expect(wrapper.is('section.columns')).toEqual(true)
  })
})
