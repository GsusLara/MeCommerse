import Head from 'next/head'
import Navbar from '@/components/navbar'
import Wave from '@/components/wave'
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
        <Navbar />
      </header>
      <main>
        <section id="hero" className="centered position-relative">
          <div className="container text-white position-absolute text-center bottom-0 pb-5">
            <h2 className="display-4">Crea tu e-commerce o sitio Web fácilmente</h2>
            <p className="lead">
              Sin programación, unicamente completando un formulario
            </p>
            <a href="#servicios" className="btn btn-light btn-lg">Conoce más</a>
          </div>
        </section>
        <Wave />
        <section id="servicios" className="py-5">
          <div className="container">
            <h1 className="text-center mb-5 mt-5">Nuestros Servicios</h1>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <Image
                  src="/Logo.svg"
                  alt="Descripción de la imagen"
                  layout="responsive"
                  priority={false}
                  width={450}
                  height={450}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <h3>¡MeNegocio es la mejor plataforma online de creación de páginas web y tiendas ecommerce sin programación! </h3>
                <p>Si estás buscando una forma <strong>fácil y rápida</strong>  de llevar tu negocio al mundo digital, estás en el lugar adecuado. <br />

                  Nuestra plataforma te ofrece la posibilidad de crear páginas web simples y elegantes sin necesidad de conocimientos técnicos o de programación. ¿No sabes cómo empezar? ¡No te preocupes! Hemos diseñado un formulario intuitivo que te guiará paso a paso en el proceso de creación. Solo necesitas completar algunos campos y seleccionar las opciones que mejor se adapten a tus necesidades.

                  ¿Estás listo para llevar tu negocio al siguiente nivel? Con nuestra plataforma, también puedes crear una tienda ecommerce totalmente funcional. Ya sea que vendas productos físicos o servicios digitales, nuestro sistema de creación de tiendas te brinda todas las herramientas necesarias para crear una experiencia de compra en línea excepcional. Desde la gestión de inventario hasta las opciones de pago y envío, te proporcionamos las soluciones completas para que puedas centrarte en lo que mejor sabes hacer: ¡hacer crecer tu negocio!

                  Subscribirte a nuestra plataforma es muy sencillo. Una vez que hayas creado tu página web o tienda ecommerce, te proporcionaremos opciones flexibles de alojamiento y personalización para que puedas adaptar tu presencia en línea de acuerdo con tus necesidades y estilo único. Además, ofrecemos soporte técnico dedicado para asegurarnos de que tu experiencia sea fluida y exitosa.

                  No importa si eres un emprendedor, un autónomo o una pequeña empresa, nuestra plataforma está diseñada para brindarte una solución completa y accesible para llevar tu negocio al mundo digital. Únete a nuestra comunidad de usuarios satisfechos y descubre lo fácil que puede ser crear una presencia en línea impactante y rentable.

                  ¡Empieza hoy mismo y desbloquea todo el potencial de tu negocio en internet con nuestra plataforma de creación de páginas web y tiendas ecommerce sin programación! Subscríbete ahora y comienza a construir tu plataforma en tan solo unos minutos.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="portafolio" className="py-5 ">
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
