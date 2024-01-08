/**
 * 
 */
function makeLi(reply = {}) {
	    // start
/*	    console.log(reply);*/
		let li = document.createElement('li');
		let span = document.createElement('span');
		span.innerText = '글번호 ' + reply.replyNo;
		li.appendChild(span);
		span = document.createElement('span');
		span.innerText = ' ' + reply.reply;
		li.appendChild(span);
		span = document.createElement('span');
		span.innerText = ' ' + reply.name;
		li.appendChild(span);
		
		// 삭제버튼
		let btn = document.createElement('button');
		btn.addEventListener('click', function() {
			// 댓글번호 삭제 후 화면에서 제거
			let delHtp = new XMLHttpRequest();
			delHtp.open('get', 'delReplyJson.do?rno=' + reply.replyNo)
			delHtp.send()
			delHtp.onload = function() {
				let result = JSON.parse(delHtp.responseText)
				console.log(result);
				if(result.retCode == 'OK') {
					alert('삭제됨!');
					// btn.parentElement.remove();
					// bno, page => 페이지리스트, 페이징리스트
					showList(pageInfo);
				} else if(result.retCode == 'NG') {
					alert('처리중 에러!');
				}
			}
		})
		btn.innerText = '삭제';
		li.appendChild(btn);	// end
		
		return li;
}