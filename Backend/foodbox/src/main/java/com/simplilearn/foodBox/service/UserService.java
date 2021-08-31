package com.simplilearn.foodBox.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodBox.model.User;
import com.simplilearn.foodBox.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;

	public User userSave(User user) {
		// TODO Auto-generated method stub
		User userr = userRepo.save(user);
		return userr;
	}

	public User fetchUserByUserID(String tempEmailID) {
		// TODO Auto-generated method stub
		Optional<User> user= userRepo.findById(tempEmailID);
		if(user.isPresent()) {
			return user.get();
		}else {
			return null;
		}

	}

}
