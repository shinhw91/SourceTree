package com.yedam.student.vo;

import lombok.Data;

@Data
public class Student {
	// 속성(필드)
	private String studentNo;	// student_no
	private String studentName;
	private int eng;
	private int math;

	// 생성자
	public Student() {
		
	}
	
	public Student(String studentNo, String studentName, int eng, int math) {
		this.studentNo = studentNo;
		this.studentName = studentName;
		this.eng = eng;
		this.math = math;
	}

	// 기능(메소드)
	public void ShowInfo() {
		System.out.println("이름 : " + studentName + ", 영어점수 : " + eng + ", 수학점수 : " + math);
	}



} // end class
