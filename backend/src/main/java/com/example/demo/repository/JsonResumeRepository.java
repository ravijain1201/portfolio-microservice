package com.example.demo.repository;

import com.example.demo.model.Resume;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import java.io.IOException;

@Repository
public class JsonResumeRepository implements ResumeRepository {
    
    private final ObjectMapper objectMapper = new ObjectMapper();
    
    @Override
    public Resume getResume() {
        try {
            ClassPathResource resource = new ClassPathResource("data/resume.json");
            return objectMapper.readValue(resource.getInputStream(), Resume.class);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load resume data", e);
        }
    }
}