package com.mydata.ems.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Products")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long product_id;
	
	@Column(name="product-name",nullable=false,unique=true)
	private String product_name;
	
	@Column(name="Cost")
	private float product_cost;
	
	@Column(name="Quantity")
	private int product_qty;
	
	@Column(name="Category")
	private String product_category;
	
	
	public long getProduct_id() {
		return product_id;
	}
	public void setProduct_id(long product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public float getProduct_cost() {
		return product_cost;
	}
	public void setProduct_cost(float product_cost) {
		this.product_cost = product_cost;
	}
	public int getProduct_qty() {
		return product_qty;
	}
	public void setProduct_qty(int product_qty) {
		this.product_qty = product_qty;
	}
	public String getProduct_category() {
		return product_category;
	}
	public void setProduct_category(String product_category) {
		this.product_category = product_category;
	}
	
	
	public Product(long product_id, String product_name, float product_cost, int product_qty, String product_category) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.product_cost = product_cost;
		this.product_qty = product_qty;
		this.product_category = product_category;
	}
	public Product() {}	
	
}
