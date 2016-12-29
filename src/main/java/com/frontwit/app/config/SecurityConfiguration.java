//package com.frontwit.app.config;
//
//import com.frontwit.app.services.FrontWitUserDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//
//
///**
// * Created by Patryk on 08.12.2016.
// */
//@Configuration
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    private FrontWitUserDetailsService frontWitUserDetailsService;
//
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//                .inMemoryAuthentication()
//                .withUser("user")  // #1
//                .password("password")
//                .roles("USER")
//                .and()
//                .withUser("admin") // #2
//                .password("password")
//                .roles("ADMIN", "USER");
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeRequests()
//                .antMatchers(HttpMethod.GET, "/workers/**").hasAuthority("ROLE_ADMIN")
//                .antMatchers(HttpMethod.PUT, "/orders/**").hasAnyRole("ADMIN")
//                .antMatchers(HttpMethod.GET, "/customers/**").authenticated()
//                .anyRequest().permitAll()
//                .and()
//                .httpBasic().and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//    }
//
//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web
//                .ignoring()
//                .antMatchers("/resources/**"); // #3
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(frontWitUserDetailsService);
//    }
//
//}