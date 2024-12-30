import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import Head from 'next/head';
import Image from 'next/image';
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['about'])),
        },
    }
}
function About() {
    const {t} = useTranslation('about')
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 11000,
        pauseOnHover: true,
        cssEase: "linear",
        draggable: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 1500, settings: {
                slidesToShow: 3, centerMode: false, speed: 11000,
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
    return (<motion.div className="about bg-white pt-32">
            <Head>
                <title>FK TEXTILE - {t(`aboutUS`)}</title>
            </Head>
            <motion.section className="site-4xl-container flex flex-col items-center justify-center space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("left")}>
                <div className="w-[0.2px] h-[55px] bg-zinc-800">
                </div>
                <h2 className={`text-zinc-800 poppins-extralight text-2xl`}>{t(`aboutUS`)}</h2>
                <h1 className={`text-zinc-800 text-6xl playfair-display-bold text-center`}>{t(`whoWe`)}</h1>
                <div className="w-[0.2px] h-[55px] bg-zinc-800">
                </div>
            </motion.section>
            <motion.section className="flex flex-col items-center justify-center mt-12 site-4xl-container text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("right")}>
                <p className={`text-zinc-800 poppins-regular mx-6 text-xl`}> <span className={`poppins-black`}>
                    FK Textile
                </span> {t(`whoWeDet`)}</p>
            </motion.section>
            <motion.section className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center mt-32 m-12 gap-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("left")}>
                <div className="bg-black p-5 w-full h-auto">
                    <Image loading={"lazy"} width={1920} height={1080} src="/img/howWeImg/pps.webp" alt=""/>
                </div>
                <div className={`flex flex-col items-center justify-center text-center space-y-6`}>
                    <h2 className={`text-zinc-800 poppins-extralight text-2xl`}>{t(`about`)}</h2>
                    <h1 className={`text-zinc-700 text-5xl playfair-display-bold`}>{t(`whatWe`)}</h1>
                    <div className="w-[0.2px] h-[55px] bg-zinc-800">
                    </div>
                    <p className={`text-zinc-800 poppins-regular mx-6 text-base`}> {t(`whatWeDet`)}</p>
                </div>

            </motion.section>
            <motion.section className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center mt-24 m-12 gap-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("right")}>
                <div className={`flex flex-col items-center justify-center text-center space-y-6`}>
                    <h2 className={`text-zinc-800 poppins-extralight text-2xl`}>{t(`about`)}</h2>
                    <h1 className={`text-zinc-700 text-5xl playfair-display-bold`}>{t(`ourMis`)}</h1>
                    <div className="w-[0.2px] h-[55px] bg-zinc-800">
                    </div>
                    <div className={`text-zinc-800 poppins-regular mx-6 text-start text-base`}>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>{t(`ourMisList.1`)}</strong> {t(`ourMisList.1Det`)}
                            </li>
                            <li><strong>{t(`ourMisList.2`)}</strong> {t(`ourMisList.2Det`)}
                            </li>
                            <li><strong>{t(`ourMisList.3`)}</strong> {t(`ourMisList.3Det`)}
                            </li>
                        </ul>
                        <p>
                            {t(`ourMisDet`)}
                        </p></div>
                </div>
                <div className="bg-black p-5 w-full h-auto">
                    <Image loading={"lazy"} src="/img/howWeImg/lab-dips.webp" alt="" width={1920} height={1080}/>
                </div>
            </motion.section>
            <motion.section className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center mt-24 m-12 gap-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("left")}>
                <div className="flex justify-center items-center">
                    <iframe
                        src="https://www.google.com/maps?q=Mahmutbey,+Gözde+Kutu+Plaza,+Soğuksu+Cd.+No:22,+34218+Bağcılar/İstanbul&output=embed"
                        width="100%"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Haritası üzerinde Mahmutbey, Gözde Kutu Plaza konumu"
                    ></iframe>
                </div>
                <div className={`flex flex-col items-center justify-center text-center space-y-6`}>
                    <div className={`flex flex-col items-center justify-center text-center mt-32 space-y-6`}>
                        <h2 className={`text-zinc-800 poppins-extralight text-2xl`}>{t(`about`)}</h2>
                        <h1 className={`text-zinc-700 text-5xl playfair-display-bold`}>{t(`loc`)}</h1>
                        <div className="w-[0.2px] h-[55px] bg-zinc-800">
                        </div>
                        <p className={`text-zinc-800 poppins-regular mx-6 text-base`}>
                            {t(`locDet`)}
                        </p>
                        <p className={`poppins-bold text-xl text-zinc-800 `}>{t(`ofHo`)}</p>
                        <p className={`text-base poppins-regular text-zinc-800 `}> {t(`ofHoDet`)}</p>
                        <ul className="list-disc pl-6 space-y-2 text-start text-zinc-800 text-base poppins-regular">
                            <li>{t(`ofHoDays.1`)}</li>
                            <li>{t(`ofHoDays.2`)}</li>
                            <li>{t(`ofHoDays.3`)}</li>
                        </ul>
                    </div>
                </div>
            </motion.section>
            <motion.section className="flex justify-center items-center mt-12 m-12 gap-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={fadeInFromSide("right")}
            >
                <div className={`flex flex-col items-center justify-center text-center space-y-6`}>
                    <div className={`flex flex-col items-center justify-center text-center space-y-6`}>
                        <h2 className={`text-zinc-800 poppins-extralight text-2xl`}>{t(`about`)}</h2>
                        <h1 className={`text-zinc-700 text-6xl playfair-display-bold`}>{t(`social`)}</h1>
                        <div className="w-[0.2px] h-[55px] bg-zinc-800">
                        </div>
                        <h1 className={`text-zinc-800 text-2xl poppins-extrabold`}>{t(`follow`)}</h1>
                        <div className={`flex justify-between items-center space-x-12`}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className={`hover:scale-125 transition`} icon={faFacebook} size="2x"
                                                 style={{color: "#4267B2"}} alt="facebook" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className={`hover:scale-125 transition`} icon={faInstagram} size="2x"
                                                 style={{color: "#C13584"}} alt="instagram" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className={`hover:scale-125 transition`} icon={faLinkedin} size="2x"
                                                 style={{color: "#0077B5"}} alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>
            <motion.div className="about bg-white pt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                        variants={fadeInFromSide("right")}
            >
                <section className="mx-12 pb-24">
                    <div className={`flex flex-col items-center justify-center text-center space-y-6 pb-2 mb-4`}>
                        <h2 className={`text-zinc-800 poppins-extralight text-2xl`}>{t(`about`)}</h2>
                        <h1 className={`text-zinc-700 text-4xl playfair-display-bold`}>{t(`ourGal`)}</h1>
                        <div className="w-[0.2px] h-[55px] bg-zinc-800">
                        </div>
                    </div>
                    <Slider {...sliderSettings}>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/depo.webp"
                                alt="Image 1"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/dikim.webp"
                                alt="Image 2"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/kesim.webp"
                                alt="Image 3"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/kesim2.webp"
                                alt="Image 4"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/kesim3.webp"
                                alt="Image 5"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/modelhane.webp"
                                alt="Image 6"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/pic1.webp"
                                alt="Image 7"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/plaza.webp"
                                alt="Image 8"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/plaza2.webp"
                                alt="Image 9"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/showroom.webp"
                                alt="Image 10"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="relative w-full px-6">
                            <Image
                                loading={"lazy"}
                                src="/aboutUs/tabela.webp"
                                alt="Image 11"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    </Slider>
                </section>
            </motion.div>
        </motion.div>
    );
}

export default About;
