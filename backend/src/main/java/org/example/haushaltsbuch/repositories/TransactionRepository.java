package org.example.haushaltsbuch.repositories;

import org.example.haushaltsbuch.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
