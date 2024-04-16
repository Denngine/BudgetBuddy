package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Transaktion;
import org.example.haushaltsbuch.repositories.TransaktionRepository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TransaktionService {
    private final TransaktionRepository transaktionRepository;

    public List<Transaktion> findAll(){
        return transaktionRepository.findAll();
    }
    public Optional<Transaktion> findByID(Long id){
        return transaktionRepository.findById(id);
    }
    public Transaktion create(Transaktion transaktion){
        return transaktionRepository.save(transaktion);
    }
    public Transaktion update(Transaktion transaktion){
        return transaktionRepository.save(transaktion);
    }
    public void delete(Long id){
        transaktionRepository.deleteById(id);
    }
}

