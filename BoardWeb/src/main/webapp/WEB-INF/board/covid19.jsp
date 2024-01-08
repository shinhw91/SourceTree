<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<div id="show">
		<table class="table">
			<thead>
				<tr>
					<th>센터id</th>
					<th>센터명</th>
					<th>연락처</th>
					<th>시도정보</th>
					<th>주소</th>
				</tr>
			</thead>					
			<tbody id="list"></tbody>
		</table>
	</div>
	<script>
	const url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=zb6HpdnPLgMN2oDBWszc3Aho5Zi4wsdLdbOKsT9O%2FLqozdb34KQlflBl%2Frwc8b84M5%2BxBIAlLxu1Bdr6lyLfvA%3D%3D';
	const fields = ['id', 'centerName', 'phoneNumber', 'sido', 'address']	// 화면에 보여줄 항목 지정
	
	let tbody = document.getElementById("list");
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', url);
	xhtp.send();
	xhtp.onload = function() {
		console.log(JSON.parse(xhtp.responseText));
		let result = JSON.parse(xhtp.responseText);
		// tr > td * 4
		result.data.forEach(center => {
			console.log(center);
			let tr = document.createElement('tr');
			tr.addEventListener('click', function() {
				// location.href = 'map.do?x=' + center.lat + '&y=' + center.lng;
				window.open("map.do?x=" + center.lat + "&y=" + center.lng + "&z=" + center.org)
			})
			fields.forEach(field => {
				let td = document.createElement('td');
				td.innerText = center[field];
				tr.appendChild(td);
			})
			tbody.appendChild(tr);
		})
		
		
	
	}
	</script>
	
</body>
</html>