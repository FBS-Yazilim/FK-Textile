import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import CountUp from 'react-countup';
import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import Head from 'next/head';
import Image from "next/image";
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}
function Home() {
    const {t} = useTranslation('common')
    const counts = [{
        title: t(`counts.work`), count: 1145,
    }, {
        title: t(`counts.products`), count: 321,
    }, {
        title: t(`counts.projects`), count: 4286,
    }]
    const referances = [{
        name: `Ebebek`, img: `/img/references/ebebek.webp`
    }, {
        name: `Hawksbill`, img: `/img/references/hawksbill.webp`
    }, {
        name: `Little Casimir`, img: `/img/references/littlecasimir.webp`
    }, {
        name: `Luess`, img: `/img/references/luess.webp`
    }, {
        name: `More Money`, img: `/img/references/moremoney.webp`
    },
        {
            name: `Qoolanchi`, img: `/img/references/qoolanchi.webp`
        }, {
            name: `Unvain`, img: `/img/references/unvain.webp`
        },]
    const whyChoose = [{
        "name": t(`whyChooseSec.com`), "details": t(`whyChooseSecDet.comDet`)
    }, {
        "name": t(`whyChooseSec.new`), "details": t(`whyChooseSecDet.newDet`)
    }, {
        "name": t(`whyChooseSec.cus`), "details": t(`whyChooseSecDet.cusDet`)
    }, {
        "name": t(`whyChooseSec.qua`), "details": t(`whyChooseSecDet.quaDet`)
    }, {
        "name": t(`whyChooseSec.str`), "details": t(`whyChooseSecDet.strDet`)
    }]
    const steps = [{
        title: t(`chart.design`), icon: "/img/home-chart-ico/fashion.webp", mt: "lg:mt-0"
    }, {
        title: t(`chart.fabric`), icon: "/img/home-chart-ico/fabric.webp", mt: "lg:mt-24"
    }, {
        title: t(`chart.sample`), icon: "/img/home-chart-ico/sample.webp", mt: "lg:mt-48"
    }, {
        title: t(`chart.cutting`), icon: "/img/home-chart-ico/cutting.webp", mt: "lg:mt-48"
    }, {
        title: t(`chart.quality`), icon: "/img/home-chart-ico/quality.webp", mt: "lg:mt-24"
    }, {
        title: t(`chart.delivery`), icon: "/img/home-chart-ico/delivery.webp", mt: "lg:mt-0"
    },];
    const {scrollY} = useScroll();
    const yTransform = useTransform(scrollY, [0, 1000], [0, -300]);
    const [startAnimation, setStartAnimation] = useState(false);
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 13000,
        pauseOnHover: true,
        cssEase: "linear",
        draggable: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 1500, settings: {
                slidesToShow: 3, centerMode: false, speed: 13000,
            },
        }, {
            breakpoint: 1024, settings: {
                slidesToShow: 2, centerMode: false, speed: 8000,
            },
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 1, centerMode: false, speed: 4000,
            },
        },],
    };
    const fadeInFromSide = (direction) => ({
        hidden: {opacity: 0, y: direction === "left" ? -100 : 100}, visible: {
            opacity: 1, y: 0, transition: {duration: 0.5},
        },
    });
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.005;
        }
    }, []);

    return (
        <div className="">
        <Head>
            <title className={"uppercase"}>FK TEXTILE - HOME</title>
        </Head>
        <motion.div
            className="sticky top-0 left-0 lg:w-full lg:h-screen w-full h-[500px] -z-10"
            style={{y: yTransform}}
            initial={{opacity: 0}}
            animate={{opacity: 0.8}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="w-full h-full relative">
                <video
                    ref={videoRef}
                    src="../img/giris.mp4"
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faArrowDown} className={"w-10 h-10 animate-bounce"}/>
                    <span className="text-sm poppins-medium">{t(`scrollDown`)}</span>
                </div>
            </div>
        </motion.div>
        <section className="bg-white lg:px-24 relative z-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={fadeInFromSide("right")}
                className="">
                <motion.div
                    className=""
                >
                    <div className={"flex flex-col justify-center items-center gap-10"}>
                        <h1 className={"text-center text-3xl lg:text-5xl poppins-extrabold pt-24"}>{t(`production-process`)}</h1>
                        <div className={"w-32 flex justify-center h-1 border-t bg-zinc-800"}/>
                        <div className={"flex lg:flex-row flex-col justify-center text-center items-center"}>
                            <Image loading={"lazy"} src="/img/home-chart-ico/zaman.webp" alt="Chart Icon" width={100} height={100} />                            <h1 className={"text-lg px-5 lg:text-2xl poppins-bold"}>{t(`rapid-line`)}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full">
                            <div className="lg:flex grid grid-cols-2 justify-around items-center relative">
                                {steps.map((step, index) => (
                                    <div key={index} className={`flex flex-col items-center mt-12 ${step.mt}`}>
                                        <div
                                            className="w-32 h-32 flex items-center justify-center bg-white border border-gray-300 rounded-full drop-shadow-lg hover:scale-110 transition duration-300"
                                        >
                                            <Image loading={"lazy"} width={500} height={500} src={step.icon} alt=""/>
                                        </div>
                                        <p className="mt-4 text-center text-sm text-gray-700 poppins-extrabold">
                                            {step.title}
                                        </p>
                                    </div>))}
                            </div>
                            <div className="flex flex-col items-center text-center justify-center mt-24 px-5">
                                <h1 className={"poppins-light text-2xl"}>{t(`forMore.1`)}
                                    <Link href={"/howWeProduce"}>
                                        <h1 className={"poppins-bold my-2 bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 text-transparent bg-clip-text "}>{t(`forMore.2`)}</h1>
                                    </Link> {t(`forMore.3`)}</h1>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
        {/*<section className="bg-white p-10 md:p-24 lg:p-52 relative z-20">*/}
        {/*    <div className="site-4xl-container mt-10">*/}
        {/*        <motion.div*/}
        {/*            className=""*/}
        {/*            initial="hidden"*/}
        {/*            whileInView="visible"*/}
        {/*            viewport={{once: true, amount: 0.2}}*/}
        {/*            variants={fadeInFromSide("left")}*/}
        {/*        >*/}
        {/*            <div className="text-center bg-white p-4 text-2xl font-bold">*/}
        {/*                FK TEKSTİL*/}
        {/*            </div>*/}
        {/*        </motion.div>*/}

        {/*    </div>*/}
        {/*</section>*/}
        <section className="bg-white p-10 md:p-24 lg:p-52 relative z-20 ">
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                {Array.from({length: 50}).map((_, index) => (<div
                    key={index}
                    className={`absolute w-[10px] h-[10px] bg-yellow-600 rounded-full animate-star`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${5 + Math.random() * 10}s`
                    }}
                ></div>))}
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={fadeInFromSide("left")}
            >
                <h1 className={`text-5xl poppins-extrabold`}>{t(`whyChoose`)}</h1>
                <div className={`grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-12 mt-10`}>
                    {whyChoose.map((whyChooseItem) => (<div className={`text-center mt-12`}>
                        <FontAwesomeIcon icon={faCheckCircle} className={`text-yellow-600 text-4xl`}/>
                        <h1 className={`text-center poppins-bold text-3xl`}>{whyChooseItem.name}</h1>
                        <p className={`text-xl poppins-light mt-5`}>{whyChooseItem.details}</p>
                    </div>))}
                </div>
            </motion.div>
        </section>
        <section className="bg-white p-10 md:p-24 lg:p-52 relative z-20">
            <div className="mt-10">
                <motion.div
                    className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6"
                >
                    {counts.map((count, index) => (<motion.div
                        className={`text-center text-black bg-white   py-4 flex flex-col items-center justify-center px-3 rounded-xl`}
                        whileInView={() => (setStartAnimation(true))}
                        initial={{opacity: 1}}
                        transition={{duration: 0.5}}
                        key={index}
                    >
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("left")}
                            className={`poppins-bold text-3xl uppercase`}>{count.title}</motion.h1>
                        <CountUp start={0} end={count.count} duration={1.5} startOnMount={false}>
                            {({countUpRef, start}) => (<div className={`poppins-light text-5xl mb-4`}>
                                <span ref={countUpRef}/> +
                                {startAnimation && start()}
                            </div>)}
                        </CountUp>
                    </motion.div>))}


                </motion.div>

            </div>
        </section>
        <section className="bg-white p-10 md:p-24 lg:p-52 relative z-20">
            <div className=" mt-10">
                <h1 className={`text-5xl text-center mb-12 text-zinc-800 poppins-extrabold`}>{t(`references`)}</h1>
                <Slider {...sliderSettings}>
                    {referances.map((referance) => (<motion.div
                        className="relative rounded-xl"
                        key={referance.id}
                    >
                        <div
                            className={`flex items-center justify-center w-[300px] h-[300px]`}>
                            <Image
                                loading={"lazy"}
                                width={1920}
                                height={1080}
                                src={referance.img}
                                alt=""
                                className="max-w-full max-h-full object-contain rounded-xl p-6"
                            />
                        </div>

                    </motion.div>))}
                </Slider>


            </div>
        </section>

    </div>);
}

export default Home;
