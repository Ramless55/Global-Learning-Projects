import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'
//styles
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  // const router = useRouter()
  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>
        <Head>
          <title>NewsApp - home</title>
        </Head>

        {articles.length === 0 && <p>No tenemos articulos.</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index} style={{
            backgroundColor: '',
            border: '2px solid grey',
            marginTop: '10px',
            width: '700px',
            height: 'fit-content',
            padding: '10px',
            borderRadius: '10px'
          }}>
            <h2>
              {article.title}
            </h2>
            {/* <img alt={`image for the article ${article.title}`} src={article.urlToImage}
              style={{
                width: '700px',
                height: '500px'
              }}
            /> */}

            <Image alt={`image for the article ${article.title}`}
              src={`/api/imageproxy?url=${encodeURIComponent(article.urlToImage)}`}
              width={700}
              height={500}
              layout='responsive'
            />
            <p>
              {article.description}
            </p>
          </div>
        ))}
        {/* <button onClick={() => router.push('/article/2')}>
          Navegar de forma programatica a un articulo
        </button> */}

      </div>
    </PageLayout>
  )
}

//N request --> se ejecuta 1 vez en build time (o para refrescar la pagina)
// export async function getStaticProps() {
//   const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc8e55055034e969e3b3752b4974818')
//   const { articles } = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }

// }

// N requests -> se ejecuta N veces
// Para datos que necesitas que sean MUY live
// Tiene demasiados datos dinamicos

export async function getServerSideProps() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc8e55055034e969e3b3752b4974818')
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }

}
