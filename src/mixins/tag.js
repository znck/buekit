import PropTypes from '@znck/prop-types'

export default (tag = 'div') => ({
	props: {
    /**
     * Tag for root element.
     * @version 0.0.0
     * @since Version 0.0.0
     */
		tag: PropTypes.string.value(tag)
	}
})
