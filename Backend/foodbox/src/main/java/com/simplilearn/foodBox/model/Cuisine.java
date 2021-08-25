package com.simplilearn.foodBox.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cuisines")
public class Cuisine {
	@Id
	@Column(name = "cuisine_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String cuisine;

	public Cuisine() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cuisine(Long id, String cuisine) {
		super();
		this.id = id;
		this.cuisine = cuisine;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCuisine() {
		return cuisine;
	}

	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}

}
