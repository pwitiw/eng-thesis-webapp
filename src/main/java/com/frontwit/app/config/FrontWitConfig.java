package com.frontwit.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Created by Patryk on 08.12.2016.
 */
@Configuration
@EnableJpaRepositories(basePackages = {"com.frontwit.app"})
@EnableTransactionManagement
public class FrontWitConfig {

}
