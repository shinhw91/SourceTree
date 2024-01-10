<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table>
		<thead>
			<tr>
				<th></th>
				<th>도서코드</th>
				<th>도서명</th>
				<th>저자</th>
				<th>출판사</th>
				<th>가격</th>
				<th>삭제</th>
			</tr>		
		</thead>
		<tbody>
			<c:forEach var="vo" items="${bookList }">
				<tr>
					<td>${vo.bookCode }</td>
					<td>${vo.bookName }</td>
					<td>${vo.writer }</td>
					<td>${vo.publisher }</td>
					<td>${vo.price }</td>
				</tr>
			</c:forEach>
		</tbody>
		
		
	</table>
</body>
</html>