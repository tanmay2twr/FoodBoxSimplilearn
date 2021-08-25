package com.simplilearn.foodBox.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "fooditems")
public class FoodItems {
	@Id
	@Column(name = "item_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String description;
	private float price;
	private Long cuisineid;
	private float offer;
	private int status;
	private long imageId;
	@Lob
	@Column(name = "Image")
	private byte[] image;

	public FoodItems(Long id, String title, String description, float price, Long cuisineid, float offer, int status,
			long imageId, byte[] image) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.cuisineid = cuisineid;
		this.offer = offer;
		this.status = status;
		this.imageId = imageId;
		this.image = image;
	}

	public long getImageId() {
		return imageId;
	}

	public void setImageId(long imageId) {
		this.imageId = imageId;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public FoodItems() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getCuisineid() {
		return cuisineid;
	}

	public void setCuisineid(Long cuisineid) {
		this.cuisineid = cuisineid;
	}

	public float getOffer() {
		return offer;
	}

	public void setOffer(float offer) {
		this.offer = offer;
	}

	public int isStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getStatus() {
		return status;
	}

}
