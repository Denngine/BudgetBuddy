package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Konto {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private BigDecimal kontostand;

    @OneToMany(mappedBy = "konto")
    @JsonIgnoreProperties({"konto", "kategorie"})
    private List<Transaktion> transaktionen;
}
