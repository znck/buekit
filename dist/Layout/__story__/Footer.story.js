import { storiesOf } from '@storybook/vue';
import Footer from '../Footer.vue';
import Container from '../Container.vue';
import 'bulma';
var components = {
  Footer: Footer,
  Container: Container
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Footer.name, module).add('default', function () {
  return render("\n     <Footer>\n      <Container>\n        <div class=\"content has-text-centered\">\n          <p>\n            <strong>Bulma</strong> by <a href=\"http://jgthms.com\">Jeremy Thomas</a>. The source code is licensed\n            <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>. The website content\n            is licensed <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY NC SA 4.0</a>.\n          </p>\n        </div>\n      </Container>\n     </Footer>\n    ");
});