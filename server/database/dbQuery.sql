-- Create Instructors table
CREATE TABLE Instructors (
    instructor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

-- Create Courses table
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    instructor_id INT,
    name VARCHAR(255),
    max_seats INT,
    start_date DATE,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

-- Create Leads table
CREATE TABLE Leads (
    lead_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(15),
    linkedin_profile VARCHAR(255),
);

-- Create Comments table
CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id INT,
    instructor_id INT,
    comment TEXT,
    FOREIGN KEY (lead_id) REFERENCES Leads(lead_id),
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

-- Create Application table
CREATE TABLE Application (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id INT,
    course_id INT,
    status ENUM( 'Accept', 'Reject', 'Waitlist'),
    FOREIGN KEY (lead_id) REFERENCES Leads(lead_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
