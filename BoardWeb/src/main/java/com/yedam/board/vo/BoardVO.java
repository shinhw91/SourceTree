package com.yedam.board.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNo;
	private String title;
	private String content;
	private String writer;
	private Date writer_date;
	private int clickCnt;
	private String image;
}
