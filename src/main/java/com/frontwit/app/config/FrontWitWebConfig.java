package com.frontwit.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.SystemEnvironmentPropertySource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import sun.rmi.runtime.Log;

/**
 * Created by Patryk on 24.01.2017.
 */
@Configuration
@EnableWebMvc
public class FrontWitWebConfig extends WebMvcConfigurerAdapter {



        @Autowired
        private Environment environment;

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            String frontend;

            if (environment.acceptsProfiles("development")) {
                String workingDirectory = System.getProperty("user.dir");

            /*
             * if we are running via gradle bootRun then the working directory is
             * suffixed with /backend and thus won't find resources correctly
             */
                if (workingDirectory.endsWith("/app")) {
                    workingDirectory = workingDirectory.substring(0, workingDirectory.lastIndexOf("/app"));
                }

            /* find front-end build files from the local file system */
                frontend = "file:///" + workingDirectory + "/src/main/client/.tmp/";
                frontend = "classpath:/client/.tmp/";
            } else {
            /* find front-end build files from the classpath */
                frontend = "classpath:/";
            }

            registry.addResourceHandler("/**").addResourceLocations(frontend, "classpath:/static/");
            System.out.println(registry.toString());
        }
    }

