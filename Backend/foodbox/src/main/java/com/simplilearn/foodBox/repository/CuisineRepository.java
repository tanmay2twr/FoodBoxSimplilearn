package com.simplilearn.foodBox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodBox.model.Cuisine;
@Repository
public interface CuisineRepository extends JpaRepository<Cuisine, Long> {

}
