import PropTypes from '@znck/prop-types';
export default (function (tag, abstract) {
  if (tag === void 0) {
    tag = 'div';
  }

  if (abstract === void 0) {
    abstract = false;
  }

  return {
    props: {
      tag: abstract ? PropTypes.oneOfType(PropTypes.string, PropTypes.bool).value(tag) : PropTypes.string.value(tag)
    }
  };
});