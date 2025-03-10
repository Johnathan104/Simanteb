import React from 'react'
import {useEffect} from 'react'
import {useLocation, Link,} from 'react-router-dom'

function Nav() {
  let location = useLocation();
    console.log(location);
  useEffect(() => {
    const bimLink = document.getElementById("bim");
    const smanLink = document.getElementById("sman");
    const homeLink = document.getElementById("home");
    const manualLink = document.getElementById("manual");
    switch (location.pathname) {
      case "/Bim":
        if (bimLink) {
          bimLink.className = "nav-link active primary-text";
        }
        if (smanLink) {
          smanLink.className = "nav-link primary-text";
        }
        if (homeLink) {
          homeLink.className = "nav-link primary-text";
        }
        if (manualLink) {
          manualLink.className = "nav-link primary-text";
        }
        break; // Important: Add a break statement here
    
      case "/Sman96":
        if (bimLink) {
          bimLink.className = "nav-link primary-text";
        }
        if (smanLink) {
          smanLink.className = "nav-link active primary-text";
        }
        if (homeLink) {
          homeLink.className = "nav-link primary-text";
        }
        if (manualLink) {
          manualLink.className = "nav-link primary-text";
        }
        break;
    
      case "/": // Assuming "/" is for the home link
        if (bimLink) {
          bimLink.className = "nav-link primary-text";
        }
        if (smanLink) {
          smanLink.className = "nav-link primary-text";
        }
        if (homeLink) {
          homeLink.className = "nav-link active primary-text";
        }
        if (manualLink) {
          manualLink.className = "nav-link primary-text";
        }
        break;
    
      case "/Manual":
        if (bimLink) {
          bimLink.className = "nav-link primary-text";
        }
        if (smanLink) {
          smanLink.className = "nav-link primary-text";
        }
        if (homeLink) {
          homeLink.className = "nav-link primary-text";
        }
        if (manualLink) {
          manualLink.className = "nav-link active primary-text";
        }
        break;
    
      default:
        break;
    }
  }, [location.pathname])
  
    return (
        
      <nav class="sticky-top navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <img className ="header-logo1" src='/Simanteb/image.png'/>
              <img className='header-logo2' src = '/Simanteb/simanteb.avif'></img>
            </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse w-fit" id="navbarNav">
            <ul class="navbar-nav primary-text">
              <li class="nav-item">
                <Link to={"/Simanteb"} class="nav-link active primary-text" id="home">Beranda</Link>
              </li>
              <li class="nav-item">
                <Link to={"/Simanteb/Sman96"} class="nav-link primary-text" id="sman">SMAN 96 Jakarta</Link>
              </li>
              <li class="nav-item primary-text">
                <Link to={"/Simanteb/Bim"} class="nav-link primary-text" id="bim" >Pemeliharaan dan Perawatan</Link>
              </li>
              <li class="nav-item primary-text">
                <Link to={"/Simanteb/Manual"} class="nav-link primary-text " id="manual">User Manual</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav