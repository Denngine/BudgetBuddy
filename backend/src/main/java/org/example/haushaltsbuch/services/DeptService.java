package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Dept;
import org.example.haushaltsbuch.repositories.DeptRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DeptService {
  private final DeptRepository deptRepository;
  public List<Dept> findAll(){
    return deptRepository.findAll();
  }
  public Optional<Dept> findByID(Long id){
    return deptRepository.findById(id);
  }
  public Dept create(Dept dept){
    return deptRepository.save(dept);
  }
  public Dept update(Dept dept){
    return deptRepository.save(dept);
  }
  public void delete(Long id){
    deptRepository.deleteById(id);
  }
}
