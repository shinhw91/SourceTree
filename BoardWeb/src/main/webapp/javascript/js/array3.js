// array3.js
import {
    members,
    titles
} from './data.js';

console.log(members);
console.log(titles);

let str = titles.reduce((acc, title, idx) => {
    if(idx == 0) {
        acc += '<tr>';
    }
    acc += '<th>' + title + '</th>';
    if(idx == titles.length - 1) {
        acc += '</tr>'
    }
    return acc;
}, '');
console.log(str);
document.getElementById('theader').innerHTML = str; // <tr><th> ... </th></tr>

const tbody = document.getElementById('tbody');
members.reduce((acc, member) => {
    let tr = document.createElement('tr');
    for(let prop in member) {
        let td = document.createElement('td');
        td.innerText = member[prop];
        tr.appendChild(td);
    }
    acc.appendChild(tr);
    return acc;
}, tbody);

// map(A -> A'), filter(A -> B)
let result1 = members.map((item, idx) => {
    let obj = {};
    obj.id = item.id;
    obj.name = item.first_name + '-' + item.last_name;
    obj.email = item.email;
    return obj;
});
console.log(result1);

// 메소드 체인
let result2 = members
    .filter(item => item.gender == 'Female')
    .map((item, idx) => {
        let obj = {};
        obj.id = item.id;
        obj.name = item.first_name + '-' + item.last_name;
        obj.email = item.email;
        return obj;
    })
    .map(item => item.name);

console.log(result2);
console.log(result2.indexOf('Roby-Rhubottom'));

result2.push('charles');
result2.push('hong');
result2.push('charles');

console.log(result2);
console.log(result2.indexOf('charles', 6));