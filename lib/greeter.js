'use strict';

class Greeter {
  constructor(){
    const now = new Date()
    this.hour = now.getUTCHours() + 9
  }

  greet(x) {
    let h
    if (x === undefined) {h = this.hour}
    else {h = x}

    let m = h % 24
    
    if (5 <= m && m < 12) return "おはようございます"
    else if (12 <= m && m < 18) return "こんにちは"
    else if ((18 <= m && m < 24) || (0 <= m && m < 5)) return "こんばんは"
    else return '数字を入れんかい！'
  }
}

module.exports = Greeter;