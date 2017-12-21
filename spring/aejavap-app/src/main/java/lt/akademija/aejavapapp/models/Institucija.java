package lt.akademija.aejavapapp.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Institucija")
public class Institucija implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String pavadinimas;
    private String miestas;
    private String nuotrauka;
    private String kategorija;

    public Institucija() {
    }

    public Institucija(String pavadinimas, String miestas, String nuotrauka, String kategorija) {
        this.pavadinimas = pavadinimas;
        this.miestas = miestas;
        this.nuotrauka = nuotrauka;
        this.kategorija = kategorija;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public String getMiestas() {
        return miestas;
    }

    public void setMiestas(String miestas) {
        this.miestas = miestas;
    }

    public String getNuotrauka() {
        return nuotrauka;
    }

    public void setNuotrauka(String nuotrauka) {
        this.nuotrauka = nuotrauka;
    }

    public String getKategorija() {
        return kategorija;
    }

    public void setKategorija(String kategorija) {
        this.kategorija = kategorija;
    }
}
