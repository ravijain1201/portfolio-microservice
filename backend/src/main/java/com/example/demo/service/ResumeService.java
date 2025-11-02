package com.example.demo.service;

import com.example.demo.model.Resume;
import com.example.demo.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResumeService {
    
    private final ResumeRepository resumeRepository;
    
    @Autowired
    public ResumeService(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }
    
    public Resume getResume() {
        return resumeRepository.getResume();
    }
}