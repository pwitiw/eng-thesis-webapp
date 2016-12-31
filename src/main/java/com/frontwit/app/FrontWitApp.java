package com.frontwit.app;

import com.frontwit.app.config.FrontWitSecurityConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by Patryk on 08.12.2016.
 */
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan("com.frontwit.app")
public class FrontWitApp {

    public static void main(String[] args) {

        SpringApplication.run(FrontWitApp.class, args);


    }


}
