package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Patryk on 12.01.2017.
 */

@Entity
@Table(name = "telementy", schema = Config.BISTOL_DB_SCHEMA)
public class TElementyEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "ORDER_ID", updatable = false)
    private TZamowieniaEntity order;

    private int width;
    private int height;
    private int amount;
    private int missing;
    private String comment;

    public TElementyEntity(String csv[]) {
    }

    public TElementyEntity() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public TZamowieniaEntity getOrder() {
        return order;
    }

    public void setOrder(TZamowieniaEntity order) {
        this.order = order;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getMissing() {
        return missing;
    }

    public void setMissing(int missing) {
        this.missing = missing;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TElementyEntity component = (TElementyEntity) o;

        if (id != component.id) return false;
        if (width != component.width) return false;
        if (height != component.height) return false;
        if (amount != component.amount) return false;
        if (missing != component.missing) return false;
        return comment != null ? comment.equals(component.comment) : component.comment == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + width;
        result = 31 * result + height;
        result = 31 * result + amount;
        result = 31 * result + missing;
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        return result;
    }

}
