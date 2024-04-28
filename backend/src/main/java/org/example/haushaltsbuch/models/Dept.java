package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Dept {

 @Id
 @GeneratedValue
 private Long id;

 @NotNull
 BigDecimal totalDepts;

 @NotNull
 BigDecimal alreadyPaid;

 @NotNull
 String beneficiary;

 @ManyToOne
 @JsonIgnoreProperties("depts")
 Account account;

 @NotNull
 Date deadline;

}
