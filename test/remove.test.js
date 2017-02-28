const test = require('ava')
const sinon = require('sinon')
const plugin = require('../index')

test('removes itself', async t => {
  const removeModule = sinon.spy()
  const removeComponentExample = sinon.spy()

  const context = {
    ignite: {
      removeModule: removeModule,
      removeComponentExample: removeComponentExample
    }
  }

  await plugin.remove(context)
  t.true(removeModule.calledWith('react-native-animatable'))
  t.true(removeComponentExample.calledWith('animatableExample.js'))
})
