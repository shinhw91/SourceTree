/**
 * member.js
 */
console.log('member.js')

$(document).ready(function() {
	// 회원목록 출력
	$.ajax('memberListJson.do', {
		method : 'get',
//		data : {bno : 1, rno : 2},	// 'bno=1&rno=2'
		dataType : 'json',	// 서버의 데이터 포맷을 지정
		success : function(result) {
//			JSON.parse(result);
			console.log(result);
			$(result).each((idx, member) => {
				// tr, td 생성
				let img = '';
				if(member.image) {
					img = $('<img />').attr({'src':'images/' + member.image, 'style':'width:100px'})
				}
				let tr = $('<tr />').append($('<td />').text(member.id),
											$('<td />').text(member.name),
											$('<td />').text(member.responsibility),
											$('<td />').html(img)
											);
				$('#list').append(tr);
			});	// forEach
		},
		error : function(err) {
			console.log(err);
		}
		
	})
	
	// 회원등록
	$('#addBtn').on('click', function() {
		let formData = new FormData();	// multipart/form-data : 파일전송
		formData.append('id', $('input[name="id"]').val());
		formData.append('pw', $('input[name="pw"]').val());
		formData.append('name', $('input[name="name"]').val());
		formData.append('image', $('input[name="image"]')[0].files[0]);
		
		for(let ent of formData.entries()) {
			console.log(ent);
		}
		$.ajax('memberAddJson.do', {
			method : 'post',
			data : formData,
			processData : false,
			contentType : false,
			dataType : 'json',
			success : function(result) {
					console.log(result);	// retCode, vo
					let member = result.vo;
					// tr, td 생성
					let img = '';
					if(member.image) {
						img = $('<img />').attr({'src':'images/' + member.image, 'style':'width:100px'})
					}
					let tr = $('<tr />').append($('<td />').text(member.id),
												$('<td />').text(member.name),
												$('<td />').text(member.responsibility),
												$('<td />').html(img)
												);
					$('#list').append(tr);
				
			},
			error : function(err) {
//				console.log(err);
			}
		}) 
	})
		
})