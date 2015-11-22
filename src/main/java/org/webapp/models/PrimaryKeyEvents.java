package org.webapp.models;

import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * Created by Patryk on 2015-11-22.
 */
@Embeddable
public class PrimaryKeyEvents implements Serializable {

    public PrimaryKeyEvents() {

    }

    public PrimaryKeyEvents(long order_id, int stage) {
        this.order_id = order_id;
        this.stage = stage;

    }

    private long order_id;

    private int stage;

    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
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

        if (order_id != that.order_id) return false;
        return stage == that.stage;

    }

    @Override
    public int hashCode() {
        int result = (int) (order_id ^ (order_id >>> 32));
        result = 31 * result + stage;
        return result;
    }
}
