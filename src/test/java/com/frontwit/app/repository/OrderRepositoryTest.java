package com.frontwit.app.repository;

import com.frontwit.app.FrontWitApp;
import com.frontwit.app.repositories.PositionRepository;
import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.assertTrue;

/**
 * Created by Patryk on 18.12.2016.
 */

//@RunWith(SpringJUnit4ClassRunner.class)
//@SpringApplicationConfiguration(classes = FrontWitApp.class)
//@ActiveProfiles("local")
//@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
//        DirtiesContextTestExecutionListener.class,
 //       TransactionalTestExecutionListener.class,
   //     DbUnitTestExecutionListener.class})
//@DatabaseSetup(value = "/dataset.xml")
//@DatabaseTearDown(type = DatabaseOperation.DELETE_ALL, value = {"/META-INF/dataset.xml"})
public class OrderRepositoryTest {
    protected static final String DATASET = "classpath:META-INF/dataset.xml";
    private static final long ID = 1;
    private static final String FIRST_ITEM = "Item 1";
    private static final String THIRD_ITEM = "Item 3";
    private static final String DESCRIPTION_FIELD = "description";

//    @Autowired
//    private OrderService orderService;
    @Autowired
    private PositionRepository positionRepository;


    @Test
    @Transactional
    public void findCheckedShouldReturnTwoItems() {
//        assertTrue(orderService.getAllOrders().size() == 3);
        //assertTrue(positionRepository.findAll().size() == 3);

    }

}
