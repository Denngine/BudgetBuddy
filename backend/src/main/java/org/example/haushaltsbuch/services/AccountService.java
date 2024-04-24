package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Account;
import org.example.haushaltsbuch.repositories.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public List<Account> findAll(){
        return accountRepository.findAll();
    }
    public Optional<Account> findByID(Long id){
        return accountRepository.findById(id);
    }
    public Account create(Account account){
        return accountRepository.save(account);
    }
    public Account update(Account account){
        return accountRepository.save(account);
    }
    public void delete(Long id){
        accountRepository.deleteById(id);
    }
}
