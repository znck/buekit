import {storiesOf} from '@storybook/vue'

import xSelect from '../Select.vue'
import Field from '../Field.vue'
import Control from '../Control.vue'

const components = {Control, Field, xSelect}
function render(template) {
	return {
		data: () => ({
			value: 'Select dropdown',
			value2: ['Select dropdown']
		}),
		template: `<div style="padding: 1.25rem">${template}</div>`,
		components
	}
}

storiesOf(xSelect.name, module)
  .add('default', () => render(
    `
    <xSelect v-model="value">
      <option>Select dropdown</option>
      <option>With options</option>
    </xSelect>
    `
  ))
  .add('multiple', () => render(
    `
    <xSelect
      :multiple=8
      v-model="value2" 
      :options="[
        'Argentina',
        'Bolivia',
        'Brazil',
        'Chile',
        'Colombia',
        'Ecuador',
        'Guyana',
        'Paraguay',
        'Peru',
        'Suriname',
        'Uruguay',
        'Venezuela'
      ]"
    />
    
    <br><br>
    {{ value }}
    `
  ))
  .add('colors', () => render(
    `
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" color=primary />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" color=link />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" color=info />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" color=success />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" color=warning />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" color=danger />
      </Control>
    </Field>
    `
  ))
  .add('sizes', () => render(
    `
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" size=small />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" size=medium />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" size=large />
      </Control>
    </Field>
    `
  ))
  .add('states', () => render(
    `
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" />
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" hovered/>
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" focused/>
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" loading/>
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" disabled/>
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" readonly/>
      </Control>
    </Field>
    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" readonly static/>
      </Control>
    </Field>

    <Field>
      <Control size=small>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" />
        <i class="fa fa-envelope" slot=left />
      </Control>
    </Field>

    <Field>
      <Control>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" />
        <i class="fa fa-envelope" slot=left />
      </Control>
    </Field>

    <Field>
      <Control size=medium>
        <xSelect v-model="value" :options="['Select dropdown', 'With options']" />
        <i class="fa fa-envelope" slot=left />
      </Control>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email size=large>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email color=success>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    Size control with loading:
    <Field>
      <Control v-model=value loading size=small placeholder="Small input" />
    </Field>
    <Field>
      <Control v-model=value loading placeholder="Default input" />
    </Field>
    <Field>
      <Control v-model=value loading size=medium placeholder="Medium input" />
    </Field>
    <Field>
      <Control v-model=value loading size=large placeholder="Large input" />
    </Field>
    `
  ))
