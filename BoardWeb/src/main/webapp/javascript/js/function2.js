// function2.js

let members = `[{"id":1,"first_name":"Burt","last_name":"Daelman","email":"bdaelman0@go.com","gender":"Male","salary":1077},
{"id":2,"first_name":"Donalt","last_name":"Bracci","email":"dbracci1@t.co","gender":"Male","salary":4853},
{"id":3,"first_name":"Christophorus","last_name":"Maddick","email":"cmaddick2@nasa.gov","gender":"Male","salary":4303},
{"id":4,"first_name":"Ethelind","last_name":"Brinded","email":"ebrinded3@ucsd.edu","gender":"Female","salary":8034},
{"id":5,"first_name":"Theo","last_name":"Lowdwell","email":"tlowdwell4@ycombinator.com","gender":"Male","salary":8316},
{"id":6,"first_name":"Deerdre","last_name":"Casali","email":"dcasali5@oaic.gov.au","gender":"Female","salary":4828},
{"id":7,"first_name":"Galina","last_name":"Cockshott","email":"gcockshott6@issuu.com","gender":"Female","salary":1394},
{"id":8,"first_name":"Son","last_name":"Symes","email":"ssymes7@baidu.com","gender":"Male","salary":3590},
{"id":9,"first_name":"Alyce","last_name":"Loughnan","email":"aloughnan8@fema.gov","gender":"Female","salary":1718},
{"id":10,"first_name":"Nert","last_name":"Artin","email":"nartin9@comcast.net","gender":"Female","salary":547},
{"id":11,"first_name":"Morganne","last_name":"Blazey","email":"mblazeya@businessweek.com","gender":"Female","salary":3471},
{"id":12,"first_name":"Pennie","last_name":"Millgate","email":"pmillgateb@dyndns.org","gender":"Male","salary":1342},
{"id":13,"first_name":"Lynnett","last_name":"Hayley","email":"lhayleyc@mayoclinic.com","gender":"Female","salary":9044},
{"id":14,"first_name":"Trula","last_name":"Keeting","email":"tkeetingd@liveinternet.ru","gender":"Female","salary":8163},
{"id":15,"first_name":"Terrance","last_name":"Killner","email":"tkillnere@youtu.be","gender":"Male","salary":3837}]`;

let memberAry = JSON.parse(members);    // 문자열 -> 객체변환
console.log(memberAry[14]);

let titles = ['아이디', '이름', '성씨', '이메일', '성별', '급여'];

function makeHeader(fields=[], pos={}) {
    let tr = document.createElement('tr');
    fields.forEach(function(field) {
        let th = document.createElement('th');
        th.innerText = field;
        tr.appendChild(th);
    })
    pos.appendChild(tr);
}

makeHeader(titles, document.getElementById('theader'));


function makeBody(data=[], pos={}) {
    data.forEach(function(item) {
        let tr = document.createElement('tr');
        for(let prop in item) {
            let td = document.createElement('td');
            td.innerText = item[prop];
            tr.appendChild(td);
        }
        pos.appendChild(tr);

        if(item.gender == 'Male') {
            tr.setAttribute('style', 'background-color : aqua');
        } else {
            tr.setAttribute('style', 'background-color : pink');
        }
    })
}

makeBody(memberAry, document.getElementById('tbody'));