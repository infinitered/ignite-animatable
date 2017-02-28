const test = require('ava')
const sinon = require('sinon')
const plugin = require('../index')

test('adds itself', async t => {
  const addModule = sinon.spy()
  const addComponentExample = sinon.spy()

  const context = {
    ignite: {
      addModule: addModule,
      addComponentExample: addComponentExample
    }
  }

  await plugin.add(context)
  t.true(addModule.calledWith('react-native-animatable'))
  t.true(
    addComponentExample.calledWith('animatableExample.js', {
      title: 'Animatable'
    })
  )
})
