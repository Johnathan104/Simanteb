import React from 'react'
import './css/Bim.css'
function Bim() {
  return (
    <div className='Bim'>
        <div className="d-flex w-100 Bim-head bg-light">
            <div className="image-container w-100">
            </div>
            <div className="w-100 d-flex flex-column align-items-center">
                <div className="container primary-text py-5 Bim-text d-flex flex-column justify-content-center">
                    <span className="h3 atyp-lite">4d dan 7d</span>
                    <h1 className='atyp text-align-left mb-5'>Building Information Modelling (BIM)</h1>
                    <span><b>BIM</b> adalah representasi informasi digital 
                        sebuah infrastruktur, guna meningkatkan efisiensi desain, konstruksi,
                         dan fase operasi dari sarana dan prasarana di dalamnya. 
                         Pada BIM ini akan ditunjukkan model 4D dan 7D. Dimana 4D adalah representasi objek
                          bangunan gedung eksisting ke dalam sebuah
                         virtual reality dengan komponen waktu dan 7D
                          adalah representasi objek bangunan yang ditambahkan dengan prinsip keberlanjutan.</span>
                    <button className="btn btn-warning secondary-bg w-fit secondary-btn mt-5"> Read more </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bim