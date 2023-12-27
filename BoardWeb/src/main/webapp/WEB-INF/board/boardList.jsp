<%-- <%@page import="java.util.List"%>
<%@page import="com.yedam.board.vo.BoardVO"%> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>board/boardList.jsp</title>
</head>
<body> -->
<%-- <%@ include file="../layout/menu.jsp" %>
<%@ include file="../layout/nav.jsp" %> --%>

<%-- <jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/nav.jsp"></jsp:include> --%>

<%-- <%
	List<BoardVO> list = (List<BoardVO>) request.getAttribute("boardList");
%> --%>
	
	<h3>게시판</h3>
	<!-- EL(Expression Language) -->
	<%-- ${boardList} --%>
	<%-- ${3>2? '참':'거짓'} --%>
	<table class="table">
		<thead>
			<tr>
				<th>글번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일시</th>
				<th>조회수</th>
			</tr>
		</thead>
		<tbody>
			<%-- <% for (BoardVO vo : list) { %> --%>
			<c:forEach var="vo" items="${boardList}">
			
				<tr>
					<%-- <td><%=vo.getBoardNo() %></td>
					<td><a href="getBoard.do?bno=<%=vo.getBoardNo() %>"><%=vo.getTitle() %></a></td>
					<td><%=vo.getWriter() %></td>
					<td><%=vo.getWriteDate() %></td>
					<td><%=vo.getClickCnt() %></td> --%>
					<td>${vo.boardNo}</td>
					<td><a href="getBoard.do?bno=${vo.boardNo}">${vo.title}</a></td>
					<td>${vo.writer}</td>
					<td><fmt:formatDate value="${vo.writeDate}" pattern="yyyy-MM-dd"/> </td>
					<td>${vo.clickCnt}</td>
				</tr>
			<%-- <% } %> --%>
			</c:forEach>
		</tbody>
	</table>
	
<!-- </body>
</html> -->

<%-- <%@ include file="../layout/foot.jsp" %> --%>
<%-- <jsp:include page="../layout/foot.jsp"></jsp:include> --%>
