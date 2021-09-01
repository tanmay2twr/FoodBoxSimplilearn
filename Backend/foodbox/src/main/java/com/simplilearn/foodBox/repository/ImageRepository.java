package com.simplilearn.foodBox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.foodBox.model.ImageDataDTO;

public interface ImageRepository extends JpaRepository<ImageDataDTO, Long> {

}