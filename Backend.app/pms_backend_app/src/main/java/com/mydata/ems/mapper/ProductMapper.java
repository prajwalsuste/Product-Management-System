package com.mydata.ems.mapper;

import com.mydata.ems.dto.ProductDTO;
import com.mydata.ems.entity.Product;

public class ProductMapper {
	public static Product mapToProduct(ProductDTO pdto) {
		Product p= new Product(pdto.getProduct_id(),pdto.getProduct_name(),pdto.getProduct_cost(),pdto.getProduct_qty(),pdto.getProduct_category());
		return p;
	}
	
	public static ProductDTO mapToProductDTO(Product p) {
		ProductDTO pdto=new ProductDTO(p.getProduct_id(),p.getProduct_name(),p.getProduct_cost(),p.getProduct_qty(),p.getProduct_category());
		return pdto;
	}
	

}
