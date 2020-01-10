package com.trejo.springbootcrudreact.service;

import com.trejo.springbootcrudreact.model.User;

import java.util.List;

public interface UserService {

    public Boolean saveUser(User user);
    User findById(long id);
    User findByName(String name);
    void updateUser(User user);
    void deleteUserById(long id);
    List<User> findAllUsers();
    void deleteAllUsers();
    public boolean isUserExist(User user);

}
