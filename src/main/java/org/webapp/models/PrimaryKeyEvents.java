package org.webapp.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-22.
 */
@Embeddable
public class PrimaryKeyEvents implements Serializable {

    @Column(name="order_id")
    private long orderId;

    private int stage;

    public PrimaryKeyEvents() {

    }

    public PrimaryKeyEvents(long order_id, int stage) {
        this.orderId = order_id;
        this.stage = stage;

    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long order_id) {
        this.orderId = order_id;
    }

    public int getStage() {
        return stage;
    }

    public void setStage(int stage) {
        this.stage = stage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PrimaryKeyEvents that = (PrimaryKeyEvents) o;

        if (orderId != that.orderId) return false;
        return stage == that.stage;

    }

    @Override
    public int hashCode() {
        int result = (int) (orderId ^ (orderId >>> 32));
        result = 31 * result + stage;
        return result;
    }
}
