package com.example.demo;

import com.example.demo.model.Resume;
import com.example.demo.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://frontend:3000"})
public class HelloController {
    
    private final ResumeService resumeService;
    
    @Autowired
    public HelloController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/api/resume")
    public Resume getResume() {
        return resumeService.getResume();
    }
}