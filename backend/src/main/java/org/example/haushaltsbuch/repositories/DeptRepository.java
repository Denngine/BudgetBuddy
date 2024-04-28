package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Dept;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeptRepository extends JpaRepository<Dept, Long> {
}
