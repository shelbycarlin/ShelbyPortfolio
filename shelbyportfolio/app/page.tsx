import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
//maybe when you click on name it brings you to the about page 

export default function Home() {
  return (
    <main className={styles.main}>
    </main>
  )
}
