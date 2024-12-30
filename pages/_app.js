'use client'
import "../styles/global.css";
import Header from "../components/nav/index";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Footer from "../components/footer/index";
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from "next/head";
function MyApp({Component, pageProps}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const splashTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(splashTimer);
    }, []);

    return (
        <div className="antialiased text-black">
            <main className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Head>
                    <meta name="description"
                          content="FK Textile offers high-quality textile solutions including fabric sourcing, design, and production for global markets."/>
                </Head>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </main>
            {isLoading && (
                <motion.div
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    transition={{duration: 1, delay: 3.2}}
                    className="flex items-center justify-center h-screen w-screen bg-black fixed top-0 left-0 z-50"
                >
                    <motion.img
                        initial={{scale: 1}}
                        animate={{scale: [1, 1.1, 1]}}
                        transition={{repeat: Infinity, duration: 1.5}}
                        className="w-[300px]"
                        src="../img/fklogo-white.webp"
                        alt="Loading Logo"
                    />
                </motion.div>
            )}
            <SpeedInsights />
            <Analytics />
        </div>
    );
}

export default appWithTranslation(MyApp)
