package com.frontwit.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

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
