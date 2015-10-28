package com.springapp;

import org.webapp.dao.OrderRepository;
import org.webapp.models.OrderEntity;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:META-INF/spring-data-config.xml")
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class})
public class DataBaseTest {

    @Autowired
    OrderRepository orderRepository;

    @Test
    public void test(){
        OrderEntity order = new OrderEntity();
        order.setId(1234);
        order.setAmount(24);
        order.setStage(1);
        order.setCustomer("Przemzi");
        order.setOrderId("20TW");
        orderRepository.save(order);

        OrderEntity dbOrder = orderRepository.getOne(order.getId());
        assertNotNull(dbOrder);
    }

}