package com.examly.bike_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.bike_backend.model.Biketaxi;
import com.examly.bike_backend.service.BiketaxiService;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private BiketaxiService biketaxiService;

    // POST: Add Biketaxi
    @PostMapping("/addBiketaxi")
    public Biketaxi addBiketaxi(@RequestBody Biketaxi biketaxi) {
        return biketaxiService.addBiketaxi(biketaxi);
    }

    // GET: All Biketaxi
    @GetMapping("/getAllBiketaxi")
    public List<Biketaxi> getAllBiketaxi() {
        return biketaxiService.getAllBiketaxi();
    }
}
