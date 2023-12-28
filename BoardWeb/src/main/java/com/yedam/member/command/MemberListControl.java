package com.yedam.member.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.member.service.MemberService;
import com.yedam.member.serviceimpl.MemberServiceImpl;
import com.yedam.member.vo.MemberVO;

public class MemberListControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		MemberService svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();
		
		req.setAttribute("memberList", list);
		
		try {
			req.getRequestDispatcher("/admin/memberList.tiles").forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
