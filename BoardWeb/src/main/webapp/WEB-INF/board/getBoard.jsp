<%-- <%@page import="com.yedam.board.vo.BoardVO"%> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>getBoard.jsp</title>
</head>
<body> -->
<%-- <%@ include file="../layout/menu.jsp" %>
<%@ include file="../layout/nav.jsp" %> --%>

<%-- <jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/nav.jsp"></jsp:include> --%>
<style>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
    <h3>상세화면</h3>
    
<%--     <%
    	BoardVO vo = (BoardVO) request.getAttribute("vo");
    %> --%>
	<form name="myForm" action="modifyForm.do">
<%-- 	<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>"> --%>
	<input type="hidden" name="bno" value="${vo.boardNo }">
    <table class="table">
        <tbody>
            <tr>
                <td>글번호</td>
<%--                 <td colspan="3"><%=vo.getBoardNo() %></td> --%>
                <td colspan="3">${vo.boardNo }</td>
            </tr>
            <tr>
                <td>제목</td>
<%--                 <td colspan="3"><%=vo.getTitle() %></td> --%>
                <td colspan="3">${vo.title }</td>
            </tr>
            <tr>
                <td>내용</td>
<%--                 <td colspan="3"><%=vo.getContent() %></td> --%>
                <td colspan="3">${vo.content }</td>
            </tr>
            <tr>
                <td>작성자</td>
<%--                 <td colspan="3"><%=vo.getWriter() %></td> --%>
                <td colspan="3">${vo.writer }</td>
            </tr>
            <tr>
                <td>작성일</td>
<%--                 <td><%=vo.getWriteDate() %></td> --%>
                <td><fmt:formatDate pattern="yyyy-MM-dd" value="${vo.writeDate }"/> </td>
                <td>조회수</td>
<%--                 <td><%=vo.getClickCnt() %></td> --%>
                <td>${vo.clickCnt }</td>
            </tr>
            <tr>
                <td>이미지</td>
                <td colspan="3">
	                <c:if test="${!empty vo.image }">
		                <img width="150px" src="images/${vo.image }">
	                </c:if>
                </td>
            </tr>
            <tr>
                <td colspan="4" align="center">
                	<c:choose>
                	<c:when test="${logName eq vo.writer }">
	                    <input type="submit" value="수정">
	                    <input type="button" onclick="deleteFun()" value="삭제">
	                </c:when>
	                <c:otherwise>
	                    <input type="submit" disabled value="수정">
	                    <input type="button" disabled onclick="deleteFun()" value="삭제">
	                </c:otherwise>    
                    </c:choose>
                </td>
            </tr>
        </tbody>
    </table>
    </form>
<%--     ${logName} vs. ${vo.writer} --%>
    
    <br>
    댓글내용 : <input type="text" id="content"><button id="addReply">등록</button>
    <p />
    <p>댓글목록</p>
    
    <div id="show">
    	<ul id="list">
<!--     		<li><span>글번호1, 내용 : test</span></li> -->
    	</ul>
    </div>
    
    <!-- 페이징 처리 -->
    ${page }
    <div id="paging" class="pagination">
    	<%-- <c:forEach var="p" begin="${page.startPage }" end="${page.lastPage }">
    		<a href="${p }" paging="${p }">${p }</a>
    	</c:forEach> --%>
    	
    	
    </div>
    
    <a href="boardList.do">글목록으로</a>
    <script src="js/service.js"></script>
    <script>
    	function deleteFun(){
    		console.log(window);
    		document.forms.myForm.action = "removeForm.do";
    		document.forms.myForm.submit();
    	}
    
   	const bno = '${vo.boardNo}';
   	let ul = document.querySelector('#list');
   	
   	// 페이지 클릭하면 페이지의 데이터 보여주도록
