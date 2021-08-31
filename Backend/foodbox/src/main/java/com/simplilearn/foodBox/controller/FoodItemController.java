package com.simplilearn.foodBox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.simplilearn.foodBox.model.Cuisine;
import com.simplilearn.foodBox.model.FoodItems;
import com.simplilearn.foodBox.model.ImageDataDTO;
import com.simplilearn.foodBox.service.FoodtItemService;

@RestController
@RequestMapping("/fooditem")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FoodItemController {

	@Autowired
	FoodtItemService foodItemService;

	@PostMapping(value = "/fileupload")
	public long fileUpload(@RequestParam("file") MultipartFile file) {
		try {
			byte[] image = file.getBytes();
			ImageDataDTO model = new ImageDataDTO("image", image);
			ImageDataDTO savedImage = foodItemService.saveImage(model);
			if (savedImage != null) {
				return savedImage.getId();
			} else {
				return 0;
			}
		} catch (Exception e) {
			return 0;
		}
	}

	@GetMapping("/getDetail/{id}")
	public byte[] getDbDetils(@PathVariable String id, Model model) {

		ImageDataDTO imagesObj = foodItemService.getImages(Long.parseLong(id));
		model.addAttribute("id", imagesObj.getId());
		model.addAttribute("name", imagesObj.getName());
		byte[] encode = java.util.Base64.getEncoder().encode(imagesObj.getImage());
		return encode;
	}

	@PostMapping("/addFoodItem")
	public ResponseEntity<?> addFoodItem(@RequestBody FoodItems obj, @RequestParam("id") long id) {
		try {
			FoodItems foodItem = foodItemService.addFoodItem(obj,id);
			return new ResponseEntity<>(foodItem, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	@PostMapping("/editFoodItem")
	public ResponseEntity<?> editFoodItem(@RequestBody FoodItems obj) {
		try {
			FoodItems foodItem = foodItemService.editFoodItem(obj);
			return new ResponseEntity<>(foodItem, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/getAllFoodItemsAdmin")
	public ResponseEntity<?> getAllFoodItems() {
		try {
			List<FoodItems> foodItem = foodItemService.getAllFoodItems();
			return new ResponseEntity<>(foodItem, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/getAllFoodItemsUser")
	public ResponseEntity<?> getAllFoodItemsUser() {
		try {
			List<FoodItems> foodItem = foodItemService.getAllFoodItemsUser();
			return new ResponseEntity<>(foodItem, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/getFoodItemByCategory")
	public ResponseEntity<?> getFoodItemByCategory(@RequestParam String category) {
		try {
			List<FoodItems> foodItem = foodItemService.getFoodItemByCuisine(category);
			return new ResponseEntity<>(foodItem, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/getFoodItemByID")
	public ResponseEntity<?> getFoodItemByID(@RequestParam Long id) {
		try {
			FoodItems foodItem = foodItemService.getFoodItemByID(id);
			return new ResponseEntity<>(foodItem, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/addCuisine")
	public ResponseEntity<?> addCategory(@RequestParam String cuisine) {
		try {
			Cuisine category = foodItemService.addCategory(cuisine);
			return new ResponseEntity<>(category, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/deleteCuisine")
	public ResponseEntity<?> deleteCuisine(@RequestParam Long id) {
		try {
			foodItemService.deleteCuisine(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/getAllCuisines")
	public ResponseEntity<?> getAllCuisines() {
		try {
			List<Cuisine> category = foodItemService.getAllCuisines();
			return new ResponseEntity<>(category, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}
