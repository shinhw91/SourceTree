// class2.js

let year = 2024;
let month = 1;

let today = new Date(year, month - 1, 1);
today = new Date(year, month, 0);
today = new Date(2023, 1, 1); // {} new Object()
today = new Date(2023, 2, 0); // {} new Object()
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

class Calendar {
    constructor(year, month) {
        this.year = year;
        this.month = month;
    }

    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

    makeCalender() {
        console.log('달력생성');
        this.makeTitle(document.getElementById('theader'))
        this.makeBody(document.getElementById('tbody'))
    }

    makeTitle(pos) {
        let tr = document.createElement('tr');
        this.days.forEach(function(field) {
            let th = document.createElement('th');
            th.innerText = field;
            tr.appendChild(th);
        })
        pos.appendChild(tr);
    }

    makeBody(pos) {
        let tr = document.createElement('tr');
        // 공백
        let firstDay = this.getFirstDay();
        for(let i = 0; i < firstDay; i++) {
            let td = document.createElement('td');
            td.innerText = "";
            tr.appendChild(td);
        }
    
        // 날짜
        let lastDate = this.getLastDate();
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

    getFirstDay() {
        let day = new Date(this.year, this.month - 1 , 1);
        return day.getDay();
    }

    getLastDate() {
        // 년, 월 : this.year, this.month
        let day = new Date(this.year, this.month, 0);
        return day.getDate();
    }

}
const cal = new Calendar(year, month);
cal.makeCalender();