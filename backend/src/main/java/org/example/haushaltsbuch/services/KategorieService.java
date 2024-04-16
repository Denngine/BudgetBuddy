package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Kategorie;
import org.example.haushaltsbuch.repositories.KategorieRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class KategorieService {
    private final KategorieRepository kategorieRepository;

    public List<Kategorie> findAll(){
        return kategorieRepository.findAll();
    }
    public Optional<Kategorie> findByID(Long id){
        return kategorieRepository.findById(id);
    }
    public Kategorie create(Kategorie kategorie){
        return kategorieRepository.save(kategorie);
    }
    public Kategorie update(Kategorie kategorie){
        return kategorieRepository.save(kategorie);
    }
    public void delete(Long id){
        kategorieRepository.deleteById(id);
    }
}
