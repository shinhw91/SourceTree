// calendar.js 

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
let lastDate = getLastDate(2);
let firstDay = getFirstDay(2);
console.log(lastDate, firstDay);

// 달력 생성
makeCalender(2);

function makeCalender(month) {
    makeTitle(days, document.getElementById('theader'));
    makeBody(month, document.getElementById('tbody'));
}


function getLastDate(month) {
    // 월 입력 => 마지막날 반환 (31, 29, 31, 30, 31, 30 ...)
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        return 31;
    } else if(month == 2) {
        return 29;
    } else {
        return 30;
    }
}

function getFirstDay(month) {
    // 월 입력 => 1일의 위치(공백 갯수 반환)
    if(month == 1 || month == 4 || month == 7) {
        return 1;
    } else if(month == 2 || month == 8) {
        return 4;
    } else if(month == 3 || month == 11) {
        return 5;
    } else if(month == 5) {
        return 3;
    } else if(month == 6) {
        return 6;
    } else if(month == 9 || month == 12) {
        return 0;
    } else {
        return 2;
    }
}

// header 생성
function makeTitle(dayAry = [], pos = {}) {
    let tr = document.createElement('tr');
    dayAry.forEach(function(field) {
        let th = document.createElement('th');
        th.innerText = field;
        tr.appendChild(th);
    })
    pos.appendChild(tr);
}

// 날짜 생성
function makeBody(month = 1, pos= {}) {
    let tr = document.createElement('tr');
    // 공백
    let firstDay = getFirstDay(month);
    for(let i = 0; i < firstDay; i++) {
        let td = document.createElement('td');
        td.innerText = "";
        tr.appendChild(td);
    }

    // 날짜
    let lastDate = getLastDate(month);
    for(let i = 1; i <= lastDate; i++) {
        let td = document.createElement('td');
        td.innerText = i;
        tr.appendChild(td);
        
        if((firstDay + i) % 7 == 0) {
            pos.appendChild(tr);
            tr = document.createElement('tr');
        }
        
        // 토요일 : pink, 일요일 : aqua
        if((firstDay + i) % 7 == 1) {
            td.setAttribute('style', 'background-color : aqua');
        } else if((firstDay + i) % 7 == 0) {
            td.setAttribute('style', 'background-color : pink');
        }
    }
    pos.appendChild(tr);
}