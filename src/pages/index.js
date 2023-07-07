import Head from 'next/head'
import Navbar from '@/components/plataforma/navbar/navbar'
import Footer from '@/components/plataforma/footer'
import CardPrecio from '@/components/plataforma/cardPrecio'

import Image from "next/legacy/image"
import Link from 'next/link'
import Wave from '@/components/plataforma/wave'
import { Inter } from 'next/font/google'

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
        <section id="cabecera" className="position-relative">
          <div className="container text-white position-absolute text-center bottom-0 pb-5">
            <h2 className="display-4">Crea tu e-commerce o sitio Web fácilmente</h2>
            <p className="lead">
              ¡Sin programación y hasta con tu dispositivo móvil!
            </p>
            <a href="#servicios" className="btn btn-light btn-lg">Conoce más</a>
          </div>
        </section>
      </header>
      <Wave color="#5060ac" />
      <main>
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
                  <Link href="mesite" className='enlaces'>
                    página demo.
                  </Link>
                </p>
                <h4 className='text-center'>¿Tienes más dudas?</h4>
                <p>
                  Sigue los enlaces si deseas conocer los{" "}
                  <Link href="#precios" className='enlaces'>
                    precios
                  </Link>
                  {" "}o si requieres más información solo{" "}
                  <Link href="#contacto" className='enlaces'>
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
              <CardPrecio
                titulo="Página web personalizada"
                descripcion="Crea una presencia en línea impactante y profesional con una página web personalizada."
                lista="Detalles de la suscripción:"
                items={["Hosting confiable para mantener tu sitio web en línea.",
                  "Certificado SSL para garantizar la seguridad de los datos transmitidos.",
                  "Editor fácil de usar para personalizar el contenido y las imágenes de tu sitio web.",
                  "Soporte técnico dedicado para ayudarte en cualquier momento."]}
                precio="$11 USD *mes"
              />
              <CardPrecio
                titulo="Tienda online completa"
                descripcion="Lleva tu negocio al mundo digital y vende tus productos en línea con una tienda ecommerce completa."
                lista="Detalles de la suscripción:"
                items={["Hosting confiable para asegurar que tu tienda esté siempre disponible.",
                "Certificado SSL para garantizar la seguridad y confianza.",
                "Carrito de compras integrado para una experiencia de compra fluida.",
                "Generación de órdenes y gestión de inventario para administrar tus productos fácilmente.",
                "Soporte técnico dedicado para resolver cualquier consulta o problema."]}
                precio="$19 USD *mes"
              />
            </div>
          </div>
        </section>
      </main>
      <div style={{ transform: "rotate(180deg)" }}>
        <Wave color='#DDDDDD' />
      </div>
      <Footer />
    </>
  )
}
