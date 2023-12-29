// table.js

let bdy = document.querySelector('.bdy');
let table = document.createElement('table');
table.setAttribute('border', 1);    // attribute 추가
table.setAttribute('id', 'list');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tr1 = document.createElement('tr');

function makeHead() {
    for(let prop in obj1) {
        let th = document.createElement('th');
        th.innerText = prop.toUpperCase();   // obj1['id']
        tr1.appendChild(th);
    }

    // 삭제
    let th = document.createElement('th');
    th.innerText = '삭제';   // obj1['id']
    tr1.appendChild(th);
    th = document.createElement('th');
    th.innerText = '선택삭제';   // obj1['id']
    tr1.appendChild(th);

    thead.appendChild(tr1);
    return thead;
}


function makeBody() {
    for(let friend of friends) {
        // tr2 = document.createElement('tr');
        // for(let prop in friend) {
        //     let td = document.createElement('td');
        //     td.innerText = friend[prop];   // obj1['id']
        //     tr2.appendChild(td);
        //     tbody.appendChild(tr2);
        // }
        
        // // button
        // let td = document.createElement('td');
        // let btn = document.createElement('button');
        // // button 이벤트 등록
        // btn.addEventListener('click', function() {  // 이벤트핸들러
        //     console.log(this.parentElement.parentElement.remove());
        // });
        // btn.innerText = '삭제';
        // td.appendChild(btn);
        // tr2.appendChild(td);
        tbody.appendChild(makeTr(friend));
    }

    return tbody;
}


function makeTr(obj={}) {
    tr2 = document.createElement('tr');
    tr2.addEventListener('click', function() {
        // console.log(this.children[0].innerText);
        document.getElementById('uid').value = this.children[0].innerText
        document.getElementById('uname').value = this.children[1].innerText
        document.querySelector('#uphone').value = this.children[2].innerText
    })
    
    for(let prop in obj) {
        let td = document.createElement('td');
        td.innerText = obj[prop];   // obj1['id']
        tr2.appendChild(td);
        // tbody.appendChild(tr2);
    }
    
    // 삭제버튼 생성
    let td = document.createElement('td');
    let btn = document.createElement('button');
    // button 이벤트 등록
    btn.addEventListener('click', function(e) {  // 이벤트핸들러
        e.stopPropagation();    // 상위요소로 이벤트 전파 차단
        console.log(this.parentElement.parentElement.remove());
    });
    btn.innerText = '삭제';
    td.appendChild(btn);
    tr2.appendChild(td);

    // 체크박스 생성
    td = document.createElement('td');
    td.setAttribute('align', 'center');

    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.addEventListener('click', function(e) {
        e.stopPropagation();    // 상위요소로 이벤트 전파 차단
        console.log(e);
    })

    td.appendChild(check);
    tr2.appendChild(td);
    

    return tr2;
}


// 추가 버튼 클릭 이벤트
document.getElementById('addBtn').addEventListener('click', function() {
    let id = document.getElementById('uid').value;
    let name = document.getElementById('uname').value;
    let phone = document.getElementById('uphone').value;

    if(!id || !name || !phone) {
        alert('값을 입력하세요.');
        return;
    }

    let obj = {id, name, phone: phone}; // id: id -> id 입력 가능
    document.querySelector('#list>tbody').appendChild(makeTr(obj));
    
    document.getElementById('uid').value = '';
    document.getElementById('uname').value = '';
    document.getElementById('uphone').value = '';
    document.getElementById('uid').focus();
})


// 변경 버튼 클릭 이벤트
document.getElementById('editBtn').addEventListener('click', function() {
    // 찾을 값
    let findId = document.getElementById('uid').value;
    let phone = document.getElementById('uphone').value;
    // 찾을 대상
    let target = document.querySelectorAll('#list>tbody>tr');
    // console.log(target);
    target.forEach(function(item, idx, ary) {
        // console.log(item, idx, ary)
        let tr = item;
        if(tr.children[0].innerText == findId) {
            tr.children[2].innerText = phone; 
        }
    })
})


// 선택삭제 클릭 이벤트
document.getElementById('delBtn').addEventListener('click', function() {
    document.querySelectorAll('#list>tbody>tr>td>input:checked').forEach(function(item) {
        item.parentElement.parentElement.remove();
    })
})



table.appendChild(makeHead());
table.appendChild(makeBody());
bdy.appendChild(table);