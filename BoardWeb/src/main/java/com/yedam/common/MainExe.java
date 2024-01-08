package com.yedam.common;

import java.util.HashMap;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.reply.service.ReplyService;
import com.yedam.reply.serviceimpl.ReplyServiceImpl;

//import com.yedam.student.mapper.StudentMapper;
//import com.yedam.student.service.StudentService;
//import com.yedam.student.serviceimpl.StudentServiceMybatis;

public class MainExe {
	public static void main(String[] args) {
//		StudentService svc = new StudentServiceMybatis();
//		String sno = "23-001";
//		
//		// StudentMapper.xml 추가
//		if(svc.remStudent(sno)) {
//			System.out.println("삭제 완료!");
//		} else {
//			System.out.println("삭제 실패!");
//		}
		
//		SqlSessionFactory factory = DataSource.getInstance();
//		SqlSession session = factory.openSession(true);
//		
//		BoardMapper mapper = session.getMapper(BoardMapper.class);
		// 목록
//		List<BoardVO> list = mapper.selectList();
//		for(BoardVO vo : list) {
//			System.out.println(vo.toString());
//		}
		
		// 단건조회
//		System.out.println(mapper.selectOne(1));
//		
//		BoardVO vo = new BoardVO();
		// 추가
//		vo.setTitle("추가확인");
//		vo.setContent("추가됩니다");
//		vo.setWriter("추가자");
//		if(mapper.insertBoard(vo) == 1){
//			System.out.println("추가 완료!");
//		} else {
//			System.out.println("추가 실패!");
//		}
		
		// 수정
//		vo.setContent("수정됩니다");
//		vo.setBoardNo(7);		
//		if(mapper.updateBoard(vo) == 1) {
//			System.out.println("수정 완료!");
//		} else {
//			System.out.println("수정 실패!");
//		}
		
		// 삭제
//		if(mapper.deleteBoard(7) == 1) {
//			System.out.println("삭제 완료!");
//		} else {
//			System.out.println("삭제 실패!");
//		}
		
		// 조회수증가
//		if(mapper.updateCnt(8) == 1) {
//			System.out.println("조회수 완료!");
//		} else {
//			System.out.println("조회수 실패!");
//		}
		
		

//		MemberService svc = new MemberServiceImpl();
//		MemberVO vo = svc.login("user1", "1111");
//		
//		if(vo != null) {
//			System.out.println(vo);
//		} else {
//			System.out.println("id, pw 확인");
//		}
		
//		ReplyService svc = new ReplyServiceImpl();
//		svc.replyList(1).forEach(reply -> System.out.println(reply));
//		svc.replyListPaging(1, 1).forEach(reply -> System.out.println(reply));
		
//		int total = 70;
//		PageDTO dto = new PageDTO(13, total);
//		
//		System.out.println(dto.toString());
		
		ReplyService svc = new ReplyServiceImpl();
		List<HashMap<String, Object>> list = svc.chartData();
		
		Gson gson = new GsonBuilder().create();
		System.out.println(gson.toJson(list));
	}
}
