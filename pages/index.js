// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FirstPost from './firstpost'

export default function Home() {
  return (
    // 
    // <FirstPost/>
    <h1 className='title'>
      Read <Link href="./firstpost">This </Link>
    </h1>
  )
}
