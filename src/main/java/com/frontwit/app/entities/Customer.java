package com.frontwit.app.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

/**
 * Created by Patryk on 11.12.2016.
 */
@Entity
@Table(name = "customers")
public class Customer implements Serializable {

    @NotNull
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @NotNull
    private short active;

//    @OneToMany(fetch = )
//    @JoinColumn(name="idarea")
//    private List<Order> orders;



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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public short getActive() {
        return active;
    }

    public void setActive(short active) {
        this.active = active;
    }
}
