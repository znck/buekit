import {toMap} from '../utils'

const colors = toMap([
  // Standard colors.
	'primary', 'info', 'success', 'warning', 'danger', 'dark', 'light',
  // Button only colors.
	'white', 'link', 'text'
])

export default {
	props: {
		color: {
			type: String,
			validator: color => color === undefined || color in colors
		}
	}
}
