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

-- Insert dummy data for Instructors table
INSERT INTO Instructors (name, email)
VALUES
    ('John Doe', 'john@example.com'),
    ('Jane Smith', 'jane@example.com'),
    ('Michael Johnson', 'michael@example.com'),
    ('Emily Davis', 'emily@example.com'),
    ('David Brown', 'david@example.com');

-- Insert dummy data for Leads table
INSERT INTO Leads (name, email, phone_number, linkedin_profile)
VALUES
    ('Alice Johnson', 'alice@example.com', '1234567890', 'https://www.linkedin.com/in/alice'),
    ('Bob Smith', 'bob@example.com', '9876543210', 'https://www.linkedin.com/in/bob'),
    ('Charlie Brown', 'charlie@example.com', '1112223333', 'https://www.linkedin.com/in/charlie'),
    ('Diana Taylor', 'diana@example.com', '4445556666', 'https://www.linkedin.com/in/diana'),
    ('Eva Miller', 'eva@example.com', '7778889999', 'https://www.linkedin.com/in/eva'),
    ('Frank Wilson', 'frank@example.com', '0001112222', 'https://www.linkedin.com/in/frank'),
    ('Grace Anderson', 'grace@example.com', '3334445555', 'https://www.linkedin.com/in/grace'),
    ('Henry Lee', 'henry@example.com', '6667778888', 'https://www.linkedin.com/in/henry'),
    ('Ivy Martinez', 'ivy@example.com', '9990001111', 'https://www.linkedin.com/in/ivy'),
    ('Jack Harris', 'jack@example.com', '2223334444', 'https://www.linkedin.com/in/jack');
