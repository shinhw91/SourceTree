package com.yedam.member.command;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.member.service.MemberService;
import com.yedam.member.serviceimpl.MemberServiceImpl;
import com.yedam.member.vo.MemberVO;

public class GetMemberControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String id = req.getParameter("id");
		
		MemberService svc = new MemberServiceImpl();
		MemberVO vo = svc.getMember(id);
		
		req.setAttribute("vo", vo);
		
		RequestDispatcher rd = req.getRequestDispatcher("member/getMember.tiles");
		try {
			rd.forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
