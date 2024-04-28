package org.example.haushaltsbuch.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Target {

  @Id
  @GeneratedValue
  private Long id;

  @NotBlank
  private String name;

  @NotNull
  private  double rate;

  @NotNull
  private char unit;

  @NotNull
  private Date startDate;

  @PastOrPresent
  private Date endDate;

  @ManyToOne
  @JsonIgnoreProperties({"targets", "transactions", "depts"})
  private Account account;
}
