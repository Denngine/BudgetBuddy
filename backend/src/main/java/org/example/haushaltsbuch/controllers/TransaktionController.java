package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Transaktion;
import org.example.haushaltsbuch.services.TransaktionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("transaktionen")
public class TransaktionController {

  private final TransaktionService transaktionService;

  public TransaktionController(TransaktionService transaktionService) {
    this.transaktionService = transaktionService;
  }

  @GetMapping
  public ResponseEntity<List<Transaktion>> findAllTransaktion() {
    return ok(transaktionService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Transaktion> findTransaktionById(@PathVariable Long id) {
    return ResponseEntity.of(transaktionService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Transaktion> createTransaktion(@RequestBody Transaktion transaktion) {
    if(transaktion.getId() != null) {
      return badRequest().build();
    }
    return ok(transaktionService.create(transaktion));
  }

  @PutMapping
  public ResponseEntity<Transaktion> updateTransaktion(@RequestBody Transaktion transaktion) {
    if(transaktion.getId() == null) {
      return badRequest().build();
    }
    return ok(transaktionService.update(transaktion));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteTransaktion(@PathVariable Long id) {
    transaktionService.delete(id);
    return ok().build();
  }
}

