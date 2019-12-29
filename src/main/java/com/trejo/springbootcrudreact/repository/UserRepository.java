package com.trejo.springbootcrudreact.repository;


import com.trejo.springbootcrudreact.model.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    User findByName(String name);
    public List<User> findByEmail(String email);
    public List<User> findByNameAndEmail(String name,String email);
}
