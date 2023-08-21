package com.warriors.employee.models;

import lombok.Data;

@Data
public class Employee {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}
