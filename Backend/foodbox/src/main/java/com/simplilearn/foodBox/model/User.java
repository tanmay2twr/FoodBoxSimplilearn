package com.simplilearn.foodBox.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	private String fullname;
	@Id
	private String email;
	private String password;
	private int role;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String fullname, String email, String password, int role) {
		super();
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	
	
}
