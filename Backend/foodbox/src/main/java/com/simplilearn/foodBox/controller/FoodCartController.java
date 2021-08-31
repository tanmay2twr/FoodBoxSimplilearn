package com.simplilearn.foodBox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.foodBox.model.FoodCart;
import com.simplilearn.foodBox.service.FoodCartService;

@RestController
@RequestMapping("/foodcart")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FoodCartController {

	@Autowired
	FoodCartService cartService;

	@PostMapping("/addToCart")
	public ResponseEntity<?> addToCart(@RequestBody FoodCart cart) {
		try {
			return new ResponseEntity<>(cartService.addToCart(cart), HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@GetMapping("/getCartItems")
	public List<FoodCart> getCartItems(@RequestParam String userId) {
		return cartService.getCartItems(userId);
	}

	@DeleteMapping("/emptycart")
	public ResponseEntity<?> emptyCart(@RequestParam String userId) {
		cartService.emptyCart(userId);
		return new ResponseEntity<>(true, HttpStatus.OK);
	}

}	
