package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
@Entity
@Table(name = "tzamowienia", schema = Config.BISTOL_DB_SCHEMA)
public class TZamowieniaEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @Column(name = "POSITION_ID")
    private long positionId;

    private String color;

    @Range(min = 0, max = 1)
    private short express;

    private Date date;

    @Column(name = "LAST_UPDATE")
    private Date lastUpdate;

    @Column(name = "parent_id")
    private Long parentId;

    @Range(min = 0, max = 1)
    private short active;

    @Column(name = "CUSTOMER_ID")
    private long customerId;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TElementyEntity> components;

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

    public long getPositionId() {
        return positionId;
    }

    public void setPositionId(long positionId) {
        this.positionId = positionId;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public short getExpress() {
        return express;
    }

    public void setExpress(short express) {
        this.express = express;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public short getActive() {
        return active;
    }

    public void setActive(short active) {
        this.active = active;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public List<TElementyEntity> getComponents() {
        return components;
    }

    public void setComponents(List<TElementyEntity> components) {
        this.components = components;
    }

    //    @Id
//    @Column(name = "id")
//    private int id;
//    @Column(name = "tklienci_id")
//    private int tklienci_id;
//
//    @Column(name = "data_z")
//    private Date dataZam;
//    @Column(name = "numer")
//    private String numer;
//    @Column(name = "opis")
//    private String opis;
//    @Column(name = "cechy")
//    private String cechy;
//    @Column(name = "pozycje")
//    private String pozycje;
//    @Column(name = "nr_zam_kl")
//    private String nr_zam_kl;
//
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public int getTklienci_id() {
//        return tklienci_id;
//    }
//
//    public void setTklienci_id(int tklienci_id) {
//        this.tklienci_id = tklienci_id;
//    }
//
//    public Date getData_z() {
//        return dataZam;
//    }
//
//    public void setData_z(Date data_z) {
//        this.dataZam = data_z;
//    }
//
//    public String getNumer() {
//        return numer;
//    }
//
//    public void setNumer(String numer) {
//        this.numer = numer;
//    }
//
//    public String getOpis() {
//        return opis;
//    }
//
//    public void setOpis(String opis) {
//        this.opis = opis;
//    }
//
//    public String getCechy() {
//        return cechy;
//    }
//
//    public void setCechy(String cechy) {
//        this.cechy = cechy;
//    }
//
//    public String getPozycje() {
//        return pozycje;
//    }
//
//    public void setPozycje(String pozycje) {
//        this.pozycje = pozycje;
//    }
//
//    public String getNr_zam_kl() {
//        return nr_zam_kl;
//    }
//
//    public void setNr_zam_kl(String nr_zam_kl) {
//        this.nr_zam_kl = nr_zam_kl;
//    }

}


