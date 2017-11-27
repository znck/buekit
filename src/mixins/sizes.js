import {toMap} from '../utils'

const sizes = toMap([
  // Standard sizes.
	'small', 'medium', 'large',
  // Hero only size.
	'fullheight'
])

export default {
	props: {
		size: {
			type: String,
			validator: size => size === undefined || size in sizes
		}
	}
}
