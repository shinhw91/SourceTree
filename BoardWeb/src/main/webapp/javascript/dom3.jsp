<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>p.272 ~ p.273</title>
</head>
<body>
	<p>실습</p>
	<ul id = "friends">
		<li class="animal">라이언</li>
		<li class="fruit">어피치</li>
		<li class="animal">프로도</li>
		<li class="alien">콘
			<ul class="keyword">
				<li>3세</li>
				<li>숏다리</li>
				<li>초록괴수</li>				
			</ul>
		</li>
	</ul>
	<ul class="icons">
		<li>
			<span>스몰</span>
			<span>미디엄</span>
			<span>빅</span>
		</li>	
	</ul>
	<ul id="newfriends">
	</ul>
	
	<script type="text/javascript">
	// 새 <li> 엘리먼트 생성
	let li = document.createElement('li');
	let litext = document.createTextNode('무지');
	li.appendChild(litext);
	
	// 새 <li> 엘리먼트를 붙일 대상 부모 선택
	let targetul = document.getElementById('friends');
	targetul.appendChild(li);	// friends ID를 가진 ul 자식들 맨끝에 새로 만든 <li> 태그를 붙임
	
	// 이동할 엘리먼트 선택
	let sourceli = document.querySelector('ul#friends li:first-child');
	// 삽입할 위치 기준 엘리먼트 선택
	let targetli = document.querySelector('ul#friends li:last-child');
	// 붙여넣는 위치에 주의해야 함
	// 1뎁스 ul 마지막 요소가 아니라 중첩된 내부 ul 끝에 붙게됨
	targetli.after(sourceli);
	
	// 문자열을 가지는 li 엘리먼트를 생성해 자식 엘리먼트로 붙임
	var appendli = document.createElement('li');
	appendli.append("왕눈이");
	document.querySelector('ul li ul').append(appendli);
	
	// 마지막 차일들 엘리먼트 선택
	let selected = document.querySelector('.icons li span:last-child');
	// 추가할 span 노드 생성
	let newspan = document.createElement('span');
	let newspantext = document.createTextNode('빅');
	newspan.appendChild(newspantext);
	// 마지막 엘리먼트 앞에 추가
	selected.parentNode.insertBefore(newspan, selected);
	
	// animal 클래스 속성을 가진 li 엘리먼트들을 선택
	let items = document.querySelectorAll('.animal');
	// 나머지 파타미터로 새 ul에 선택한 엘리먼트들을 추가
	document.querySelector('#newfriends').prepend(...items);
	
	
	</script>
</body>
</html>