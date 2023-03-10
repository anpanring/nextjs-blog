import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';

const name = 'Jack Dempsey';
export const siteTitle = 'Anpankid';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Jack Dempsey personal website"
                />
                <meta
                    property="og:image"
                    onContextMenu={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Image src='/images/leftTriangle2.png' height={35} width={125} />
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/spinnylogo.gif"
                            className={utilStyles.logo}
                            height={70}
                            width={70}
                            alt=""
                        />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/spinnylogo.gif"
                                className={utilStyles.logo}
                                height={70}
                                width={70}
                                alt="Spinning logo"
                            />
                        </Link>
                    </>
                )}
                <Image src='/images/rightTriangle2.png' height={35} width={125} />
            </header>
            <Navbar />
            <main>{children}</main>
        </div >
    );
}

// function draw() {
//     const canvas = document.getElementById("leftCanvas");
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");

//         ctx.fillStyle = "rgb(200, 0, 0)";
//         ctx.fillRect(10, 10, 50, 50);

//         ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//         ctx.fillRect(30, 30, 50, 50);
//     }
// }
