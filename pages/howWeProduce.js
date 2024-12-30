import {motion} from "framer-motion";
import React, {useState} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Image from "next/image";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'howWeProduce',
            ])),},
    }
}
function HowWeProduce() {
    const { t } = useTranslation('howWeProduce');
    const items = [{
        name: t("itemsName.desired"),
        details: t("itemsName.desiredDet"),
        bg: "#0a0a0a",
        bgImg : `/img/howWeImg/desired-product-details.webp`
    },
        {
        name: t("itemsName.price"),
        details: t("itemsName.priceDet"),
        bg: "#303030",
            bgImg : `/img/howWeImg/price.webp`
    },
        {
        name: t("itemsName.quality"),
        details:t("itemsName.qualityDet"),
        bg: "#505050",
            bgImg : `/img/howWeImg/desired-product-details.webp`
    },
        {
        name: t("itemsName.lab"),
        details: t("itemsName.labDet"),
        bg: "#707070",
            bgImg : `/img/howWeImg/lab-dips.webp`
    }, {
        name: t("itemsName.pps"),
        details: t("itemsName.ppsDet"),
        bg: "#909090",
            bgImg : `/img/howWeImg/pps.webp`
    },, {
        name: t("itemsName.bulk"),
        details: t("itemsName.bulkDet"),
        bg: "#909090",
            bgImg : `/img/howWeImg/bulk.webp`
    }];
    const [hoveredItem, setHoveredItem] = useState(items[0].details);
    const [hoveredImg, setHoveredImg] = useState(items[0].bgImg);
    return (
        <div>
            <Head>
                <title>FK TEXTILE - {t("howWe")}</title>
            </Head>
            <motion.div
                className="hidden lg:block sticky min-h-screen transition-colors duration-500 inset-0"
                key={hoveredItem}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
                transition={{duration: 1}}
                style={{ backgroundImage: `url(${hoveredImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backgroundBlendMode: "overlay",
                }}
            >
                <section
                    className="hidden lg:flex p-4 flex-col lg:flex-row lg:justify-end justify-around items-center text-center w-full h-screen"
                >
                    {/* Detay kısmı */}
                    <motion.div className="flex justify-center items-center w-full lg:w-2/3 px-4 lg:px-12 h-full pt-12">
                        {hoveredItem && (
                            <motion.div
                                key={hoveredItem}
                                className="relative p-4 text-white  bg-opacity-10 bg-white rounded-[40px] backdrop-blur-md"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}}
                                transition={{duration: 0.5}}
                            >
                                <div className="flex flex-col items-center justify-center text-center px-24">
                                    {hoveredItem.split('\n').map((line, i) => (
                                        <p key={i} className="lg:text-[20px] poppins-light">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>


                    {/* Başlık kısmı */}
                    <motion.div className="grid grid-cols-1 lg:flex lg:flex-col gap-2 w-full lg:w-auto lg:mr-12 px-4">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-4 mb-2 border-2 lg:border-0 rounded-lg text-center lg:text-end cursor-pointer hover:text-zinc-500 text-zinc-100 text-4xl playfair-display-bold transition duration-200"
                                onMouseEnter={() => {
                                    setHoveredItem(item.details);
                                    setHoveredImg(item.bgImg);
                                }}
                                onClick={() => {
                                    setHoveredItem(item.details);
                                    setHoveredImg(item.bgImg);
                                }}
                            >
                                <h1>
                                    {item.name}
                                </h1>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </motion.div>
            {/*mobil kısım*/}
            <motion.div className={`lg:hidden block py-12 bg-white`}>
                {items.map((item, index) => (
                    <div className={`my-24 px-6 `}>
                        <h1 className={`text-center text-2xl mb-7 poppins-extrabold`}>{item.name}</h1>
                        <h1 className={`text-center poppins-medium`}>{item.details}</h1>
                        <Image loading={"lazy"} width={1920} height={1080} src={item.bgImg} alt=""
                               className="w-full h-auto object-cover rounded-md"/>
                    </div>
                ))}
                <div className={`text-center`}>
                    <Link href={`/manufacturing`}>
                        <button
                            className={ "px-5 py-2 rounded-xl hover:scale-110 transition duration-300 bg-black text-white poppins-medium"}>
                            {t("contManu")}
                            <FontAwesomeIcon icon={faArrowRight} className={`ml-5`}/>
                        </button>
                    </Link>
                </div>

            </motion.div>
        </div>


    );

}

export default HowWeProduce;
