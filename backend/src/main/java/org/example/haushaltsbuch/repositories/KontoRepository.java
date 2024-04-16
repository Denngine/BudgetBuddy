package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Konto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KontoRepository extends JpaRepository<Konto, Long> {
}
