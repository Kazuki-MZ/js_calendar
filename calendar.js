#!/usr/bin/env node
const option = process.argv[2];
const set_number = process.argv[3];

const today = new Date();
let month = today.getMonth() + 1;
if (option === undefined ) {
  month = today.getMonth() + 1;
} else if (option === '-m' && set_number <=12) {
  month = set_number;
} else {
  console.log(`${set_number} is neither a month number (1..12) nor a name`)
  process.exit(1);
}

const year = today.getFullYear();
//Dateオブジェクト作成
const set_day = new Date(year, month-1);
//月初を取得
const first_day = new Date(year, month-1, 1);
//月末を取得
const last_day = new Date(year, month, 0);
//ヘッダー表示
const header = `       ${month}月 ${year}`
console.log(header)
//曜日を表示
const week = ['日','月','火','水','木','金','土']
console.log((" ") + week.join(' ').padStart(3));

//１日まで空白を作成
for (let i = 0; i < first_day.getDay(); i++) {
  process.stdout.write('   ');
}
// 月のすべての日数を表示
let i = 1;
while (i <= last_day.getDate()) {
  set_day.setDate(i);
  process.stdout.write(
  //日曜日なら改行
    set_day.getDay() === 6
    ? set_day.getDate().toString().padStart(3)+ "\n"
  //更に%を非表示にするために最終日に "\n"を記述
    : set_day.getDate() === last_day.getDate()
    ? set_day.getDate().toString().padStart(3) + "\n"
  //上記の条件にあてはまらなかったら改行しないで表示
    :set_day.getDate().toString().padStart(3));

  i += 1
}


