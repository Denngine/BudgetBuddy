package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
