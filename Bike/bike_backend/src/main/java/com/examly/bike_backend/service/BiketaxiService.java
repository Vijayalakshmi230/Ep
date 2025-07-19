package com.examly.bike_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.bike_backend.model.Biketaxi;
import com.examly.bike_backend.repository.BiketaxiRepo;

@Service
public class BiketaxiService {

    @Autowired
    private BiketaxiRepo biketaxiRepo;

    // Add new Biketaxi
    public Biketaxi addBiketaxi(Biketaxi biketaxi) {
        return biketaxiRepo.save(biketaxi);
    }

    // Get all Biketaxi entries
    public List<Biketaxi> getAllBiketaxi() {
        return biketaxiRepo.findAll();
    }

}
