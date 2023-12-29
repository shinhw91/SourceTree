// dom1.js

// [{id, name, phone}...]
const obj1 = {id:'user1', name:'홍길동', phone:'0101-1111'}
const obj2 = {id:'user2', name:'김민수', phone:'0101-2222'}
const obj3 = {id:'user3', name:'박철호', phone:'0101-3333'}
const friends = [obj1, obj2, obj3];

// 키:값 let A in B
for(let frined of friends) {
    for(let prop in frined) {
        console.log(prop.toUpperCase(), ' - ', frined[prop]);   // obj1['id']
    }
}