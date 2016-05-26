package org.webapp.models;

import org.webapp.utils.Config;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by Patryk on 09.04.2016.
 */
@Entity
@Table(name = "tzamowienia", schema = Config.bistolDbSchema)
public class TZamowieniaEntity {

    @Id
    private int id;

    private int tklienci_id;

    @Column(name = "data_z")
    private Date dataZam;

    private String numer;

    private String opis;

    private String cechy;

    private String pozycje;

    private String nr_zam_kl;

    private String tzamowienia;

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getTzamowienia() {
        return tzamowienia;
    }

    public void setTzamowienia(String tzamowienia) {
        this.tzamowienia = tzamowienia;
    }
}


