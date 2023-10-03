import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillPhone, AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="text-center text-lg-start text-white" style={{backgroundColor: "#ff00ea"}}>
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Pasteleria Riccione
            </h6>
            <p>
              Con más de 20 años realizando la mejor pasteleria de Argentina, alimentando a miles de familias con nuestros productos de calidad. Te invitanos a contactarnos y encargar tu pedido!
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none"/>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Navegación</h6>
            <p onClick={() => navigate('../')}>
              <Link to='../' className='text-white'>
                Inicio
              </Link>
            </p>
            <p onClick={() => navigate('/productos')}>
              <Link to='/productos' className='text-white'>
                Productos
              </Link>            </p>
            <p onClick={() => navigate('/nosotros')}>
              <Link to='/nosotros' className='text-white'>
                Sobre Nosotros
              </Link>            </p>
          </div>

          <hr className="w-100 clearfix d-md-none"/>


          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
            <div className='d-flex align-items-center justify-content-center justify-content-lg-start mb-2'>
              <AiFillHome/> 
              <p className='my-0 ms-2'>Banfield, Argentina</p>
            </div>
            <div className='d-flex align-items-center justify-content-center justify-content-lg-start mb-2'>
              <MdEmail/> 
              <p className='my-0 ms-2'>pasteleriariccione@gmail.com</p>
            </div>
            <div className='d-flex align-items-center justify-content-center justify-content-lg-start mb-2'>
              <AiFillPhone/> 
              <p className='my-0 ms-2'>+54 11 3057 2191</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-3"/>
      

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2023 Copyright: Pasteleria Riccione
            </div>
          </div>

          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a href="https://www.facebook.com/jonathan.a.poblet" target='_blank'>
              <AiFillFacebook className='fs-2 ms-1 text-white' />
            </a>

            <a href="https://www.instagram.com/jonathan_poblet/" target='_blank'>
              <AiFillInstagram className='fs-2 ms-1 text-white' />
            </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
  )
}
