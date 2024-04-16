package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Transaktion {
    @Id
    @GeneratedValue
    private Long id;

    private Date date;
    private BigDecimal betrag;
    private String beschreibung;
    private boolean wiederkehrend;

    @ManyToOne
    @JsonIgnoreProperties("transaktionen")
    private Kategorie kategorie;

    @ManyToOne
    @JsonIgnoreProperties("transaktionen")
    private Konto konto;
}
