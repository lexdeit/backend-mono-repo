package com.apirestjava.crud.controllers;

import com.apirestjava.crud.entity.User;
import com.apirestjava.crud.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User>getUsers() {
        return userService.getUsers();
    }

    @GetMapping("{userId}")
    public Optional<User> getUserById(@PathVariable("userId") Long userId){
        return userService.getUserById(userId);
    }

    @PostMapping
    public void createUser(@RequestBody User user){
        userService.createUser(user);
    }

    @PutMapping("/{userId}")
    public void updateUserById(@PathVariable("userId") Long userId, @RequestBody User updatedUser) {
        userService.updateUserById(userId, updatedUser);
    }

    @DeleteMapping("{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        userService.deleteUserById(userId);
    }


}
