package com.yedam.common;
// 컨트롤러 : url -> 서블릿 실행

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.board.command.AddBoardControl;
import com.yedam.board.command.BoardFormControl;
import com.yedam.board.command.BoardListControl;
import com.yedam.board.command.GetBoardControl;
import com.yedam.board.command.LogoutControl;
import com.yedam.board.command.ModifyBoardControl;
import com.yedam.board.command.ModifyFormControl;
import com.yedam.board.command.RemoveBoardControl;
import com.yedam.board.command.RemoveFormControl;
import com.yedam.member.command.GetMemberControl;
import com.yedam.member.command.LoginControl;
import com.yedam.member.command.LoginFormControl;
import com.yedam.member.command.MemberListControl;
import com.yedam.reply.command.AddReplyJson;
import com.yedam.reply.command.ChartForm;
import com.yedam.reply.command.Covid19Form;
import com.yedam.reply.command.DelReplyJson;
import com.yedam.reply.command.MapForm;
import com.yedam.reply.command.PagingListJson;
import com.yedam.reply.command.ReplyCountJson;
import com.yedam.reply.command.ReplyListJson;
import com.yedam.student.command.StudentInfoCont;
import com.yedam.student.command.StudentListCont;

//@WebServlet("*.do")
public class FrontController extends HttpServlet {
// 생명주기 : 생성자 -> init() -> service() -> destroy()
	
	Map<String, Control> map;
	
	public FrontController() {
		System.out.println("생성자 호출");
		map = new HashMap<String, Control>();
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init() 호출");
//		map.put("/main.do", new MainControl());
//		map.put("/sub.do", new SubControl());
		// 게시판 관련
		map.put("/boardList.do", new BoardListControl());
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		map.put("/getBoard.do", new GetBoardControl());
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());
		
		// 회원관련
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
		
		// 관리자
		map.put("/memberList.do", new MemberListControl());
		map.put("/getMember.do", new GetMemberControl());
		
		// tiles 관련
		map.put("/studentList.do", new StudentListCont());
		map.put("/studentInfo.do", new StudentInfoCont());
		
		// 댓글관련. json 포맷의 데이터를 생성해서 반환
		map.put("/replyListJson.do", new ReplyListJson());
		map.put("/delReplyJson.do", new DelReplyJson());
		map.put("/addReplyJson.do", new AddReplyJson());
		// 페이지 생성하기 위한 json
		map.put("/pagingListJson.do", new PagingListJson());
		
		// chart
		map.put("/chart.do", new ChartForm());
		map.put("/replyCountJson.do", new ReplyCountJson());
		
		// 코로나19 관련
		map.put("/covid19.do", new Covid19Form());
		
		// 지도 api
		map.put("/map.do", new MapForm());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		System.out.println("service() 호출");
		// http://localhost/BoardWeb/main.do -> mainControl
		String url = req.getRequestURI();	// /BoardWeb/main.do
		String context = req.getContextPath();	// /BoardWeb
		String path = url.substring(context.length());	// /main.do
		System.out.println(path);
		
		Control ctrl = map.get(path);
		ctrl.execute(req, resp);
		
		
	}
	
	@Override
	public void destroy() {
		System.out.println("destroy() 호출");
	}
}
