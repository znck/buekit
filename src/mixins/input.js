import PropTypes from '@znck/prop-types'

import { colors, sizes } from '../shared'
import { styleResolver } from '../utils'

export const props = {
	color: PropTypes.oneOf(colors),
	size: PropTypes.oneOf(sizes),
	value: PropTypes.any.isRequired,
	focused: PropTypes.bool.value(false),
	hovered: PropTypes.bool.value(false),
	static: PropTypes.bool.value(false)
}

export function styles(props, $style) {
	const _ = styleResolver($style)

	return [
		props.size && _(`is-${props.size}`),
		props.color && _(`is-${props.color}`),
		props.focused && _('is-focused'),
		props.hovered && _('is-hovered'),
		props.static && _('is-static')
	]
}
