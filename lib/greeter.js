'use strict';

class Greeter {
  constructor(){
    const now = new Date()
    this.hour = now.getUTCHours() + 9
  }

  greet(x) {
    let h
    
    // もし引数が空なら現在時刻で計算
    if (x === undefined) {h = this.hour}
    else {h = x}

    // どんな数字でも対応するために
    const m = h % 24

    // 引数をバリデート　＆　挨拶の場合わけ
    if (typeof h === 'number') {
      if (5 <= m && m < 12) return "おはようございます"
      else if (12 <= m && m < 18) return "こんにちは"
      else return "こんばんは"
    }
    else return '数字を入れんかい！'
  }
}

module.exports = Greeter;