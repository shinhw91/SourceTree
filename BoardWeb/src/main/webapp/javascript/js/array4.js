// array4.js

// map, filter, find, indexOf, some, every

const str = '펭수, 라이언, 어피치, 콘, 브라운, 무지, 라이언, 어피치, 콘';
const ary = str.split(', ');
console.log(ary);

// 1. 콘이라는 이름이 몇 번?
const corn = ary.filter(el => el == '콘').length;
console.log(`1. 콘이라는 이름은 ${corn}번입니다.`);

// 2. 이름이 3자 이상이 몇 명?
const three = ary.filter(el => el.length >= 3).length;
console.log(`2. 이름이 3자 이상은 ${three}명입니다.`);

// 3. 2자인 이름이 있는지 여부?
const two = ary.some(el => el.length == 2);
if(two) {
    console.log(`3. 2자인 이름이 있습니다.`);
}

// 4. {no : 1, name : '펭수'} 형태의 값을 가지는 배열을 생성. 결과값을 strAry에 대입
const strAry = ary.map((item, idx) => {
    let obj = {};
    obj.no = idx + 1;
    obj.name = item;
    return obj;
});
console.log(strAry);

// reduce 활용 (교수님 js-data/array4.js)
// 1.
console.log('콘 :', strAry.reduce((acc, obj) => {
    if(obj.name == '콘') {
        acc++;
    }
    return acc;
}, 0));

// 2.
console.log('3자 이상 :', strAry.reduce((acc, obj) => {
    if(obj.name.length >= 3) {
        acc++;
    }
    return acc;
}, 0));

// 3.
console.log('2자 :', strAry.some(obj => obj.name.length == 2));