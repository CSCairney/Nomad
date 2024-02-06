import Image from 'next/image'
import styles from './page.module.scss'
import { Metadata } from 'next';
import LocalStorage from '@/components/common/LocalStorage';
import ReduxTester from '@/components/common/ReduxTester';

export const metadata: Metadata = {
  title: "Home | Nomad Badminton Club",
  description: 'The Offical Website of Nomad Badminton Club',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <LocalStorage />
      <div className={styles.description}>
        <h1 className="text-2xl italic font-bold underline">
          Hello world!
        </h1>
        <h2 className={styles.heading}>This is the starting page</h2>
        <ReduxTester />
      </div>
    </main>
  )
}
