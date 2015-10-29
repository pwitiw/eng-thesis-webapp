package com.springapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.webapp.repository.OrderRepository;
import org.webapp.models.OrderEntity;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/mvc-dispatcher-servlet.xml",
        "classpath:jpaContext.xml"})
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class})
public class DataBaseTest {


    @Autowired
    OrderRepository orderRepository;

    @Test
    public void test() {
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

    @Test
    public void getOrderListTest() {

        List<OrderEntity> orders = new ArrayList<OrderEntity>();
        orders = orderRepository.findAll();
        assertEquals(orderRepository.findAll().size(), orders.size());
    }

}