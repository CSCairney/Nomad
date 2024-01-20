import Image from 'next/image'
import styles from './page.module.scss'
import { Metadata } from 'next';
import LocalStorage from '@/components/common/LocalStorage';
import ReduxTester from '@/components/common/ReduxTester';

export const metadata: Metadata = {
  title: "Home | Idle Miner",
  description: 'The Offical Idle Miner',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <LocalStorage />
      <div className={styles.description}>
        <h1 className="text-3xl italic font-bold underline">
          Hello world!
        </h1>
        <h2 className={styles.heading}>This is the starting page</h2>
        <ReduxTester />
      </div>
    </main>
  )
}
