-- Create a new database
CREATE DATABASE school;

-- Switch to the new database
USE school;

-- Create the Class table
CREATE TABLE Class (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  begins DATE,
  ends DATE,
  student_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Student(id)
);

-- Create the Student table
CREATE TABLE Student (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50),
  phone VARCHAR(20),
  class_id INT NOT NULL,
  teacher_id INT NOT NULL,
  FOREIGN KEY (class_id) REFERENCES Class(id)
  FOREIGN KEY (teacher_id) REFERENCES Teacher(id)
);

-- Create the Teacher table
CREATE TABLE Teacher (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50),
  phone VARCHAR(20),
  student_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Student(id)
);

-- Create an index on the name column of the student table
CREATE INDEX idx_student_name ON Student (name);


--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';
