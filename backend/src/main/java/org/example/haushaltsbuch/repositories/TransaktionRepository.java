package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Transaktion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransaktionRepository extends JpaRepository<Transaktion, Long> {
}
