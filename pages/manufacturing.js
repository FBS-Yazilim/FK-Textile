import {motion, useScroll} from "framer-motion";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import Head from 'next/head'
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['manu'])),
        },
    }
}
function Manufacturing() {
    const {t} = useTranslation('manu')
    const items = [{
        id: 1,
        name: t(`items.fabric`),
        details: t(`itemsDet.fabricDet`),
        bgColor: "#373737",
        img: "../manuVids/fabric.mp4",
        poster: "../manuVids/fabric.webp"
    }, {
        id: 2,
        name: t(`items.cad`),
        details: t(`itemsDet.cadDet`),
        bgColor: "#555555",
        img: "../manuVids/cadcut.mp4",
        poster: "../manuVids/cadcut.webp"
    }, {
        id: 3,
        name: t(`items.print`),
        details: t(`itemsDet.printDet`),
        bgColor: "#818181",
        img: "../manuVids/print.mp4",
        poster: "./manuVids/print.webp"
    }, {
        id: 4,
        name: t(`items.bulk`),
        details: t(`itemsDet.bulkDet`),
        bgColor: "#a1a1a1",
        img: "../manuVids/sewing.mp4",
        poster: "../manuVids/sewing.webp"
    }, {
        id: 5,
        name: t(`items.acc`),
        details: t(`itemsDet.accDet`),
        bgColor: "#c0c0c0",
        img: "../manuVids/accesory.mp4",
        poster: "../manuVids/accesory.webp"
    }, {
        id: 6,
        name: t(`items.qua`),
        details: t(`itemsDet.quaDet`),
        bgColor: "#c4c2c2",
        img: "../manuVids/quality.mp4",
        poster: "../manuVids/quality.webp"
    }, {
        id: 7,
        name: t(`items.ship`),
        details: t(`itemsDet.shipDet`),
        bgColor: "#d3d7e7",
        img: "../manuVids/shipment.mp4",
        poster: "../manuVids/shipment.webp"
    }];
    const [backgroundColor, setBackgroundColor] = useState(items[0].bgColor);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionsRef = useRef([]);
    const manufacturingRef = useRef();
    useEffect(() => {
        sectionsRef.current = sectionsRef.current.slice(0, items.length);
    }, [items.length]);
    const updateState = useCallback((index) => {
        setBackgroundColor(items[index]?.bgColor || "#ffffff");
        setCurrentIndex(index);
    }, [items]);
    const handleScroll = useCallback((index) => {
        updateState(index);
        sectionsRef.current[index]?.scrollIntoView({
            behavior: "smooth", block: "center", inline: "nearest",
        });
        setTimeout(() => {
            sectionsRef.current[index]?.scrollIntoView({
                behavior: "auto", block: "center",
            });
        }, 300);
    }, [updateState]);
    const handleViewportEnter = useCallback((index) => {
        if (currentIndex !== index) {
            updateState(index);
        }
    }, [currentIndex, updateState]);
    const dotClass = (isActive) => `w-3 h-3 rounded-full cursor-pointer ${isActive ? "bg-white" : "bg-gray-400"}`;
    const commonTransition = useMemo(() => ({duration: 0.3}), []);
    const videoRef = useRef(null);
    useEffect(() => {
        if (!videoRef.current) {
            console.error('Video ref is not attached properly.');
        }
    }, []);
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };
    return (<motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.6}}
    >
        <Head>
            <title> FK TEXTILE - {t(`manu`)}</title>
        </Head>
        <section>
            <motion.div
                className="sticky top-0 left-0 w-full h-screen -z-10"
                animate={{backgroundColor}}
                transition={{duration: 0.6, ease: "easeInOut"}}
                initial={{backgroundColor: items[0]?.bgColor || "#ffffff"}}
            ></motion.div>
            <motion.section
                ref={manufacturingRef}
                className="absolute top-0 left-0 w-full h-[90vh] flex justify-center items-center"
                onViewportEnter={() => setCurrentIndex(-1)}
            >
                <div className="text-left px-4 md:px-8 w-full py-12 flex flex-col justify-start">
                    <motion.h1
                        className="text-3xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start playfair-display-bold text-white z-10"
                    >

                        {t(`manu`)}
                    </motion.h1>
                    <p className={"mt-5 lg:text-2xl text-sm text-center lg:text-start max-w-6xl mx-4 lg:mx-24 poppins-light text-gray-200"}>
                        Known as one of the
                        largest clothing manufacturer in Turkey, we manage all the steps together
                        with you to reveal the right product at the end of all production steps. The
                        most important feature that distinguishes our company from other clothing
                        manufacturers in Turkey is that we provide integrated order management
                        with our customers. As a high-quality apparel manufacturer, we follow the
                        steps below till the end product. These steps are the production steps that
                        make us stand out among Turkish Textile Manufacturers.
                    </p>
                </div>
            </motion.section>

            <section className="relative">
                <div
                    className="hidden fixed top-1/2 right-8 transform -translate-y-1/2 z-30 lg:flex flex-col gap-4">
                    <motion.div
                        className={dotClass(currentIndex === -1)}
                        onClick={() => {
                            setCurrentIndex(-1);
                            manufacturingRef.current.scrollIntoView({behavior: "smooth"});
                        }}
                        whileHover={{scale: 1.2}}
                        transition={commonTransition}
                    ></motion.div>
                    {items.map((_, index) => (<motion.div
                        key={index}
                        className={dotClass(index === currentIndex)}
                        onClick={() => handleScroll(index)}
                        whileHover={{scale: 1.2}}
                        transition={commonTransition}
                    ></motion.div>))}
                </div>

                {items.map((item, index) => (<motion.div
                    key={index}
                    className="w-screen h-[90vh] flex items-center justify-center relative z-20 mt-80 lg:mx-4"
                    ref={(el) => (sectionsRef.current[index] = el)}
                    onViewportEnter={() => handleViewportEnter(index)}
                    viewport={{
                        once: false, margin: "-50% 0px", threshold: 0.5,
                    }}
                >
                    <div className="relative w-full h-full lg:grid grid-cols-3 items-center justify-center">

                        <div
                            className={`lg:absolute z-20 ${item.id % 2 === 0 ? "lg:left-[7%]" : "lg:right-[7%]"} lg:w-1/2 flex flex-col items-start justify-center p-8 text-zinc-50 bg-zinc-800 bg-opacity-45 rounded-xl`}
                        >
                            <motion.h1
                                initial={{scale: 0.5, opacity: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.4, ease: "easeOut"}}
                                className="text-4xl md:text-6xl lg:text-8xl playfair-display-bold mix-blend-difference"
                            >
                                {item.name}
                            </motion.h1>
                            <div className="mt-4 text-sm md:text-2xl poppins-light">
                                {item.details.split('\n').map((line, i) => (
                                    <motion.p
                                        key={i}
                                        className="mb-2"
                                        initial={{opacity: 0.8, y: 10, scale: 0.8}}
                                        animate={{opacity: 1, y: 0}}
                                        whileInView={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.4, ease: "easeOut"}}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                            </div>
                            <button
                                className={`${item.name === `Fabric Production` || item.name === "Stoffproduktion" ? "mx-auto mt-12 px-5 py-3 bg-zinc-500 rounded-xl hover:scale-110 transition duration-300 hover:bg-white hover:text-zinc-500 poppins-extrabold" : "hidden"} `}
                                onClick={() => {
                                    window.open("/manuLabRes.pdf", "_blank", "noopener,noreferrer");
                                }}
                            >
                                {t("showLab")}
                            </button>
                        </div>
                        <motion.video
                            className={` ${item.id % 2 === 1 ? "rounded-xl w-11/12 mx-auto block lg:absolute top-0 left-16 lg:w-1/2 lg:h-1/2 object-cover z-0 lg:col-span-2" : "lg:block lg:absolute lg:bottom-0 lg:right-16 lg:w-1/2 lg:h-1/2 object-cover z-0 lg:col-span-2 rounded-xl"}`}
                            ref={videoRef}
                            poster={item.poster}
                            initial={{opacity: 0.8, y: 10, scale: 0.8}}
                            animate={{opacity: 1, y: 0}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 0.4, ease: "easeOut"}}
                            controls
                            fullscreen={false}
                            preload="metadata"
                        >
                            <source src={item.img} type="video/mp4"/>
                        </motion.video>
                    </div>
                </motion.div>))}
            </section>
        </section>
    </motion.div>);
}

export default Manufacturing;