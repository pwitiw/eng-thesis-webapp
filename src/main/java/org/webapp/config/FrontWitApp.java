package org.webapp.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by Patryk on 08.12.2016.
 */
@SpringBootApplication
@ComponentScan("org.webapp")
@EnableJpaRepositories("org.webapp.dao")
@EntityScan("org.webapp.models")
public class FrontWitApp {

    public static void main(String[] args) {

        SpringApplication.run(FrontWitApp.class, args);
    }


}
