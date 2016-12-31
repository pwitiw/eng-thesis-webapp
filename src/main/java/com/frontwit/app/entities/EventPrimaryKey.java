package com.frontwit.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-22.
 */
@Embeddable
public class EventPrimaryKey implements Serializable {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POSITION_ID")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    Position position;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORDER_ID")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    Order order;

    //    @Column(name = "order_id")
//    private Long orderId;
//    @Column(name = "position_id")
//    private int positionId;
//
//    public EventPrimaryKey() {
//    }
//
//    public EventPrimaryKey(long order_id, int positionId) {
//        this.orderId = order_id;
//        this.positionId = positionId;
//    }
//
//    public Long getOrderId() {
//        return orderId;
//    }
//
//    public void setOrderId(Long orderId) {
//        this.orderId = orderId;
//    }
//
//    public int getPositionId() {
//        return positionId;
//    }
//
//    public void setPositionId(int positionId) {
//        this.positionId = positionId;
//    }
//


    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EventPrimaryKey that = (EventPrimaryKey) o;

        if (position != null ? !position.equals(that.position) : that.position != null) return false;
        return order != null ? order.equals(that.order) : that.order == null;

    }

    @Override
    public int hashCode() {
        int result = position != null ? position.hashCode() : 0;
        result = 31 * result + (order != null ? order.hashCode() : 0);
        return result;
    }
}
