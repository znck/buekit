import { storiesOf } from '@storybook/vue';
import Subtitle from '../Subtitle.vue';
import Title from '../Title.vue';
var components = {
  Subtitle: Subtitle,
  Title: Title
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Title.name, module).add('default', function () {
  return render("\n     <Title>Title</Title>\n     <Subtitle>Subtitle</Subtitle>\n    ");
}).add('levels/sizes', function () {
  return render("\n     <Title level=1>Title 1</Title>\n     <Title level=2>Title 2</Title>\n     <Title level=3>Title 3 (default)</Title>\n     <Title level=4>Title 4</Title>\n     <Title level=5>Title 5</Title>\n     <Title level=6>Title 6</Title>\n     \n     <Subtitle level=1>Subtitle 1</Subtitle>\n     <Subtitle level=2>Subtitle 2</Subtitle>\n     <Subtitle level=3>Subtitle 3 (default)</Subtitle>\n     <Subtitle level=4>Subtitle 4</Subtitle>\n     <Subtitle level=5>Subtitle 5</Subtitle>\n     <Subtitle level=6>Subtitle 6</Subtitle>\n    ");
}).add('combining', function () {
  return render("\n     <Title level=1>Title 1</Title>\n     <Subtitle level=3>Subtitle 3</Subtitle>\n\n     <br><br>\n\n     <Title level=2>Title 2</Title>\n     <Subtitle level=4>Subtitle 4</Subtitle>\n     \n     <br><br>\n     \n     <Title level=3>Title 3</Title> \n     <Subtitle level=5>Subtitle 5</Subtitle>\n    ");
}).add('spaced', function () {
  return render("\n     <Title level=1 spaced>Title 1</Title>\n     <Subtitle level=3>Subtitle 3</Subtitle>\n\n     <br><br>\n\n     <Title level=2 spaced>Title 2</Title>\n     <Subtitle level=4>Subtitle 4</Subtitle>\n     \n     <br><br>\n     \n     <Title level=3 spaced>Title 3</Title> \n     <Subtitle level=5>Subtitle 5</Subtitle>\n    ");
});