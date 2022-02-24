import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bulma/css/bulma.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ether Lottery</title>
        <meta name="description" content="An Ethereum Lottery dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Block Explorer</p>
      </footer>
    </div>
  );
}
