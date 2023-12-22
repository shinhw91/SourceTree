package com.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.yedam.board.mapper.BoardMapper;
import com.yedam.board.vo.BoardVO;

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
		
		SqlSessionFactory factory = DataSource.getInstance();
		SqlSession session = factory.openSession(true);
		
		BoardMapper mapper = session.getMapper(BoardMapper.class);
		// 목록
//		List<BoardVO> list = mapper.selectList();
//		for(BoardVO vo : list) {
//			System.out.println(vo.toString());
//		}
		
		// 단건조회
		System.out.println(mapper.selectOne(1));
		
		BoardVO vo = new BoardVO();
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
		
	}
}
