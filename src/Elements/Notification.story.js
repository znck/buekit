import { storiesOf } from '@storybook/vue'

import Notification from './Notification.vue'
import Delete from './Delete.vue'

const components = { Notification, Delete }
function render (template) {
  return { template, components }
}

storiesOf(Notification.name, module)
  .add('default', () => render(
    `
    <div style="padding: 1.25rem">
      <Notification>
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification color=primary>
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification color=info>
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification color=link>
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification color=success>
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification color=danger> 
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification color=warning>
        <Delete />
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </Notification>

      <Notification abstract>
        <p>
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </p>
      </Notification>
    </div>
    `
  ))
