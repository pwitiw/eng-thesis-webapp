package com.frontwit.app.config;

import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Created by Patryk on 08.12.2016.
 */

@Configuration
@EnableJpaRepositories("com.frontwit.app.repositories")
@EntityScan("com.frontwit.app.entities")
public class PersistenceConfiguration extends JpaRepositoryConfigExtension {

}
