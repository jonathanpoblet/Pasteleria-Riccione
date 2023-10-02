import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './header.css';

export default function Header() {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => {
              document.getElementById('navbarNav').className = 'navbar-collapse collapse';
              navigate('../')
            }}>
              <Link to='../'>
                Inicio
              </Link>
            </li>
            <li className="nav-item" onClick={() => {
              document.getElementById('navbarNav').className = 'navbar-collapse collapse';
              navigate('/productos')
            }}>
              <Link to='/productos'>
                Productos
              </Link>
            </li>
            <li className="nav-item" onClick={() => {
              document.getElementById('navbarNav').className = 'navbar-collapse collapse';
              navigate('/nosotros')
            }}>
              <Link to='/nosotros'>
                  Sobre Nosotros
              </Link>            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
