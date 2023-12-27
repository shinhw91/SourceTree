<%-- <%@page import="com.yedam.board.vo.BoardVO"%> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>    
<%-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>remBoardForm.jsp</title>
</head>
<body>
	<%
    	BoardVO vo = (BoardVO) request.getAttribute("vo");
    %> --%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/nav.jsp"></jsp:include>

	<form name="myForm" action="removeBoard.do">
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
                <td><fmt:formatDate value="${vo.writeDate}" pattern="yyyy-MM-dd"/></td>
                <td>조회수</td>
<%--                 <td><%=vo.getClickCnt() %></td> --%>
                <td>${vo.clickCnt }</td>
            </tr>
            <tr>
                <td>이미지</td>
                <td colspan="3"></td>
            </tr>
            <tr>
                <td colspan="4" align="center">
                    <input type="submit" value="삭제">
                    <input type="reset" value="취소">
                </td>
            </tr>
        </tbody>
    </table>
    </form>
    
    <br>
    <a href="boardList.do">글목록으로</a>
<!-- </body>
</html> -->
<jsp:include page="../layout/foot.jsp"></jsp:include>