/*   		document.querySelectorAll('#paging a').forEach(item => {
   		item.addEventListener('click', (e) => {
   			e.preventDefault();
	   		console.log(item.href);
	   		let pageInfo = item.getAttribute("href");
	   		
 	   	    const pageAjax = new XMLHttpRequest();
	   	    pageAjax.open('get', 'replyListJson.do?bno=' + bno + '&page=' + pageInfo)
	   	    pageAjax.send()
	   	    pageAjax.onload = function() {
	   	    	let data = JSON.parse(pageAjax.responseText);	// json문자열 -> 객체
	   	    	ul.innerHTML = '';
	   	    	data.forEach(reply => {
	   	    		let li = makeLi(reply);
	   	    		ul.appendChild(li);
	   	    	})
	   	    }
	   	    
	   	    // 페이지를 생성하는 함수를 호출
	   	    pagingList(pageInfo);
	   	    	
   		})
   	}) */
   	
   	// 페이지 클릭하면 페이지의 데이터 보여주도록
   	let pageInfo = 1;
   	function pageList(e) {
		e.preventDefault(); 
   		pageInfo = this.getAttribute("href");
   		showList(pageInfo);
   		// console.log(pageInfo);
   		
/*    		const pageAjax = new XMLHttpRequest();
   	    pageAjax.open('get', 'replyListJson.do?bno=' + bno + '&page=' + pageInfo)
   	    pageAjax.send()
   	    pageAjax.onload = function() {
   	    	let data = JSON.parse(pageAjax.responseText);	// json문자열 -> 객체
   	    	ul.innerHTML = '';
   	    	data.forEach(reply => {
   	    		let li = makeLi(reply);
   	    		ul.appendChild(li);
   	    	})
   	    } */
   	    // 페이지를 생성하는 함수를 호출
   	    pagingList(pageInfo);
   		
   	}
   	
    // Ajax 호출
    function showList_backup(page) {
    	ul.innerHTML = '';
	    const xhtp = new XMLHttpRequest();
	    xhtp.open('get', 'replyListJson.do?bno=' + bno + '&page=' + page)
	    xhtp.send()
	    xhtp.onload = function() {
	    	let data = JSON.parse(xhtp.responseText);	// json문자열 -> 객체
	    	data.forEach(reply => {
	/*     		// start
		    	console.log(reply);
	    		let li = document.createElement('li');
	    		let span = document.createElement('span');
	    		span.innerText = '글번호 ' + reply.replyNo;
	    		li.appendChild(span);
	    		span = document.createElement('span');
	    		span.innerText = ' ' + reply.reply;
	    		li.appendChild(span);
	    		span = document.createElement('span');
	    		span.innerText = ' ' + reply.replyer;
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
	    					btn.parentElement.remove();
	    				} else if(result.retCode == 'NG') {
	    					alert('처리중 에러!');
	    				}
	    			}
	    		})
	    		btn.innerText = '삭제';
	    		li.appendChild(btn);	// end */
	
	    		let li = makeLi(reply);
	    		ul.appendChild(li);
	    	})
	    }
    }	//
    
    function showList(page) {
    	ul.innerHTML = '';
    	fetch('replyListJson.do?bno=' + bno + '&page=' + page)
    	.then(str => str.json())
    	.then(result => {
    		result.forEach(reply => {
    			let li = makeLi(reply);
    			ul.appendChild(li);
    		})
    	})
    	.catch(reject => console.log(reject));
    }
    
    showList(pageInfo);
    
    // 페이지 생성
    let paging = document.querySelector('#paging')
    pagingList();
    
    function pagingList(page = 1) {
    	// 다음 페이지를 기준으로 페이지 목록 생성
    	paging.innerHTML = '';
    	
	    let pagingAjax = new XMLHttpRequest();
	    pagingAjax.open('get', 'pagingListJson.do?bno=' + bno + '&page=' + page);
	    pagingAjax.send()
	    pagingAjax.onload = function() {
	    	let result = JSON.parse(pagingAjax.responseText);
	    	console.log(result);
	    	// 이전
	    	if(result.prev) {
	    		let aTag = document.createElement('a');
	    		aTag.href = result.startPage - 1;
	    		aTag.innerText = '이전';
	    		aTag.addEventListener('click', pageList);
	    		paging.appendChild(aTag);
	    	}
	    	// 페이지 목록
	    	for(let p = result.startPage; p <= result.lastPage; p++) {
	    		let aTag = document.createElement('a');
	    		if(p == page) {
	    			aTag.setAttribute('class', 'active');
	    		}
	    		aTag.href = p;
	    		aTag.innerText = p;
	    		aTag.addEventListener('click', pageList);
	    		paging.appendChild(aTag);
	    	}
	    	// 다음
	    	if(result.next) {
	    		let aTag = document.createElement('a');
	    		aTag.href = result.lastPage + 1;
	    		aTag.innerText = '다음';
	    		aTag.addEventListener('click', pageList);
	    		paging.appendChild(aTag);
	    		
/* 	    		// 다음 페이지를 기준으로 페이지 목록 생성
	    		paging.innerHTML = '';
	    		pageList(result.lastPage + 1); */
	    	}
	    }
    }	// end pagingList
    
    
    // 등록버튼 클릭 이벤트 생성
	// document.querySelector('#addReply').addEventListener('click', function() {});
    document.querySelector('#addReply').onclick = function() {
    	let reply = document.querySelector('#content').value;
    	let replyer = '${logId}';
    	
    	// fetch 함수
    	fetch('addReplyJson.do', {
    		method : 'post',
    		headers : {
    			'Content-Type' : 'application/x-www-form-urlencoded'
    		},
    		body : 'reply=' + reply + '&replyer=' + replyer + '&bno=' + bno
    	})
    	.then(str => str.json())
    	.then(result => {
       		if(result.retCode == 'OK') {
        		alert('처리성공!')
        		pageInfo = 1;
        		showList(pageInfo);
        		pagingList();
        		
        		document.querySelector('#content').value = '';
    		} else if(result.retCode == 'NG') {
    			alert('처리중 에러!')
    		}
    	})
    	.catch(err => console.error(err));
    	
/*      	const addAjax = new XMLHttpRequest();
//    	addAjax.open('get', 'addReplyJson.do?reply=' + reply + '&replyer=' + replyer + '&bno=' + bno);
    	addAjax.open('post', 'addReplyJson.do');
    	addAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//    	addAjax.send()
    	addAjax.send('reply=' + reply + '&replyer=' + replyer + '&bno=' + bno)
    	addAjax.onload = function() {
    		let result = JSON.parse(addAjax.responseText);
    		if(result.retCode == 'OK') { */
    			/* let reply = result.vo; */
     			// start
/*         		let li = document.createElement('li');
        		let span = document.createElement('span');
        		span.innerText = '글번호 ' + reply.replyNo;
        		li.appendChild(span);
        		span = document.createElement('span');
        		span.innerText = ' ' + reply.reply;
        		li.appendChild(span);
        		span = document.createElement('span');
        		span.innerText = ' ' + reply.replyer;
        		li.appendChild(span); */
        		
/*         		// 삭제버튼
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
        					btn.parentElement.remove();
        				} else if(result.retCode == 'NG') {
        					alert('처리중 에러!');
        				}
        			}
        		})
        		btn.innerText = '삭제';
        		li.appendChild(btn);	// end */
				
        		/* let li = makeLi(reply);
        		ul.appendChild(li); */
/*          		alert('처리성공!')
        		pageInfo = 1;
        		showList(pageInfo);
        		pagingList();
        		
        		document.querySelector('#content').value = '';
    		} else if(result.retCode == 'NG') {
    			alert('처리중 에러!')
    		}
	    	console.log();    		
    	}	// end onload */
    }
    	
    </script>
<!-- </body>
</html> -->
<%-- <%@ include file="../layout/foot.jsp" %> --%>