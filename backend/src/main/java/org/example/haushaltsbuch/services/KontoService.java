package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Konto;
import org.example.haushaltsbuch.repositories.KontoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class KontoService {
    private final KontoRepository kontoRepository;

    public List<Konto> findAll(){
        return kontoRepository.findAll();
    }
    public Optional<Konto> findByID(Long id){
        return kontoRepository.findById(id);
    }
    public Konto create(Konto konto){
        return kontoRepository.save(konto);
    }
    public Konto update(Konto konto){
        return kontoRepository.save(konto);
    }
    public void delete(Long id){
        kontoRepository.deleteById(id);
    }
}
