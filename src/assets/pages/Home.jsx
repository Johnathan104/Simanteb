import React from 'react'

function Home() {
  return (
    <div className='Home'>
      <div className="hero">
        {/* Background Video */}
        {/* <video className="background-video" autoPlay loop muted>
            <source  src="/public/nzeb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}

        {/* Dark Overlay */}
        <video className="background-video" autoPlay loop muted>
            <source  src="/nzeb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="overlay d-flex justify-content-center align-items-center">
            <div className="container-fluid text-center hero-text d-flex flex-column">
                <h1 className='hero-main'>Selamat Datang di</h1>
                <h1 className='mb-5 hero-main secondary-text'>SIMANTEB!</h1>
                <p className='w-50 align-self-center'>
                <b>SIMANTEB (Sistem Informasi Manajemen Pemeliharaan dan Perawatan Gedung Sekolah Nzeb)</b> dirancang untuk memberikan solusi terintegrasi yang memadukan{" "}
                <b>Building Information Model (BIM)</b> dengan <b>Work Breakdown Structure (WBS)</b> guna memastikan kinerja optimal pada gedung berkonsep NZEB.
                </p>
                <button className="btn btn-warning secondary-bg px-5 w-fit align-self-center mt-4 primary-text">
                  <b>Get Started</b> 
                </button>
            </div>
        </div>
        
      </div>
      <div className="home-2 secondary-bg pb-5 primary-text">
        <svg xmlns="http://www.w3.org/2000/svg" id="lol"  viewBox="0 0 1200 100">
        <path fill="#ffffff" fill-opacity="1" d="M0,65L240,71.5C480,78,960,91,1440,84.5C1920,78,2400,52,2880,45.5C3360,39,3840,52,4320,67.2C4800,82,5280,100,5760,93.2C6240,87,6720,56,7200,41.2C7680,26,8160,26,8640,26C9120,26,9600,26,10080,26C10560,26,11040,26,11520,21.7C12000,17,12480,9,12960,10.8C13440,13,13920,26,14400,36.8C14880,48,15360,56,15840,67.2C16320,78,16800,91,17280,86.7C17760,82,18240,61,18720,60.7C19200,61,19680,82,20160,95.3C20640,108,21120,113,21600,95.3C22080,78,22560,39,23040,39C23520,39,24000,78,24480,91C24960,104,25440,91,25920,78C26400,65,26880,52,27360,56.3C27840,61,28320,82,28800,91C29280,100,29760,95,30240,95.3C30720,95,31200,100,31680,99.7C32160,100,32640,95,33120,88.8C33600,82,34080,74,34320,69.3L34560,65L34560,130L34320,130C34080,130,33600,130,33120,130C32640,130,32160,130,31680,130C31200,130,30720,130,30240,130C29760,130,29280,130,28800,130C28320,130,27840,130,27360,130C26880,130,26400,130,25920,130C25440,130,24960,130,24480,130C24000,130,23520,130,23040,130C22560,130,22080,130,21600,130C21120,130,20640,130,20160,130C19680,130,19200,130,18720,130C18240,130,17760,130,17280,130C16800,130,16320,130,15840,130C15360,130,14880,130,14400,130C13920,130,13440,130,12960,130C12480,130,12000,130,11520,130C11040,130,10560,130,10080,130C9600,130,9120,130,8640,130C8160,130,7680,130,7200,130C6720,130,6240,130,5760,130C5280,130,4800,130,4320,130C3840,130,3360,130,2880,130C2400,130,1920,130,1440,130C960,130,480,130,240,130L0,130Z">
          </path></svg>
        <div className="container home2 d-flex align-items-center">
          <div>
            <h1>Tentang SIMANTEB</h1>
            <img  src="/home1.png" alt="no image" />
          </div>
          <div className='home2-descriptor ms-5'>
            <p> <b>SIMANTEB</b> adalah platform inovatif yang menghadirkan sistem 
              informasi modern untuk mendukung pengelolaan gedung sekolah NZEB di Jakarta. 
              Dengan fokus pada keberlanjutan dan teknologi terkini, sistem kami membantu untuk:</p>
              <ul>
                <li>Melacak jadwal pemeliharaan dan perawatan secara real-time.</li>
                <li>Mengelola data BIM untuk pemahaman mendalam tentang struktur dan fasilitas gedung.</li>
                <li>Meningkatkan kinerja pemeliharaan dan perawatan operasional gedung sekolah NZEB melalui pendekatan berbasis WBS.</li>
                <li>Meminimalkan penggunaan metode pemeliharaan konvensional berbasis kertas (paper-based) dengan mengadopsi sistem digital yang lebih efisien dan ramah lingkungan.</li>
              </ul>
          </div>
        </div>
      </div>
      <div className="home3 bg-light primary-text py-5">
        <div className="container d-flex flex-column align-items-center">
          <div className='home3-intro mb-5'>
            <h1 className='mb-4'>Fitur Utama</h1>
            <p><b>SIMANTEB</b> menawarkan integrasi untuk mengelola pekerjaan pemeliharaan dan perawatan gedung sekolah NZEB anda. Dengan fitur-fitur unggulan berikut:</p>
          </div>
          
          <div className="d-flex  w-100 home3-imgset justify-content-evenly">
            <div>
              <img className ="home3-img"  src="/home2,1.png" alt="" />
              <p className="h3 atyp my-4">Integrasi BIM(Building Information Modeling)</p>
              <p>Visualisasikan dan kelola aset gedung sekolah secara detail dengan model Building Information Modeling (BIM) yang terintegrasi.</p>
              <button className="btn btn-primary primary-bg text-light" id="bim">Read more</button>
            </div>
            <div>
              <img className ="home3-img"  src="/home2,2.png" alt="" />
              <p className="h3 atyp my-4">Berbasis Work Breakdown Structure (WBS)</p>
              <p>Organisasikan pekerjaan dengan jelas menggunakan Work Breakdown Structure (WBS) untuk efisiensi maksimal.</p>
              <button className="btn btn-primary primary-bg text-light" id="wbs">Read more</button>
            </div>
            <div>
              <img className ="home3-img"  src="/home2,3.png" alt="" />
              <p className="h3 atyp my-4">Pedoman dan Standard Operational Procedure (SOP)</p>
              <p>Ikuti prosedur kerja standar (SOP) dan pedoman yang telah ditetapkan untuk memastikan pencapaian kualitas dan konsistensi.</p>
              <button className="btn btn-primary primary-bg text-light" id="sop">Read more</button>
            </div>
          </div>

        </div>
      </div>
      <div className="home4  py-5 primary-bg text-light">
        <h1 className='my-5 atyp'>Didukung oleh:</h1>
        <div className="d-flex my-5 home4-sponsors w-100 justify-content-evenly align-items-center">
          <img className='sponsor-logo'  src="/uiTeknik.png" alt="" />
          <img className='sponsor-logo'  src="/sman96.png" alt="" />
          <img className='sponsor-logo'  src="/pemprov.png" alt="" />
          <img className='sponsor-logo'  src="/blue_triangle.png" alt="" />
          <img className='sponsor-logo'  src="/adhi.png" alt="" />
        </div>
      </div>
      <div className="home5 bg-light py-5">
        <h1 className="atyp primary-text">Dibikin Oleh</h1>
        
        <div className="d-flex w-100 justify-content-evenly align-items-center">
          <div className='contact-pic'>
            <img src="contact0,1.png" alt="" />
            <p className='h5'>Ir. Hans Dermawan, S.Pd., M.T</p>
          </div>
          <div className='contact-pic'>
            <img src="contact0,2.png" alt="" />
            <p className="prof-yusul-pic h5">Prof. Dr. Ir. Yusuf Latief, M.T.</p>
          </div>
          <div className='contact-pic'>
            <img src="contact0,3.png" alt="" />
            <p className='h5'>Naufal Budi Laksono, S.T., M.T.</p>
          </div>
        </div>
        <div className="d-flex w-100 justify-content-evenly align-items-center">
          <div className="contact-pic">
            <img src="contact1.png" alt="" />
            <p className='h5'>Nazla Khalda Khairunisya</p>
          </div>

          <div className="contact-pic">
            <img src="contact2.png" alt="" />
            <p className='h5'>Nadasyifa Adika Irnandhita</p>
          </div>

          <div className="contact-pic">
            <img src="contact3.png" alt="" />
            <p className='h5'>Kethlin Zaneta</p>
          </div>

          <div className="contact-pic">
            <img src="contact4.png" alt="" />
            <p className='h5'>Shakila Nurivana</p>
          </div>

          <div className="contact-pic">
            <img src="contact5.png" alt="" />
            <p className='h5'>Nizmi Neysa Aldina</p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly  my-5 align-items-center w-100">
          <div className="contact-pic">
            <div className='contact-circle'>
                <img src="contact6.png" alt="" />
              </div>
              <p className='h5'>Cintia Oktaviana</p>
            </div>
            <div className="contact-pic">
              <div className='contact-circle'>
                <img src="contact7.png" alt="" />
              </div>
              <p className='h5'>Alya Nisrina Orvala</p>
            </div>
            <div className="contact-pic">
              <div className='contact-circle'>
                <img src="contact8.5.png" alt="" />
              </div>
              <p className='h5'>Fayza Alyaa Rizka Ashila</p>
            </div>
            <div className="contact-pic">
              <div className='contact-circle'>
                <img src="contact8.png" alt="" />
              </div>
              <p className='h5'>Syakirah Syukiri</p>
            </div>
        </div>
        <div className="d-flex justify-content-evenly  my-5 align-items-center w-100">
            <div className="contact-pic">
                <div className='contact-circle'>
                  <img src="contact9.png" alt="" />
                </div>
                <p className='h5'>Errydani Putra Dayuh</p>
            </div>  
            <div className="contact-pic">
                <div className='contact-circle'>
                  <img src="contact10.png" alt="" />
                </div>
                <p className='h5'>Muhammad Nauhal Ash Shidqy</p>
            </div> 
            <div className="contact-pic">
                <div className='contact-circle'>
                  <img className="reynald"src="contact11.png" alt="" />
                </div>
                <p className='h5'>Raynald Yekoniah</p>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Home