import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="assets/img/test1.png" alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars ms-1"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#aboutme">About Me</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Base Skill</a></li>
                    <li class="nav-item"><a class="nav-link" href="#working_experience">Working Experience</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact me">Contact Me</a></li>
                    {/* <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar