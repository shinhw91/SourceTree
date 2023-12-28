<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<h3>회원상세</h3>
<input type="hidden" name="id" value="${vo.id }">
<table class="table">
	<tbody>
		<tr>
			<td>아이디</td>
			<td>${vo.id }</td>
		</tr>
		
		
	</tbody>
</table>