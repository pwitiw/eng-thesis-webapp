package com.frontwit.app.entities;

import com.frontwit.app.utils.Config;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by Patryk on 09.04.2016.
 */
@Entity
@Table(name = "tzamowienia", schema = Config.BISTOL_DB_SCHEMA)
public class TZamowieniaEntity {

    @Id
    @Column(name = "id")
    private long id;
    @Column(name = "tklienci_id")
    private int tklienci_id;

    @Column(name = "data_z")
    private Date dataZam;
    @Column(name = "numer")
    private String numer;
    @Column(name = "opis")
    private String opis;
    @Column(name = "cechy")
    private String cechy;
    @Column(name = "pozycje")
    private String pozycje;
    @Column(name = "nr_zam_kl")
    private String nr_zam_kl;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getTklienci_id() {
        return tklienci_id;
    }

    public void setTklienci_id(int tklienci_id) {
        this.tklienci_id = tklienci_id;
    }

    public Date getData_z() {
        return dataZam;
    }

    public void setData_z(Date data_z) {
        this.dataZam = data_z;
    }

    public String getNumer() {
        return numer;
    }

    public void setNumer(String numer) {
        this.numer = numer;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getCechy() {
        return cechy;
    }

    public void setCechy(String cechy) {
        this.cechy = cechy;
    }

    public String getPozycje() {
        return pozycje;
    }

    public void setPozycje(String pozycje) {
        this.pozycje = pozycje;
    }

    public String getNr_zam_kl() {
        return nr_zam_kl;
    }

    public void setNr_zam_kl(String nr_zam_kl) {
        this.nr_zam_kl = nr_zam_kl;
    }

}