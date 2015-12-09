package com.springapp.repositories;
/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.web.WebAppConfiguration;
import org.webapp.dao.OrderRepository;
import org.webapp.models.OrderEntity;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/mvc-dispatcher-servlet.xml",
        "classpath:jpaContext.xml"})
//@TestExecutionListeners({DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class})
public class OrderRepositoryTest {


    @Autowired
    OrderRepository orderRepository;

    @Test
    public void testAddNewOrder() {
        OrderEntity order = new OrderEntity();
        order.setOrder_id("103TW");
        order.setAmount(24);
        order.setStage(1);
        order.setColor("RAL 222");
        order.setCustomer("Customer");
        order.setLast_update(new Timestamp(new Date().getTime()));
        orderRepository.save(order);

        OrderEntity dbOrder = orderRepository.getOne(order.getId());
        assertNotNull(dbOrder);
    }

    @Test
    public void testGetOrderList() {

        List<OrderEntity> orders = new ArrayList<OrderEntity>();
        orders = orderRepository.findAll();
        assertEquals(orderRepository.findAll().size(), orders.size());
    }

}*/