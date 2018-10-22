<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
export default {
  name: 'TableRow',
  functional: true,
  abstract: true,
  props: {
    selected: PropTypes.bool.value(false)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var selected = ctx.props.selected;

    var styles = selected && _('is-selected');

    if (!ctx.children || ctx.children.length !== 1 || ctx.children[0].tag !== 'tr') {
      return style(h('tr', ctx.data, ctx.children), styles);
    }

    return style(ctx.children[0], styles);
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

.table {
  background-color: white;
  color: #363636;
  margin-bottom: 1.5rem;
}

.table td,
.table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}

.table td.is-white,
.table th.is-white {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}

.table td.is-black,
.table th.is-black {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}

.table td.is-light,
.table th.is-light {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: #363636;
}

.table td.is-dark,
.table th.is-dark {
  background-color: #363636;
  border-color: #363636;
  color: whitesmoke;
}

.table td.is-primary,
.table th.is-primary {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}

.table td.is-link,
.table th.is-link {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
}

.table td.is-info,
.table th.is-info {
  background-color: #209cee;
  border-color: #209cee;
  color: #fff;
}

.table td.is-success,
.table th.is-success {
  background-color: #23d160;
  border-color: #23d160;
  color: #fff;
}

.table td.is-warning,
.table th.is-warning {
  background-color: #ffdd57;
  border-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.table td.is-danger,
.table th.is-danger {
  background-color: #ff3860;
  border-color: #ff3860;
  color: #fff;
}

.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}

.table td.is-selected,
.table th.is-selected {
  background-color: #00d1b2;
  color: #fff;
}

.table td.is-selected a,
.table td.is-selected strong,
.table th.is-selected a,
.table th.is-selected strong {
  color: currentColor;
}

.table th {
  color: #363636;
  text-align: left;
}

.table tr.is-selected {
  background-color: #00d1b2;
  color: #fff;
}

.table tr.is-selected a,
.table tr.is-selected strong {
  color: currentColor;
}

.table tr.is-selected td,
.table tr.is-selected th {
  border-color: #fff;
  color: currentColor;
}

.table thead td,
.table thead th {
  border-width: 0 0 2px;
  color: #363636;
}

.table tfoot td,
.table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}

.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}

.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}

.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}

.table.is-fullwidth {
  width: 100%;
}

.table.is-hoverable tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}

.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
  background-color: whitesmoke;
}

.table.is-narrow td,
.table.is-narrow th {
  padding: 0.25em 0.5em;
}

.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: #fafafa;
}
</style>
