package com.warriors.employee.services;

import com.warriors.employee.entities.EmployeeEntity;
import com.warriors.employee.models.Employee;
import com.warriors.employee.repositories.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    private EmployeeRepository _employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        _employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);
        _employeeRepository.save(employeeEntity);
        return employee;
    }
}
