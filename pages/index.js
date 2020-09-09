import Head from 'next/head'
import App from '../components/App'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Interactive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
    </div>
  )
}
