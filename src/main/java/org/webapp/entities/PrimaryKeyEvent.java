package org.webapp.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-22.
 */
@Embeddable
public class PrimaryKeyEvent implements Serializable {

    @Column(name = "order_id")
    private Long orderId;
    @Column(name = "position_id")
    private int positionId;

    public PrimaryKeyEvent() {
    }

    public PrimaryKeyEvent(long order_id, int positionId) {
        this.orderId = order_id;
        this.positionId = positionId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PrimaryKeyEvent that = (PrimaryKeyEvent) o;

        if (orderId != that.orderId) return false;
        return positionId == that.positionId;
    }

    @Override
    public int hashCode() {
        int result = (int) (orderId ^ (orderId >>> 32));
        result = 31 * result + positionId;
        return result;
    }
}
