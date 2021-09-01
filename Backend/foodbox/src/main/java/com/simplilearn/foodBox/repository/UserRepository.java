package com.simplilearn.foodBox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.foodBox.model.User;

public interface UserRepository extends JpaRepository<User, String> {
}
