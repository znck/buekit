import { storiesOf } from '@storybook/vue';
import Level from '../Level.vue';
import 'bulma';
var components = {
  Level: Level
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Level.name, module).add('default', function () {
  return render("\n      <Level tag=nav>\n        <Level left>\n          <Level item>\n            <p class=\"subtitle is-5\">\n              <strong>123</strong> posts\n            </p>\n          </Level>\n          <Level item>\n            <div class=\"field has-addons\">\n              <p class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"Find a post\">\n              </p>\n              <p class=\"control\">\n                <button class=\"button\">\n                  Search\n                </button>\n              </p>\n            </div>\n          </Level>\n        </Level>\n      \n        <Level right>\n          <Level tag=p item><strong>All</strong></Level>\n          <Level tag=p item><a>Published</a></Level>\n          <Level tag=p item><a>Drafts</a></Level>\n          <Level tag=p item><a>Deleted</a></Level>\n          <Level tag=p item><a class=\"button is-success\">New</a></Level>\n        </Level>\n      </Level>\n      ");
}).add('centered', function () {
  return render("\n      <Level tag=nav device=mobile>\n        <Level item class=\"has-text-centered\">\n          <div>\n            <p class=\"heading\">Tweets</p>\n            <p class=\"title\">3,456</p>\n          </div>\n        </Level>\n        <Level item class=\"has-text-centered\">\n          <div>\n            <p class=\"heading\">Following</p>\n            <p class=\"title\">123</p>\n          </div>\n        </Level>\n        <Level item class=\"has-text-centered\">\n          <div>\n            <p class=\"heading\">Followers</p>\n            <p class=\"title\">456K</p>\n          </div>\n        </Level>\n        <Level item class=\"has-text-centered\">\n          <div>\n            <p class=\"heading\">Likes</p>\n            <p class=\"title\">789</p>\n          </div>\n        </Level>\n      </Level>\n      ");
});