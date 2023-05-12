import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Link href="cuenta">
          mi cuenta
        </Link> */}
      <Head>
        <title>MeNegocio - Tu Negocio en la web al alcance de todos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Tu Empresa</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#servicios">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portafolio">Portafolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
          <section id="hero" className="bg-primary text-white text-center py-5 centered">
            <div className="container">
              <h2 className="display-4">Servicios de Programación y Hosting</h2>
              <p className="lead">
                Desarrollamos soluciones web personalizadas para tu negocio
              </p>
              <a href="#contacto" className="btn btn-light btn-lg">Contáctanos</a>
            </div>
        </section>

        <section id="servicios" className="py-5 centered">
          <div className="container">
            <h2 className="text-center mb-5">Nuestros Servicios</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="programming.png"
                    className="card-img-top"
                    alt="Programación"
                  />
                  <div className="card-body">
                    <h3 className="card-title">Desarrollo Web</h3>
                    <p className="card-text">
                      Creamos sitios web a medida, optimizados y modernos
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img src="hosting.png" className="card-img-top" alt="Hosting" />
                  <div className="card-body">
                    <h3 className="card-title">Hosting Web</h3>
                    <p className="card-text">
                      Ofrecemos servicios de hosting confiables y seguros
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img src="ecommerce.png" className="card-img-top" alt="Ecommerce" />
                  <div className="card-body">
                    <h3 className="card-title">Comercio Electrónico</h3>
                    <p className="card-text">
                      Desarrollamos tiendas en línea escalables y funcionales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portafolio" className="py-5 centered">
          <div className="container">
            <h2 className="text-center mb-5">Nuestro Portafolio</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="portfolio-item-1.jpg"
                    className="card-img-top"
                    alt="Proyecto 1"
                  />
                  <div className="card-body">
                    <h3 className="card-title">Proyecto 1</h3>
                    <p className="card-text">Breve descripción del proyecto 1</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="portfolio-item-2.jpg"
                    className="card-img-top"
                    alt="Proyecto 2"
                  />
                  <div className="card-body">
                    <h3 className="card-title">Proyecto 2</h3>
                    <p className="card-text">Breve descripción del proyecto 2</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="portfolio-item-3.jpg"
                    className="card-img-top"
                    alt="Proyecto 3"
                  />
                  <div className="card-body">
                    <h3 className="card-title">Proyecto 3</h3>
                    <p className="card-text">Breve descripción del proyecto 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contacto" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Contáctanos</h2>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Tu correo electrónico"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </footer>

    </>
  )
}
