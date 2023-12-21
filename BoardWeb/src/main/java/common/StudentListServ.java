package common;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class StudentListServ
 */
@WebServlet("/studentList")
public class StudentListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public StudentListServ() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");	// content 타입 : txt, html, json
		response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out = response.getWriter();
		
		// 목록 페이지
		StudentDAO dao = new StudentDAO();
		List<Student> list = dao.getStudentList();
		
//		out.print("<table border = '1'>");
		String str = "<table border = '1'>";
		str += "<thead><tr><th>학생번호</th><th>학생이름</th><th>영어점수</th><th>수학점수</th></tr></thead>";
		str += "<tbody>";
		
		for(Student std : list) {
			str += "<tr><td><a href='student/studentInfo.jsp?sno=" + std.getStudentNo() + "'>" + std.getStudentNo() + "</a></td><td>" + std.getStudentName() + "</td><td>" + std.getEng() + "</td><td>" + std.getMath() + "</td></tr>";
		}
		str += "</tbody></table>";
		str +="<br><a href='student/inform.html'>등록화면</a>";
		str += "<br><a href='index.html'>인덱스 이동</a>";
		
		out.print(str);
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
