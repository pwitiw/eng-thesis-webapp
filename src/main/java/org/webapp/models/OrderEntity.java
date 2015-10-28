package org.webapp.models;


import org.springframework.context.annotation.Primary;

import javax.persistence.*;

/**
 * Created by Patryk on 2015-10-28.
 */
@Entity(name = "orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String order_id;

    private String customer;

    private int amount;

    private int stage;

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return this.id;
    }

    public String getOrderId() {
        return order_id;
    }

    public void setOrderId(String order_id) {
        this.order_id = order_id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getAmount() {

        return this.amount;
    }

    public int getStage() {
        return stage;
    }

    public void setStage(int stage) {
        this.stage = stage;
    }

}
