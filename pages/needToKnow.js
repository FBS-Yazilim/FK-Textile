import {AnimatePresence, motion} from "framer-motion";
import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'needtoKnow'
            ])),},
    }
}
function NeedToKnow() {
    const { t } = useTranslation('needtoKnow');
    const items = [
        {
            name: t("items.1"),
            details:
                t("items.1Det"),
        },
        {
            name: t("items.2"),
            details:
                t("items.2Det"),
        },
        {
            name: t("items.3"),
            details:
                t("items.3Det"),
        },
        {
            name: t("items.4"),
            details:
                t("items.4Det"),
        },
        {
            name: t("items.5"),
            details:
                t("items.5Det"),
        },
    ];
    const [hoveredItem, setHoveredItem] = useState(items[0].details);
    const [expanded, setExpanded] = useState(null);
    return (
        <motion.div
            className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: "#0d0d0d",
                backgroundImage: "url('/textures/noise-texture.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Head>
                <title>FK TEXTILE - {t("needTo")}</title>
            </Head>
            <section className="hidden  relative z-10 p-6 lg:flex flex-col lg:flex-row lg:justify-end justify-around items-center text-center w-full h-screen">
                {/* Details Section */}
                <motion.div
                    className="flex justify-center items-center w-2/3 lg:px-12 h-full text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {hoveredItem && (
                        <motion.div
                            key={hoveredItem}
                            className="p-8 bg-gray-900 bg-opacity-90 border border-gray-700 rounded-xl shadow-lg"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-lg lg:text-2xl font-serif leading-relaxed">{hoveredItem}</p>
                        </motion.div>
                    )}
                </motion.div>
                <motion.div
                    className="lg:flex lg:flex-col grid grid-cols-2 gap-6 lg:mx-12"
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className={"text-xl text-white text-end poppins-bold "}>ALL INCLUSIVE CLOTHING MANUFACTURER</h1>

                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative p-4 rounded-lg cursor-pointer border-2 border-gray-700 shadow-md bg-gray-800 hover:scale-105 hover:rotate-3 transform transition-all duration-300"
                            style={{
                                backgroundColor: hoveredItem === item.details ? "#1f1f1f" : "#2c2c2c",
                                color: hoveredItem === item.details ? "#ffffff" : "#d3d3d3",
                            }}
                            onMouseEnter={() => {
                                setHoveredItem(item.details);
                            }}
                        >
                            <h1 className="lg:text-3xl font-serif tracking-wide">{item.name}</h1>
                            <motion.div
                                className="absolute inset-0 border border-gray-600 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredItem === item.details ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            <section className={`lg:hidden relative block z-10 p-6 items-center text-center w-full h-screen mt-28 mb-80`}>
                {items.map((item, index) => (
                    <div key={index}
                        className="bg-sky-900 bg-opacity-50 rounded-lg shadow-lg p-4 my-4 relative overflow-hidden">
                        <div className="flex justify-between items-center cursor-pointer"
                            onClick={() => setExpanded(expanded === index ? null : index)}>
                            <h1 className="text-xl font-bold text-zinc-200 playfair-display-bold">{item.name}</h1>
                            <motion.div
                                className=" text-2xl"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: expanded === index ? 45 : 0 }}>
                                <FontAwesomeIcon icon={expanded === index ? faPlusCircle : faMinusCircle} className={`transition duration-300 ${expanded === index ? "text-red-500" : "text-gray-200"}`} />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {expanded === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 text-zinc-200"
                                >
                                    <p className={`poppins-medium`}>{item.details}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </section>
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-full shadow-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-10 right-10 w-12 h-12 bg-blue-600 rounded-full"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-red-500 rounded-full"
                animate={{
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-500 rounded-full"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-20 h-20 bg-green-500 rounded-full"
                animate={{
                    rotate: [0, 90, 180],
                    scale: [1, 0.5, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
}

export default NeedToKnow;
