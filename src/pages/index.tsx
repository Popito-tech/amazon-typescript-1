import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import BottonHeader from '@/components/header/BottonHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
      <BottonHeader/>
    </main>
  )
}
