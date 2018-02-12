package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Patryk on 01.04.2017.
 */
@Entity
@Table(name = "tdictionary", schema = Config.BISTOL_DB_SCHEMA)
public class TDictionaryEntity {

    @Id
    long id;
    String name;
    String dsc;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDsc() {
        return dsc;
    }

    public void setDsc(String dsc) {
        this.dsc = dsc;
    }
}
