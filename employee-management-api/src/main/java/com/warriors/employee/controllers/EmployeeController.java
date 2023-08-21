package com.warriors.employee.controllers;

import com.warriors.employee.models.Employee;
import com.warriors.employee.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService _employeeService;

    public EmployeeController(EmployeeService employeeService) {
        _employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployees(){
        return _employeeService.getAllEmployees();
    }
    @PostMapping()
    public Employee createEmployee(@RequestBody Employee employee){
        return _employeeService.createEmployee(employee);
    }
}
