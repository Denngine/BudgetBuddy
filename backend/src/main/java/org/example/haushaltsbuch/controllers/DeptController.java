package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Dept;
import org.example.haushaltsbuch.services.DeptService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("depts")
@CrossOrigin("http://localhost:4200")
public class DeptController {

  private final DeptService deptService;


  public DeptController(DeptService deptService) {
    this.deptService = deptService;
  }

  @GetMapping
  public ResponseEntity<List<Dept>> findAllDepts() {
    return ok(deptService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Dept> findDeptById(@PathVariable Long id) {
    return ResponseEntity.of(deptService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Dept> createDepts(@Validated @RequestBody Dept dept) {
    if(dept.getId() != null) {
      return badRequest().build();
    }
    return ok(deptService.create(dept));
  }

  @PutMapping
  public ResponseEntity<Dept> updateDepts(@Validated @RequestBody Dept dept) {
    if(dept.getId() == null) {
      return badRequest().build();
    }
    return ok(deptService.update(dept));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteDepts(@PathVariable Long id) {
    deptService.delete(id);
    return ok().build();
  }
}

