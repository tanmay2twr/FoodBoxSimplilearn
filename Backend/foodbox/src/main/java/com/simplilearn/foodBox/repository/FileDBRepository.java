package com.simplilearn.foodBox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodBox.model.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}