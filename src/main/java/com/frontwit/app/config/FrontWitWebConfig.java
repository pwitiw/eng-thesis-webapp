//package com.frontwit.app.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.env.Environment;
//import org.springframework.core.env.SystemEnvironmentPropertySource;
//import org.springframework.web.servlet.ViewResolver;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//import org.springframework.web.servlet.view.InternalResourceViewResolver;
//import sun.rmi.runtime.Log;
//
///**
// * Created by Patryk on 24.01.2017.
// */
//@Configuration
//@EnableWebMvc
//@ComponentScan("com.frontwit.app")
//public class FrontWitWebConfig extends WebMvcConfigurerAdapter {
//
//    //final String PREFIX = "/src/main/client/dist/";
//    final String PREFIX = "/src/main/webapp/";
//    final String SUFIX = ".html";
//
//    @Bean
//    public ViewResolver getViewResolver() {
//        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
//        resolver.setPrefix(PREFIX);
//        resolver.setSuffix(SUFIX);
//        return resolver;
//    }
//
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/css/**").addResourceLocations(PREFIX + "css/");
//        registry.addResourceHandler("/js/**").addResourceLocations(PREFIX + "app/");
//        registry.addResourceHandler("/img/**").addResourceLocations(PREFIX + "general/img");
//        registry.addResourceHandler("/html/**").addResourceLocations(PREFIX);
//    }
//
//}
//
