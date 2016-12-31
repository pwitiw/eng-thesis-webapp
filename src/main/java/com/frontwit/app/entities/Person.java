package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Patryk on 22.12.2016.
 */
@Entity
@Table(name = "persons", schema = Config.frontWitDbSchema)
public class Person {

    @Id
    @Column(name = "id")
    private long id;

}
