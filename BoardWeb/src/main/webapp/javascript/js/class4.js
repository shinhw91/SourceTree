// class4.js

const friend = {
    name : "홍길동",
    age : 20, 
    hobbies : ['독서', '운동', '영화'],
    pets : [{
        name : '야옹이',
        gender : 'M',
        friends : ['검냥이', '파냥이']
    }, {
        name : '멍멍이',
        gender : 'F'
    }],
    showHobby() {
        return `${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}`;
    },
    // showFriends() {
    //     console.log(this);
    // }

}
friend['pets'][0]['friends'][2] = '노량이';
delete friend.age;
friend.ages = 20;
friend.showFriends = function() {
    console.log(this);
}

console.log(friend['pets'][0]['friends']);
console.log(friend);

