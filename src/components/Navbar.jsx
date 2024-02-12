import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import logo from ""
const MyNavbar = () => {
  return (
    <Navbar expand="lg"   className="bg-body-dark">
      <Container>
        <Navbar.Brand href="/">Interview Question</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/new-question" >New Question</Nav.Link>
            <Nav.Link href="/"> Question List</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-lg  navbar-dark bg-secondary ">
    //   <div className="container-fluid justify-content-between">
    //     {/* <span className="navbar-brand text-white "><img src={logo} alt="" width="100px"/></span> */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink className="nav-link active" aria-current="page" to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/new-project">
    //             New Question
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="project">
    //             Question List
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/contact">
    //          Contact
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/about">
    //          About
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default MyNavbar