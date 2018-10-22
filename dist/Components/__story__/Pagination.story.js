import { storiesOf } from '@storybook/vue';
import Pagination from '../Pagination.vue';
import 'bulma';
var components = {
  Pagination: Pagination
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Pagination.name, module).add('default', function () {
  return render("\n     Default\n     <Pagination :current=1 :total=10 :limit=5 />\n     <Pagination :current=2 :total=10 :limit=5 />\n     <Pagination :current=3 :total=10 :limit=5 />\n     <Pagination :current=4 :total=10 :limit=5 />\n     <Pagination :current=5 :total=10 :limit=5 />\n     <Pagination :current=6 :total=10 :limit=5 />\n     <Pagination :current=7 :total=10 :limit=5 />\n     <Pagination :current=8 :total=10 :limit=5 />\n     <Pagination :current=9 :total=10 :limit=5 />\n     <Pagination :current=10 :total=10 :limit=5 />\n     \n     Centered\n     <Pagination :current=1 :total=10 :limit=10 centered/>\n     <Pagination :current=2 :total=10 :limit=10 centered/>\n     <Pagination :current=3 :total=10 :limit=10 centered/>\n     <Pagination :current=4 :total=10 :limit=10 centered/>\n     <Pagination :current=5 :total=10 :limit=10 centered/>\n     <Pagination :current=6 :total=10 :limit=10 centered/>\n     <Pagination :current=7 :total=10 :limit=10 centered/>\n     <Pagination :current=8 :total=10 :limit=10 centered/>\n     <Pagination :current=9 :total=10 :limit=10 centered/>\n     <Pagination :current=10 :total=10 :limit=10 centered/>\n     \n     Right\n     <Pagination :current=1 :total=10 :limit=9 right/>\n     <Pagination :current=2 :total=10 :limit=9 right/>\n     <Pagination :current=3 :total=10 :limit=9 right/>\n     <Pagination :current=4 :total=10 :limit=9 right/>\n     <Pagination :current=5 :total=10 :limit=9 right/>\n     <Pagination :current=6 :total=10 :limit=9 right/>\n     <Pagination :current=7 :total=10 :limit=9 right/>\n     <Pagination :current=8 :total=10 :limit=9 right/>\n     <Pagination :current=9 :total=10 :limit=9 right/>\n     <Pagination :current=10 :total=10 :limit=9 right/>\n    ");
}).add('sizes', function () {
  return render("\n    Small\n    <Pagination :current=5 :total=10 :limit=10 size=small />\n    Default\n    <Pagination :current=5 :total=10 :limit=10 />\n    Medium\n    <Pagination :current=5 :total=10 :limit=10 size=medium />\n    Large\n    <Pagination :current=5 :total=10 :limit=10 size=large />\n    ");
});