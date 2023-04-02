import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MeNegocio - Tu Negocio en la web al alcance de todos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Esta es La Home</h1>
        <Link href="cuenta">
          mi cuenta
        </Link>
        <Link href="tienda/pctodo">
          pctodo tienda
        </Link>
      </main>
    </>
  )
}
