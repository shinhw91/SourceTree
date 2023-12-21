<%@page import="common.Student"%>
<%@page import="java.util.List"%>
<%@page import="common.StudentDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table border='1'>
		<thead>
			<tr><th>학번</th><th>이름</th><th>영어</th><th>수학</th></tr>
		</thead>
		<tbody>
	<%
		StudentDAO dao = new StudentDAO();
		List<Student> list = dao.getStudentList();
		
		for (Student std : list) {
	%>
		<tr>
			<td><a href='student/studentInfo.jsp?sno="'+ std.getStudentNo() + '"'><%=std.getStudentNo() %></a></td>
			<td><%=std.getStudentName() %></td>
			<td><%=std.getEng() %></td>
			<td><%=std.getMath() %></td>
		</tr>
	<%		
		}
	%>
		</tbody>
	</table>
</body>
</html>