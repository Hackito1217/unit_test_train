const assert = require('assert');
const Greeter = require('lib/greeter');
const g = new Greeter

describe('greet()', () => {
  it('greting now', ()=> {
    assert(g.greet() === "こんばんは")
  })

  it('greeting 6am', () => {
    assert(g.greet(6) === 'おはようございます')
  })

  it('greeting 3pm', () => {
    assert(g.greet(15) === 'こんにちは')
  })

  it('greeting 11pm', () => {
    assert(g.greet(23) === 'こんばんは')
  })

  it('greeting 100', () => {
    assert(g.greet(100) === 'こんばんは')
  })

  it('greeting string', ()=> {
    assert(g.greet('a') === '数字を入れんかい！')
  })
});