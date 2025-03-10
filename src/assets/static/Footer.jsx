import React from 'react'

function Footer() {
  return (
    <footer className='py-4 secondary-bg sim-footer'>
        <div className='d-flex flex-column align-items-center'>
            <img className='footer-logo w-fit' src = '/Simanteb/simanteb.avif'></img>
            <div className="d-flex w-fit">
            <ul class="d-flex primary-text mt-4 w-fit">
                <li class="nav-item me-2">
                    <a class="nav-link active primary-text" aria-current="page" href="#">Beranda</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link primary-text" href="#2">SMAN 96 Jakarta</a>
                </li>
                <li class="nav-item mx-2 primary-text">
                    <a class="nav-link primary-text" href="#3">Pemeliharaan dan Perawatan</a>
                </li>
                <li class="nav-item mx-2 primary-text">
                    <a class="nav-link primary-text " href="#3">User Manual</a>
                </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer