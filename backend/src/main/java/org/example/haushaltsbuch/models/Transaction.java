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
public class Transaction {
    @Id
    @GeneratedValue
    private Long id;

    private Date date;
    private BigDecimal amount;
    private String description;
    private boolean recurring;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private Category category;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private Account account;
}

