import { storiesOf } from '@storybook/vue'

import Media from './Media.vue'
import Level from './Level.vue'

import 'bulma'

const components = { Media, Level }

function render (template) {
  return { template, components }
}

storiesOf(Media.name, module)
  .add(
    'default', () => render(
      `
      <Media tag=article style="margin: 1.25rem">
        <p class="image is-64x64" slot=left>
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
        
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
        
        <Level device=mobile>
          <Level left>
            <Level tag=a item>
              <span class="icon is-small">😅</span>
            </Level>
            <Level tag=a item>
              <span class="icon is-small">😄</span>
            </Level>
            <Level  tag=a item>
              <span class="icon is-small">❤️</span>
            </Level>
          </Level>
        </Level>
        
        <button slot=right class="delete"></button>
      </Media>
      `
    ))
  .add(
    'nesting', () => render (
      `
      <div style="margin: 1.25rem">
        <Media tag=article>
          <p class="image is-64x64" slot="left">
            <img src="http://bulma.io/images/placeholders/128x128.png">
          </p>

          <div class="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br>
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </div>
          
          <div class="media-content">
            <Media tag=article>
              <p class="image is-48x48" slot=left>
                <img src="http://bulma.io/images/placeholders/96x96.png">
              </p>

              <div class="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br>
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                  <br>
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>

              <Media tag=article>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
              </Media>
      
              <Media tag=article>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </Media>
            </Media>
        
            <Media tag=article>
              <p class="image is-48x48" slot=left>
                <img src="http://bulma.io/images/placeholders/96x96.png">
              </p>
              <div class="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br>
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                  <br>
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </Media>
          </div>
        </Media>
        
        <Media tag=article>
          <p class="image is-64x64" slot=left>
            <img src="http://bulma.io/images/placeholders/128x128.png">
          </p>
          
          <div class="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button">Post comment</button>
            </p>
          </div>
        </Media>
      </div>
      `
    ))
