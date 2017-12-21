package lt.akademija.aejavapapp.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.akademija.aejavapapp.models.Knyga;
import lt.akademija.aejavapapp.services.KnygaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "knyga")
@RequestMapping
public class KnygaController {

    @Autowired
    KnygaService knygaService;



    @RequestMapping(method = RequestMethod.GET, value = "/api/knygos")
    @ApiOperation(value = "Get knygos", notes = "Returns knygas")
    public List<Knyga> knygaList() {
        return knygaService.getKnygos();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/knygos")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create knyga", notes = "Creates a new knyga")
    public Knyga createKnyga(@RequestBody final Knyga knyga) {
        return knygaService.createKnyga(knyga);
    }

    @ApiOperation(value = "Find knyga", notes = "Finds knyga by id")
    @RequestMapping(method = RequestMethod.GET, value = "/api/knygos/{id}")
    public Knyga getKnygaBiId(@PathVariable final long id) {
        return knygaService.getKnyga(id);
    }

    @ApiOperation(value = "Update knyga", notes = "Updates knyga details")
    @RequestMapping(method = RequestMethod.PUT, value = "/api/knygos/{id}")
    public Knyga updateKnyga(@PathVariable long id, @RequestBody Knyga knyga) {
        return knygaService.updateKnyga(id, knyga);
    }

    @ApiOperation(value = "Delete knyga", notes = "Deletes knyga")
    @RequestMapping(method = RequestMethod.DELETE, value = "/api/knygos/{id}")
    public void deleteKnyga(@PathVariable long id) {
        knygaService.deleteKnyga(id);
    }
}