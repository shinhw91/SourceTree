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
    ${logName} vs. ${vo.writer}
    
    <br>
    <a href="boardList.do">글목록으로</a>
    <script>
    	function deleteFun(){
    		console.log(window); 
    		document.forms.myForm.action = "removeForm.do";
    		document.forms.myForm.submit();
    	}
    </script>
<!-- </body>
</html> -->
<%-- <%@ include file="../layout/foot.jsp" %> --%>