package lt.akademija.aejavapapp.services;

import lt.akademija.aejavapapp.models.Institucija;
import lt.akademija.aejavapapp.repositories.InstitucijaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class InstitucijaService {

    @Autowired
    private InstitucijaRepository institucijaRepository;

    public List<Institucija> getInstitucijos() {
        return institucijaRepository.findAll();
    }

    public Institucija createInstitucija(Institucija institucija) {
        institucijaRepository.save(institucija);
        return institucija;
    }

    public Institucija getInstitucija(@PathVariable final long id) {
        return institucijaRepository.findOne(id);
    }

    public Institucija updateInstitucija(@PathVariable long id, @RequestBody Institucija institucija) {
        Institucija oldInstitucija = institucijaRepository.findOne(id);
        if (oldInstitucija == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(institucija, oldInstitucija);
        return institucijaRepository.save(oldInstitucija);
    }

    public void deleteInstitucija(@PathVariable long id) {
        institucijaRepository.delete(institucijaRepository.findOne(id));
    }
}