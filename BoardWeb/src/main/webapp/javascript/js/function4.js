// function4.js

// 달력을 생성하는 객체
const cal = {
    days : ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],

    makeCalender : function(month) {
        this.makeTitle(this.days, document.getElementById('theader'))    
        this.makeBody(month, document.getElementById('tbody'))
    },

    makeTitle : function(fields, pos) {
        let tr = document.createElement('tr');
        fields.forEach(function(field) {
            let th = document.createElement('th');
            th.innerText = field;
            tr.appendChild(th);
        })
        pos.appendChild(tr);
    },

    makeBody : function(month, pos) {
        let tr = document.createElement('tr');
        // 공백
        let firstDay = this.getFirstDay(month);
        for(let i = 0; i < firstDay; i++) {
            let td = document.createElement('td');
            td.innerText = "";
            tr.appendChild(td);
        }
    
        // 날짜
        let lastDate = this.getLastDate(month);
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
    },   // end makeBody

    // getFirstDay : function(month) {
    getFirstDay(month) {
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
    },

    // getLastDate : function(month) {
    getLastDate(month) {
        // 월 입력 => 마지막날 반환 (31, 29, 31, 30, 31, 30 ...)
        // if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        //     return 31;
        // } else if(month == 2) {
        //     return 29;
        // } else {
        //     return 30;
        // }

        switch(month) {
            case 1 :
            case 3 :
            case 5 :
            case 7 :
            case 8 :
            case 10 :
            case 12 :
                return 31;
                break;
            case 2 :
                return 29;
                break;
            default :
                return 30;
                break; 
        }
    }


}
cal.makeCalender(1);