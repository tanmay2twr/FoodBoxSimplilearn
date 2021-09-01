package com.simplilearn.foodBox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodBox.model.FoodCart;

@Repository
public interface FoodCartRepository extends JpaRepository<FoodCart, Long> {
	public FoodCart findByUserIdAndFoodItemId(String userId, long foodItemId);
	public List<FoodCart> findByUserId(String userId);
	public void deleteAllByUserId(String userId);
}
