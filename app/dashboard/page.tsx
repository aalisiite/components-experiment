import Link from "next/link";
import Survey from "./survey";
import styles from "./survey.module.css";

export default function Page() {
    return (
        <main className={styles.main}>
            <Survey />
            <Link href={`/`}>Back to home</Link>
            <p>I may look glitchy because I use Loading component.
                But that's okey, I am just playing around</p>
        </main>
    )
}