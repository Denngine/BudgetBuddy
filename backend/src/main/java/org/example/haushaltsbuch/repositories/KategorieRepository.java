package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Kategorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KategorieRepository extends JpaRepository<Kategorie, Long> {
}
