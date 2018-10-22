import { storiesOf } from '@storybook/vue';
import Section from '../Section.vue';
import Container from '../Container.vue';
var components = {
  Section: Section
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Section.name, module).add('default', function () {
  return render("\n    <Section>\n      <Container>\n        <h1 class=\"title\">Section</h1>\n        <h2 class=\"subtitle\">\n          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.\n        </h2>\n      </Container>\n    </Section>\n    ");
}).add('sizes', function () {
  return render("\n    <div>\n      <Section size=medium>\n        <Container>\n          <h1 class=\"title\">Section</h1>\n          <h2 class=\"subtitle\">\n            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.\n          </h2>\n        </Container>\n      </Section>\n\n      <Section size=large>\n        <Container>\n          <h1 class=\"title\">Section</h1>\n          <h2 class=\"subtitle\">\n            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.\n          </h2>\n        </Container>\n      </Section>\n    </div>\n    ");
});