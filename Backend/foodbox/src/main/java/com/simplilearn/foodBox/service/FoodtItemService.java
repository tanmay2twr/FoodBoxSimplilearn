package com.simplilearn.foodBox.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodBox.model.Cuisine;
import com.simplilearn.foodBox.model.FoodItems;
import com.simplilearn.foodBox.model.ImageDataDTO;
import com.simplilearn.foodBox.repository.CuisineRepository;
import com.simplilearn.foodBox.repository.FoodItemRepository;
import com.simplilearn.foodBox.repository.ImageRepository;

@Service
public class FoodtItemService {

	@Autowired
	FoodItemRepository foodItemRepository;
	@Autowired
	ImageRepository imageRepo;

	@Autowired
	CuisineRepository cuisineRepo;

	public ImageDataDTO saveImage(ImageDataDTO model) {
		try {
			ImageDataDTO res=imageRepo.save(model);
			return res;
		} catch (Exception e) {
			return null;
		}
	}

	public ImageDataDTO getImages(Long id) {
		Optional<ImageDataDTO> findById = imageRepo.findById(id);
		if (findById.isPresent()) {
			ImageDataDTO getImageDetails = findById.get();
			return getImageDetails;
		} else {
			return null;
		}
	}

	public FoodItems addFoodItem(FoodItems obj, long id) {
		// TODO Auto-generated method stub
		ImageDataDTO imageObj=imageRepo.getById(id);
		obj.setImage(imageObj.getImage());
		obj.setImageId(id);
		return foodItemRepository.save(obj);
	}

	public List<FoodItems> getAllFoodItems() {
		// TODO Auto-generated method stub
		return foodItemRepository.findAll();
	}

	public List<FoodItems> getFoodItemByCuisine(String category) {
		// TODO Auto-generated method stub
		return foodItemRepository.findByCuisineid(category);
	}

	public Cuisine addCategory(String cuisine) {
		// TODO Auto-generated method stub
		Cuisine cuis = new Cuisine();
		cuis.setCuisine(cuisine);
		return cuisineRepo.save(cuis);
	}

	public List<Cuisine> getAllCuisines() {
		// TODO Auto-generated method stub
		return cuisineRepo.findAll();
	}

	public List<FoodItems> getAllFoodItemsUser() {
		// TODO Auto-generated method stub
		return foodItemRepository.findByStatus(1);
	}

	public FoodItems getFoodItemByID(Long id) {
		// TODO Auto-generated method stub
		return foodItemRepository.findById(id).get();
	}

	public void deleteCuisine(Long id) {
		// TODO Auto-generated method stub
		cuisineRepo.deleteById(id);
	}

	public FoodItems editFoodItem(FoodItems obj) {
		// TODO Auto-generated method stub
		return foodItemRepository.save(obj);
	}

}
