package com.ecoplan.myapp.repository;

import com.ecoplan.myapp.domain.TipoProyecto;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TipoProyecto entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipoProyectoRepository extends JpaRepository<TipoProyecto, Long> {}
