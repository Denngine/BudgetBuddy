package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Category;
import org.example.haushaltsbuch.repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> findAll(){
        return categoryRepository.findAll();
    }
    public Optional<Category> findByID(Long id){
        return categoryRepository.findById(id);
    }
    public Category create(Category category){
        return categoryRepository.save(category);
    }
    public Category update(Category category){
        return categoryRepository.save(category);
    }
    public void delete(Long id){
        categoryRepository.deleteById(id);
    }
}
