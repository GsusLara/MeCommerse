import { useRouter } from "next/router"
import Head from 'next/head'

export default function Pagina() {
    const router = useRouter();
    const {pagina, plataforma} = router.query
  return (
    <>
    <Head>
        <title>{pagina} | {plataforma}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div><h1>Bienvenido a {pagina}</h1></div>
    </>
  )
}
