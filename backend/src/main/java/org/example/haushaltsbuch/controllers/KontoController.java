package org.example.haushaltsbuch.controllers;

import org.example.haushaltsbuch.models.Konto;
import org.example.haushaltsbuch.services.KontoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("konto")
public class KontoController {

    private KontoService kontoService;

    public KontoController(KontoService kontoService) {
      this.kontoService = kontoService;
    }

    @GetMapping
    public ResponseEntity<List<Konto>> findAllKonto() {
      return ok(kontoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Konto> findKontoById(@PathVariable Long id) {
      return ResponseEntity.of(kontoService.findByID(id));
    }

    @PostMapping
    public ResponseEntity<Konto> createKonto(@RequestBody Konto konto) {
      if(konto.getId() != null) {
        return badRequest().build();
      }
      return ok(kontoService.create(konto));
    }

    @PutMapping
    public ResponseEntity<Konto> updateKonto(@RequestBody Konto konto) {
      if(konto.getId() == null) {
        return badRequest().build();
      }
      return ok(kontoService.update(konto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteKonto(@PathVariable Long id) {
      kontoService.delete(id);
      return ok().build();
    }
  }

