import Link from "next/link";
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>Hello, Next.js!</h1>
      <Link href={`/dashboard`}>Survey</Link>
      <Link href={`/blog`}>Blog</Link>
    </main>
  );
}
