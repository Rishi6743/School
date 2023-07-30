import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            
            <NavDropdown title="About Us" id="about-us-dropdown">
              <NavDropdown.Item as={Link} to="/about-school">
                About School
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/school-statistics">
                School Statistics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/chairmans-message">
                Chairman's Message
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vision-and-mission">
                Vision and Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lmc-members">
                LMC Members
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Administration" id="admin-dropdown">
              <NavDropdown.Item as={Link} to="/faculty">
                Faculty
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/school-management">
                School Management
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/students-council">
                Student's Council
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/student-strength-details">
                Student Strength Details
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Mandatory Public Disclosure"
              id="disclosure-dropdown"
            >
              <NavDropdown.Item as={Link} to="/general-information">
                General Information
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/documents-information">
                Documents Information
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item as={Link} to="/fee-structure">
                Fee Structure
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/academic-calendar">
                Calendar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/weekly-test-schedules">
                Weekly Test Schedules
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cca-planner">
                CCA Planner
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/term-wise-syllabus">
                Term Wise Syllabus
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transfer-certificate">
                Transfer Certificate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/examination-system">
                Examination System
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ncrt-books-list">
                NCRT BOOKS LIST
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Result" id="about-us-dropdown">
              <NavDropdown.Item as={Link} to="/class-x">
                Class-X Result
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/class-xii">
                Class-XII Result
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Achievements" id="achievements-dropdown">
              <NavDropdown.Item as={Link} to="/sports-achievements">
                Sports Achievement
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/educational-achievements">
                Educational Achievement
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/academic">
              Academic
            </Nav.Link>
            <Nav.Link as={Link} to="/activities">
              Activities
            </Nav.Link>
            <Nav.Link as={Link} to="/circulars">
              Circulars
            </Nav.Link>
            <Nav.Link as={Link} to="/infrastructure">
              Infrastructure
            </Nav.Link>
            <NavDropdown title="Rules & Regulations" id="rules-dropdown">
              <NavDropdown.Item as={Link} to="/school-timing-visiting-hours">
                School Timing Visiting Hours
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/school-uniform">
                SCHOOL UNIFORM
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/promotion-rule">
                Promotion Rule
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/general-guidelines">
                General Guidelines
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Help Desk" id="help-desk-dropdown">
              <NavDropdown.Item as={Link} to="/ptm">
                P.T.M
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact-us">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feedback">
                Feedback
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
