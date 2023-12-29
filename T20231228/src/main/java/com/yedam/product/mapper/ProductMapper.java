package com.yedam.product.mapper;

import java.util.List;

import com.yedam.product.vo.ProductVO;

public interface ProductMapper {
	public List<ProductVO> selectList();
	public ProductVO getProduct(String pno);
	public List<ProductVO> selectLikeList();
}
