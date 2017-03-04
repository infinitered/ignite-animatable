const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('removes itself', async t => {
  const removeModule = sinon.spy()
  const removePluginComponentExample = sinon.spy()

  const context = {
    ignite: {
      removeModule: removeModule,
      removePluginComponentExample: removePluginComponentExample
    }
  }

  await plugin.remove(context)
  t.true(removeModule.calledWith('react-native-animatable'))
  t.true(removePluginComponentExample.calledWith('animatableExample.js'))
})
