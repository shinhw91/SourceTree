package com.yedam.member.command;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.member.service.MemberService;
import com.yedam.member.serviceimpl.MemberServiceImpl;

public class MemberDelJson implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String id = req.getParameter("id");
		
		MemberService svc = new MemberServiceImpl();
		Map<String, Object> map = new HashMap<>();
		if(svc.removeMember(id)) {
			map.put("retCode", "OK");
		} else {
			map.put("retCode", "NG");
		}
		Gson gson = new GsonBuilder().create();
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
