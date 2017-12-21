package lt.akademija.aejavapapp.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "knyga")
public class Knyga implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "KNYGOS_id")
    private long id;
    @Column(nullable = false)
    private String pavadinimas;
    @Column(nullable = false)
    private double autorius;
    @Column
    private String puslapiuSkaicius;
    @Column
    private String paveiksliukas;
    @Column
    private String kiekis;

    public Knyga() {
    }

    public Knyga(String pavadinimas, double autorius, String puslapiuSkaicius, String paveiksliukas, String kiekis) {
        this.pavadinimas = pavadinimas;
        this.autorius = autorius;
        this.puslapiuSkaicius = puslapiuSkaicius;
        this.paveiksliukas = paveiksliukas;
        this.kiekis = kiekis;
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

    public double getAutorius() {
        return autorius;
    }

    public void setAutorius(double autorius) {
        this.autorius = autorius;
    }

    public String getPuslapiuSkaicius() {
        return puslapiuSkaicius;
    }

    public void setPuslapiuSkaicius(String puslapiuSkaicius) {
        this.puslapiuSkaicius = puslapiuSkaicius;
    }

    public String getPaveiksliukas() {
        return paveiksliukas;
    }

    public void setPaveiksliukas(String paveiksliukas) {
        this.paveiksliukas = paveiksliukas;
    }

    public String getKiekis() {
        return kiekis;
    }

    public void setKiekis(String kiekis) {
        this.kiekis = kiekis;
    }
}