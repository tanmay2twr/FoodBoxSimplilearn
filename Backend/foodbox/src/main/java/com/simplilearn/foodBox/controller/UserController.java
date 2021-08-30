package com.simplilearn.foodBox.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.foodBox.model.User;
import com.simplilearn.foodBox.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome to Foodbox";
	}

	@PostMapping("/registerUser")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		try {
			String tempEmailID = user.getEmail();
			if (tempEmailID != null && !"".equals(tempEmailID)) {
				User value = userService.fetchUserByUserID(tempEmailID);
				if (value != null) {
					return new ResponseEntity<>("Email with email ID " + tempEmailID + " already exists",
							HttpStatus.BAD_REQUEST);
				}
			}
			userService.userSave(user);
			return new ResponseEntity<>("User Registration Susccessfull", HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

		}

	}

	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody User user) {
		String tempUserId = user.getEmail();
		String tempPass = user.getPassword();
		User usertObj = null;
		try {
			if (tempUserId != null && tempPass != null) {
				usertObj = userService.fetchUserByUserID(tempUserId);
			}
			if (usertObj == null) {
				return new ResponseEntity<>("Email with email ID " + tempUserId + " does not exists",
						HttpStatus.BAD_REQUEST);
			}
			if (usertObj.getPassword().equals(tempPass)) {
				return new ResponseEntity<>(usertObj.getRole(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Invalid Credentials", HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
}
