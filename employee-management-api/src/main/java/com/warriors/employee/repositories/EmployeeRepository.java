package com.warriors.employee.repositories;

import com.warriors.employee.entities.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
