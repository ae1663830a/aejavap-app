package lt.akademija.aejavapapp.controllers;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.aejavapapp.models.Institucija;
import lt.akademija.aejavapapp.services.InstitucijaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "institucija")
@RequestMapping
public class InstitucijaController {

    @Autowired
    InstitucijaService institucijaService;


    @RequestMapping(method = RequestMethod.GET, value = "/api/institucijos")
    @ApiOperation(value = "Get institucijas", notes = "Returns institucijas")
    public List<Institucija> institucijuSarasas() {
        return institucijaService.getInstitucijos();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/institucijos")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create institucija", notes = "Creates a new institucija")
    public Institucija sukurtiInstitucija(@ApiParam(value = "Institucijos informacija") @RequestBody final Institucija institucija) {
        return institucijaService.createInstitucija(institucija);
    }

    @ApiOperation(value = "Find institucija", notes = "Finds institucija by id")
    @RequestMapping(method = RequestMethod.GET, value = "/api/institucijos/{id}")
    public Institucija gautiInstitucijaPagalId(@PathVariable final long id) {
        return institucijaService.getInstitucija(id);
    }

    @ApiOperation(value = "Update institucija", notes = "Updates institucij details")
    @RequestMapping(method = RequestMethod.PUT, value = "/api/institucijos/{id}")
    public Institucija redaguotiInstitucija(@PathVariable long id, @RequestBody Institucija institucija) {
        return institucijaService.updateInstitucija(id, institucija);
    }

    @ApiOperation(value = "Delete institucija", notes = "Deletes institucija")
    @RequestMapping(method = RequestMethod.DELETE, value = "/api/institucijos/{id}")
    public void pasalintiInstitucija(@PathVariable long id) {
        institucijaService.deleteInstitucija(id);
    }
}