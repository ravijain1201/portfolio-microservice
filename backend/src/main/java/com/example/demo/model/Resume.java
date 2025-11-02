package com.example.demo.model;

import java.util.List;

public class Resume {
    private PersonalInfo personalInfo;
    private String profile;
    private List<Experience> experience;
    private Skills skills;
    private List<String> certifications;
    private List<String> awards;
    private Education education;
    private Contact contact;
    private String interests;

    public PersonalInfo getPersonalInfo() { return personalInfo; }
    public void setPersonalInfo(PersonalInfo personalInfo) { this.personalInfo = personalInfo; }
    public String getProfile() { return profile; }
    public void setProfile(String profile) { this.profile = profile; }
    public List<Experience> getExperience() { return experience; }
    public void setExperience(List<Experience> experience) { this.experience = experience; }
    public Skills getSkills() { return skills; }
    public void setSkills(Skills skills) { this.skills = skills; }
    public List<String> getCertifications() { return certifications; }
    public void setCertifications(List<String> certifications) { this.certifications = certifications; }
    public List<String> getAwards() { return awards; }
    public void setAwards(List<String> awards) { this.awards = awards; }
    public Education getEducation() { return education; }
    public void setEducation(Education education) { this.education = education; }
    public Contact getContact() { return contact; }
    public void setContact(Contact contact) { this.contact = contact; }
    public String getInterests() { return interests; }
    public void setInterests(String interests) { this.interests = interests; }

    public static class PersonalInfo {
        private String name;
        private String title;
        private String location;
        private String phone;
        private String email;
        private String summary;

        public PersonalInfo() {}

        public PersonalInfo(String name, String title, String location, String phone, String email, String summary) {
            this.name = name; this.title = title; this.location = location;
            this.phone = phone; this.email = email; this.summary = summary;
        }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getSummary() { return summary; }
        public void setSummary(String summary) { this.summary = summary; }
    }

    public static class Experience {
        private String position;
        private String company;
        private String location;
        private String duration;
        private List<String> responsibilities;

        public Experience() {}

        public Experience(String position, String company, String location, String duration, List<String> responsibilities) {
            this.position = position; this.company = company; this.location = location;
            this.duration = duration; this.responsibilities = responsibilities;
        }

        public String getPosition() { return position; }
        public void setPosition(String position) { this.position = position; }
        public String getCompany() { return company; }
        public void setCompany(String company) { this.company = company; }
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }
        public List<String> getResponsibilities() { return responsibilities; }
        public void setResponsibilities(List<String> responsibilities) { this.responsibilities = responsibilities; }
    }

    public static class Skills {
        private List<String> backend;
        private List<String> frontend;
        private List<String> tools;

        public Skills() {}

        public Skills(List<String> backend, List<String> frontend, List<String> tools) {
            this.backend = backend; this.frontend = frontend; this.tools = tools;
        }

        public List<String> getBackend() { return backend; }
        public void setBackend(List<String> backend) { this.backend = backend; }
        public List<String> getFrontend() { return frontend; }
        public void setFrontend(List<String> frontend) { this.frontend = frontend; }
        public List<String> getTools() { return tools; }
        public void setTools(List<String> tools) { this.tools = tools; }
    }

    public static class Education {
        private String degree;
        private String college;
        private String university;
        private String percentage;
        private String class12;
        private String class10;

        public Education() {}

        public Education(String degree, String college, String university, String percentage, String class12, String class10) {
            this.degree = degree; this.college = college; this.university = university;
            this.percentage = percentage; this.class12 = class12; this.class10 = class10;
        }

        public String getDegree() { return degree; }
        public void setDegree(String degree) { this.degree = degree; }
        public String getCollege() { return college; }
        public void setCollege(String college) { this.college = college; }
        public String getUniversity() { return university; }
        public void setUniversity(String university) { this.university = university; }
        public String getPercentage() { return percentage; }
        public void setPercentage(String percentage) { this.percentage = percentage; }
        public String getClass12() { return class12; }
        public void setClass12(String class12) { this.class12 = class12; }
        public String getClass10() { return class10; }
        public void setClass10(String class10) { this.class10 = class10; }
    }

    public static class Contact {
        private String email;
        private String phone;
        private String location;

        public Contact() {}

        public Contact(String email, String phone, String location) {
            this.email = email; this.phone = phone; this.location = location;
        }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
    }
}