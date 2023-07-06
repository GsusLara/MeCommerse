import Head from 'next/head'
import Navbar from '@/components/navbar'
import Wave from '@/components/wave'
import Image from "next/legacy/image"
import { Inter } from 'next/font/google'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MeNegocio - Tu Negocio en la web al alcance de todos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="hero" className="centered position-relative">
          <div className="container text-white position-absolute text-center bottom-0 pb-5">
            <h2 className="display-4">Crea tu e-commerce o sitio Web fácilmente</h2>
            <p className="lead">
              ¡Sin programación y hasta con tu dispositivo móvil!
            </p>
            <a href="#servicios" className="btn btn-light btn-lg">Conoce más</a>
          </div>
        </section>
        <Wave color="#5060ac" />

        <section id="servicios" className="py-lg-5">
          <div className="container mt-3 mt-lg-5">
            <div className="row justify-content-md-center mb-lg-5">
              <div className="col-12 col-lg-8">
                <h3 className='text-center fw-bold'>¡MeNegocio es la mejor plataforma online de creación de páginas web y tiendas ecommerce sin programación! </h3>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-4 col-lg-4 mb-lg-4 mx-auto">
                <Image
                  src="/Logo.svg"
                  alt="Descripción de la imagen"
                  layout="responsive"
                  priority
                  width={250}
                  height={250}
                />
              </div>
              <div className="col-lg-8 mb-4 text-center">
                <p className='mt-4'>
                  Si estás buscando una forma <strong>fácil y rápida</strong>  de llevar tu negocio al mundo digital, estás en el lugar adecuado.</p>
                <h4 className='text-center'>¿No sabes cómo empezar?</h4>
                <p>
                  Hemos diseñado un formulario intuitivo que te guiará paso a paso, solo necesitas completar algunos campos y seleccionar las opciones que mejor se adapten a tus necesidades.
                </p>
                <h4 className='text-center'>¡Comienza ahora mismo!</h4>
                <div className="text-center">
                  <button type="button" className="btn btn-primary btn-lg m-2 botonCrearE">Crear un e-commerce</button>
                  <button type="button" className="btn btn-primary btn-lg m-2 botonCrearP">Crear un sitio web</button>
                </div>
                <p>
                  Subscríbete <strong>ahora</strong> y construye tu plataforma en tan solo unos minutos, mira nuestra{" "}
                  <Link href="mesite" className='textoResaltado'>
                    página demo.
                  </Link>
                </p>
                <h4 className='text-center'>¿Tienes más dudas?</h4>
                <p>
                  Sigue los enlaces si deseas conocer los{" "}
                  <Link href="#precios" className='textoResaltado'>
                    precios
                  </Link>
                  {" "}o si requieres más información solo{" "}
                  <Link href="#contacto" className='textoResaltado'>
                    contáctanos.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="precios" className="py-lg-5">
          <div className="container mt-5">
            <div className="row justify-content-center mb-2">
              <div className="col-12 col-lg-8">
                <h3 className='text-center fw-bold'>Descubre lo fácil que puede ser crear una presencia en línea impactante y rentable.</h3>
              </div>
            </div>
            <div className="row justify-content-center">

              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title">Página web personalizada</h2>
                    <p className="card-text">Crea una presencia en línea impactante y profesional con una página web personalizada.</p>
                    <p className="card-text">Detalles de la suscripción:</p>
                    <ul className="card-text">
                      <li>Hosting confiable para mantener tu sitio web en línea.</li>
                      <li>Certificado SSL para garantizar la seguridad de los datos transmitidos.</li>
                      <li>Editor fácil de usar para personalizar el contenido y las imágenes de tu sitio web.</li>
                      <li>Soporte técnico dedicado para ayudarte en cualquier momento.</li>
                    </ul>
                    <div className="mt-auto">
                      <p className="card-text text-end "> <strong className='fs-4'>$11 USD *mes </strong>(IVA incluido)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title">Tienda online completa</h2>
                    <p className="card-text">Lleva tu negocio al mundo digital y vende tus productos en línea con una tienda ecommerce completa.</p>
                    <p className="card-text">Detalles de la suscripción:</p>
                    <ul className="card-text">
                      <li>Hosting confiable para asegurar que tu tienda esté siempre disponible.</li>
                      <li>Certificado SSL para garantizar la seguridad y confianza</li>
                      <li>Carrito de compras integrado para una experiencia de compra fluida.</li>
                      <li>Generación de órdenes y gestión de inventario para administrar tus productos fácilmente.</li>
                      <li>Soporte técnico dedicado para resolver cualquier consulta o problema.</li>
                    </ul>
                    <div className="mt-auto">
                      <p className="card-text text-end"> <strong className='fs-4'>$19 USD *mes </strong>(IVA incluido)</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <div style={{ transform: "rotate(180deg)" }}>
        <Wave color='#DDDDDD' />
      </div>
      <footer id="contacto" className=" py-5">
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
