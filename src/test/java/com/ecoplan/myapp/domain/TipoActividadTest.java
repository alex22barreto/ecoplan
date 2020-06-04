package com.ecoplan.myapp.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.ecoplan.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

public class TipoActividadTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TipoActividad.class);
        TipoActividad tipoActividad1 = new TipoActividad();
        tipoActividad1.setId(1L);
        TipoActividad tipoActividad2 = new TipoActividad();
        tipoActividad2.setId(tipoActividad1.getId());
        assertThat(tipoActividad1).isEqualTo(tipoActividad2);
        tipoActividad2.setId(2L);
        assertThat(tipoActividad1).isNotEqualTo(tipoActividad2);
        tipoActividad1.setId(null);
        assertThat(tipoActividad1).isNotEqualTo(tipoActividad2);
    }
}
