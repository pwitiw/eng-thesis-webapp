package org.webapp.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-22.
 */
@Embeddable
public class PrimaryKeyEvents implements Serializable {

    @Column(name = "order_id")
    private Long orderId;
    @Column(name = "position_id")
    private Long positionId;

    public PrimaryKeyEvents() {
    }

    public PrimaryKeyEvents(long order_id, long positionId) {
        this.orderId = order_id;
        this.positionId = positionId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getPositionId() {
        return positionId;
    }

    public void setPositionId(Long positionId) {
        this.positionId = positionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PrimaryKeyEvents that = (PrimaryKeyEvents) o;

        if (orderId != that.orderId) return false;
        return positionId == that.positionId;
    }

    @Override
    public int hashCode() {
        int result = (int) (orderId ^ (orderId >>> 32));
        result = 31 * result + positionId.intValue();
        return result;
    }
}
