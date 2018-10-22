<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { createTag } from '../mixins';
export default {
  name: 'Level',
  functional: true,
  mixins: [createTag()],
  props: {
    left: PropTypes.bool.value(false),
    right: PropTypes.bool.value(false),
    item: PropTypes.bool.value(false),
    mobile: PropTypes.bool.value(false)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _ctx$props = ctx.props,
        left = _ctx$props.left,
        right = _ctx$props.right,
        item = _ctx$props.item,
        tag = _ctx$props.tag,
        mobile = _ctx$props.mobile;
    return style(h(tag, ctx.data, ctx.children), left && _('level-left'), right && _('level-right'), item && _('level-item'), !(left || right || item) && _('level'), mobile && _('is-mobile'));
  }
};
</script>

<style module>
* {
  box-sizing: inherit;
}

*:before, *:after {
  box-sizing: inherit;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.level {
  align-items: center;
  justify-content: space-between;
}

.level:not(:last-child) {
  margin-bottom: 1.5rem;
}

.level code {
  border-radius: 3px;
}

.level img {
  display: inline-block;
  vertical-align: top;
}

.level.is-mobile {
  display: flex;
}

.level.is-mobile .level-left,
.level.is-mobile .level-right {
  display: flex;
}

.level.is-mobile .level-left + .level-right {
  margin-top: 0;
}

.level.is-mobile .level-item {
  margin-right: 0.75rem;
}

.level.is-mobile .level-item:not(:last-child) {
  margin-bottom: 0;
}

.level.is-mobile .level-item:not(.is-narrow) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .level {
    display: flex;
  }
  .level > .level-item:not(.is-narrow) {
    flex-grow: 1;
  }
}

.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}

.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .level-item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

.level-left,
.level-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .level-left .level-item:not(:last-child),
  .level-right .level-item:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.level-left {
  align-items: center;
  justify-content: flex-start;
}

@media screen and (max-width: 768px) {
  .level-left + .level-right {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 769px), print {
  .level-left {
    display: flex;
  }
}

.level-right {
  align-items: center;
  justify-content: flex-end;
}

@media screen and (min-width: 769px), print {
  .level-right {
    display: flex;
  }
}
</style>
