// string2.js

const keyword = '홍';
const wordAry = ['사과', '홍씨', '홍장군', '김시홍', '감자']
// 1. 배열에서 '홍'이 들어간 단어의 갯수를 구하기
const str1 = wordAry.join(' ');
console.log(str1);
// console.log(str1.match(/홍/gi).length);
const reg = new RegExp(keyword, 'gi');
console.log(str1.match(reg));
console.log(str1.match(reg).length);

// 답안
console.log(wordAry.filter(val => val.indexOf(keyword) != -1).length);

const url = 'http://localhost/BoardWeb/index.jsp?x=12&y=23';
// 2. url에서 파라미터(x, y)의 값을 찾기
const x = url.lastIndexOf('x');
const y = url.lastIndexOf('y');
const n = url.lastIndexOf('&');
console.log(x);
console.log(y);
console.log(n);
console.log(url.substring(x, n));
console.log(url.substring(y));

// 답안
console.log(url.match(/\d+/g)[0], url.match(/\d+/g)[1]);

const word = '안녕하세요xx만나서xx반갑습x니x다.';
// 3. "안녕하세요 만나서 반갑습니다." 문장으로 변환하기
str2 = word.replace(/xx/gi, ' ');
console.log(str2);
str3 = str2.replace(/x/gi, '');
console.log(str3);

// 답안
console.log(word.replace(/xx/g, ' ').replace(/x/g, ''));