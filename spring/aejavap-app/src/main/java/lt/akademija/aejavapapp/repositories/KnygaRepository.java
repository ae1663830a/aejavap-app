package lt.akademija.aejavapapp.repositories;

import lt.akademija.aejavapapp.models.Knyga;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KnygaRepository extends JpaRepository<Knyga, Long> {
}
