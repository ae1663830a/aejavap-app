package lt.akademija.aejavapapp.services;

import lt.akademija.aejavapapp.models.Knyga;
import lt.akademija.aejavapapp.repositories.KnygaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class KnygaService {

    @Autowired
    private KnygaRepository knygaRepository;



    public List<Knyga> getKnygos() {
        return knygaRepository.findAll();
    }

    public Knyga createKnyga(Knyga knyga) {
        knygaRepository.save(knyga);
        return knyga;
    }

    public Knyga getKnyga(@PathVariable final long id) {
        return knygaRepository.findOne(id);
    }

    public Knyga updateKnyga(@PathVariable long id, @RequestBody Knyga knyga) {
        Knyga oldKnyga = knygaRepository.findOne(id);
        if (oldKnyga == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(knyga, oldKnyga);
        return knygaRepository.save(oldKnyga);
    }

    public void deleteKnyga(@PathVariable long id) {
        knygaRepository.delete(knygaRepository.findOne(id));
    }
}