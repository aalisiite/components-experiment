'use client';

import styles from "./blog.module.css";
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    return (
        <main className={styles.main}>
            This is blog using client component
            <button type="button" onClick={() => router.push('/')}>
                Back to home
            </button>

        </main>
    )
}