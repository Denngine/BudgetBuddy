package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Kategorie;
import org.example.haushaltsbuch.services.KategorieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("category")
@CrossOrigin("http://localhost:4200")
public class KategorieController {

  private final KategorieService kategorieService;

  public KategorieController(KategorieService kategorieService) {
    this.kategorieService = kategorieService;
  }

  @GetMapping
  public ResponseEntity<List<Kategorie>> findAllKategorie() {
    return ok(kategorieService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Kategorie> findKategorieById(@PathVariable Long id) {
    return ResponseEntity.of(kategorieService.findByID(id));
  }

  @PostMapping
  public ResponseEntity<Kategorie> createKategorie(@RequestBody Kategorie kategorie) {
    if(kategorie.getId() != null) {
      return badRequest().build();
    }
    return ok(kategorieService.create(kategorie));
  }

  @PutMapping
  public ResponseEntity<Kategorie> updateKategorie(@RequestBody Kategorie kategorie) {
    if(kategorie.getId() == null) {
      return badRequest().build();
    }
    return ok(kategorieService.update(kategorie));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteKategorie(@PathVariable Long id) {
    kategorieService.delete(id);
    return ok().build();
  }
}

