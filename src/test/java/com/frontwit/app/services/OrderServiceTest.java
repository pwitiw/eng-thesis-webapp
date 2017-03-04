package com.frontwit.app.services;


import com.frontwit.app.FrontWitApp;
import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Order;
import com.frontwit.app.exceptions.BadOperationOnResourcesException;
import com.frontwit.app.exceptions.ResourcesNotFoundException;
import com.frontwit.app.repositories.daoImpl.OrderRepositoryImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;

import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.*;

/**
 * Created by Patryk on 21.02.2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = FrontWitApp.class)
public class OrderServiceTest {

    OrderService orderService;
    OrderRepositoryImpl orderRepositoryMock;
    EventService eventServiceMock;

    //objects
    Order order;

    @Before
    public void setUp() {

        //initialize
        order = new Order(1L);
        orderRepositoryMock = mock(OrderRepositoryImpl.class);
        eventServiceMock = mock(EventService.class);
        orderService = new OrderService(orderRepositoryMock, eventServiceMock);

        //mocks
        when(orderRepositoryMock.getOrderForId(1L)).thenReturn(order);
        when(eventServiceMock.getEventsForOrderId(2L)).thenReturn(new ArrayList<Event>() {{
            add(new Event());
        }});
        doNothing().when(orderRepositoryMock).deleteOrder(order);
    }

    @Test
    public void testChangeStatus() {
        orderService.changeStatusForId(1L);
        assertTrue("Status changed from inactive to active.", order.getActive() == 1);
        orderService.changeStatusForId(1L);
        assertTrue("Status changed from inactive to active.", order.getActive() == 0);
    }

    @Test(expected = BadOperationOnResourcesException.class)
    public void testDeleteOrder() throws BadOperationOnResourcesException {
        orderService.deleteOrder(2L);
    }

    @Test(expected = ResourcesNotFoundException.class)
    public void testGetOrderForId() throws ResourcesNotFoundException {
        orderService.getOrderForId(2L);
    }


}
