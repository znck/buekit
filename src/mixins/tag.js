import PropTypes from '@znck/prop-types'

export default (tag = 'div', abstract = false) => ({
	props: {
    /**
     * Tag for root element.
     * @version 0.0.0
     * @since Version 0.0.0
     */
		tag: abstract ? PropTypes.oneOf(
      PropTypes.string,
      PropTypes.bool
    ).value(tag) : PropTypes.string.value(tag)
	}
})
