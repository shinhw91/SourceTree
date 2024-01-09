<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>webapp/javascript/promise2.jsp</title>
</head>
<body>

	<script>
		fetch('data.json',  {
				method : 'post',
				mod : 'cors',
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'	
				},
				body : 'x=120&y=200'
			})	// url, option 객체
			.then(result => {
				console.log(result);
				return result.json();	// 문자열 => 객체
			})
			.then(json => {
				console.log(json);
			})
			.catch(error => {
				console.error(error);
			})
		
		
	</script>
</body>
</html>