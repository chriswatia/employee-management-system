package com.warriors.employee.services;

import com.warriors.employee.models.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee createEmployee(Employee employee);
}
