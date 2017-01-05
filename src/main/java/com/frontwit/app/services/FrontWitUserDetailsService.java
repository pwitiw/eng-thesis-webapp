package com.frontwit.app.services;

import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

import static java.util.Arrays.asList;

/**
 * Created by Patryk on 22.12.2016.
 */
@Service
public class FrontWitUserDetailsService implements UserDetailsService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //Person person = personRepository.findOne(1L);
        Order person = orderRepository.findById(1L);
        if (person == null) {
            throw new UsernameNotFoundException("Username " + username + " not found");
        }
        return new User(username, "password", getGrantedAuthorities(username));
    }

    private Collection<? extends GrantedAuthority> getGrantedAuthorities(String
                                                                                 username) {
        Collection<? extends GrantedAuthority> authorities;
        if (username.equals("user")) {
            authorities = asList(() -> "ROLE_ADMIN", () -> "ROLE_BASIC");
        } else {
            authorities = asList(() -> "ROLE_BASIC");
        }
        return authorities;
    }

}
