import { storiesOf } from '@storybook/vue';
import Tags from '../Tags.vue';
import Tag from '../Tag.vue';
var components = {
  Tag: Tag,
  Tags: Tags
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Tags.name, module).add('default', function () {
  return render("\n      <Tag>Tag label</Tag>\n    ");
}).add('colors', function () {
  return render("\n      <Tag color=black>Black</Tag>\n      <Tag color=dark>Dark</Tag>\n      <Tag color=light>Light</Tag>\n      <Tag color=white>White</Tag>\n      <Tag color=primary>Primary</Tag>\n      <Tag color=link>Link</Tag>\n      <Tag color=info>Info</Tag>\n      <Tag color=success>Success</Tag>\n      <Tag color=warning>Warning</Tag>\n      <Tag color=danger>Danger</Tag>\n    ");
}).add('sizes', function () {
  return render("\n      <Tag>Normal</Tag>\n      <Tag size=medium>Medium</Tag>\n      <Tag size=large>Large</Tag>\n    ");
}).add('modifiers', function () {
  return render("\n      <Tag color=primary rounded>Medium</Tag>\n      <Tag tag=a color=danger delete></Tag>\n      ");
}).add('list of tags', function () {
  return render("\n      <Tags>\n        <Tag>One</Tag>\n        <Tag>Two</Tag>\n        <Tag>Three</Tag>\n      </Tags>\n      ");
}).add('attach togather', function () {
  return render("\n      <Tags addons>\n        <Tag color=black>npm</Tag>\n        <Tag color=link>0.5.0</Tag>\n      </Tags>\n      <Tags addons>\n        <Tag color=danger>Alex Smith</Tag>\n        <Tag delete/>\n      </Tags>\n      ");
});