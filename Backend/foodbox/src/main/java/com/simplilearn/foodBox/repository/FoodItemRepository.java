package com.simplilearn.foodBox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodBox.model.FoodItems;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItems, Long> {

	List<FoodItems> findByCuisineid(String category);

	List<FoodItems> findByStatus(int i);

}
