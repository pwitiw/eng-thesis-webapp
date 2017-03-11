package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Patryk on 09.04.2016.
 */
@Entity
@Table(name = "tklienci", schema = Config.BISTOL_DB_SCHEMA)
public class TKlienciEntity {

    @Id
    private int id;

    private String nazwa;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }
}