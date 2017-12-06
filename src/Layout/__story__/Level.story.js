import {storiesOf} from '@storybook/vue'

import Level from '../Level.vue'

import 'bulma'

const components = {Level}

function render(template) {
	return {template, components}
}

storiesOf(Level.name, module)
  .add(
    'default', () => render(
      `
      <Level tag=nav>
        <Level left>
          <Level item>
            <p class="subtitle is-5">
              <strong>123</strong> posts
            </p>
          </Level>
          <Level item>
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post">
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </Level>
        </Level>
      
        <Level right>
          <Level tag=p item><strong>All</strong></Level>
          <Level tag=p item><a>Published</a></Level>
          <Level tag=p item><a>Drafts</a></Level>
          <Level tag=p item><a>Deleted</a></Level>
          <Level tag=p item><a class="button is-success">New</a></Level>
        </Level>
      </Level>
      `
    )
  )
  .add(
    'centered', () => render(
      `
      <Level tag=nav device=mobile>
        <Level item class="has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </Level>
        <Level item class="has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </Level>
        <Level item class="has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </Level>
        <Level item class="has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </Level>
      </Level>
      `
    )
  )
