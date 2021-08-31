package com.simplilearn.foodBox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodBox.model.FoodCart;
import com.simplilearn.foodBox.repository.FoodCartRepository;

@Service
public class FoodCartService {

	@Autowired
	FoodCartRepository cartRepo;

	public FoodCart addToCart(FoodCart cart) {
		// TODO Auto-generated method stub
		FoodCart obj = cartRepo.findByUserIdAndFoodItemId(cart.getUserId(), cart.getFoodItemId());
		if (obj != null) {
			if (cart.getQuantity() == 0) {
				cartRepo.delete(obj);
				return null;
			}
			obj.setQuantity(cart.getQuantity());
			return cartRepo.save(obj);
		}
		return cartRepo.save(cart);
	}

	public List<FoodCart> getCartItems(String userId) {
		// TODO Auto-generated method stub
		return cartRepo.findByUserId(userId);
	}

	public void emptyCart(String userId) {
		// TODO Auto-generated method stub
		List<FoodCart> list = cartRepo.findByUserId(userId);
		for (FoodCart foodCart : list) {
			cartRepo.delete(foodCart);
		}
	}

}
