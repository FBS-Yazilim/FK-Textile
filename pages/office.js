import {motion, AnimatePresence, useScroll, useTransform} from "framer-motion";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle,faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
function Office() {
    const [expanded, setExpanded] = useState(null);
    const items = [
        {
            name: "Custom Production & Premium Quality Standards",
            details:
                "At FK Textile, we specialize in offering custom-made products that meet the highest quality standards. Each item is meticulously crafted, using the finest materials to ensure durability and excellence. Rest assured that your order will be produced with the utmost care and precision.",
            imgUrl: "https://via.placeholder.com/800x400?text=Custom+Production"
        },
        {
            name: "Direct Export to Customers",
            details:
                "We offer a seamless experience by directly exporting to customers across Europe. With fast delivery, efficient logistics, and transparent tracking, we ensure a smooth and stress-free purchasing process. You can relax knowing that your order will arrive safely and on time.",
            imgUrl: "https://via.placeholder.com/800x400?text=Direct+Export"
        },
        {
            name: "Trend-Aligned Designs for the European Market",
            details:
                "Our designs are inspired by the latest European fashion trends, ensuring that we offer stylish, unique collections that are timely and in demand. You can trust that each product reflects the best of modern fashion, tailored to meet your needs and preferences.",
            imgUrl: "https://via.placeholder.com/800x400?text=Trend-Aligned+Designs"
        },
        {
            name: "Sustainable Production & Eco-Friendly Approach",
            details:
                "At FK Textile, we are committed to sustainability. By using organic fabrics, recyclable materials, and eco-friendly processes, we create products that not only meet high standards of quality but also support a greener planet. Feel confident knowing that your purchase contributes to a sustainable future.",
            imgUrl: "https://via.placeholder.com/800x400?text=Sustainable+Production"
        },
        {
            name: "Fast & Reliable Logistics to Europe",
            details:
                "Our robust logistics network ensures that your orders are delivered safely and efficiently. With fast shipping, reliable service, and easy tracking, we provide a stress-free experience from purchase to delivery. You can relax knowing your order is in trusted hands.",
            imgUrl: "https://via.placeholder.com/800x400?text=Fast+Logistics"
        },
        {
            name: "Exceptional Customer Satisfaction",
            details:
                "At FK Textile, customer satisfaction is our priority. We offer personalized service, quick responses, and a friendly team to ensure your complete happiness with every order. From the moment you place your order to the final delivery, we are here to serve you.",
            imgUrl: "https://via.placeholder.com/800x400?text=Customer+Satisfaction"
        },
        {
            name: "High Production Capacity & Flexibility",
            details:
                "FK Textile’s large-scale production capabilities ensure that we can efficiently meet both small and large orders. Our flexibility allows us to customize orders based on your specific needs, ensuring that we deliver exactly what you need, when you need it.",
            imgUrl: "https://via.placeholder.com/800x400?text=High+Capacity"
        },
        {
            name: "Strong Brand & Reputation",
            details:
                "With a solid reputation for reliability, FK Textile has earned the trust of clients across Europe. We are known for our consistent quality, dependable service, and dedication to excellence. Choose us with confidence, and enjoy a seamless experience every time.",
            imgUrl: "https://via.placeholder.com/800x400?text=Strong+Brand"
        },
        {
            name: "Innovative Product Development & Design",
            details:
                "FK Textile is driven by innovation. Our creative designs and cutting-edge technology allow us to stay ahead of the curve, delivering products that combine both style and functionality. With us, you can always expect something new, fresh, and exciting.",
            imgUrl: "https://via.placeholder.com/800x400?text=Innovative+Design"
        },
    ];

    const {scrollY} = useScroll();
    return (
        <div className="bg-gray-100 max-w-screen-2xl mx-auto rounded-xl p-6 m-6 mt-24">
            <Head>
                <title>FK TEXTILE - HOME PAGE</title>
            </Head>
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1%, rgba(0,0,0,0) 70%)",
                    animation: "moveBackground 20s infinite alternate",
                }}
            ></div>
            <p className="text-6xl font-extrabold text-zinc-800 uppercase text-center my-12 playfair-display-bold ">
                Welcome to Our Office
            </p>
            <div className="mb-12 site-4xl-container">
                <h3 className="text-3xl font-semibold text-zinc-600 poppins-medium mb-4 drop-shadow-md">
                    Explore Our Office: 360° Virtual Tour
                </h3>
                <div className="relative h-96 rounded-lg shadow-xl overflow-hidden border border-gray-300">
                    <iframe
                        src="https://www.example.com/360-tour"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        title="360 Virtual Tour"
                    ></iframe>
                </div>
            </div>
            <section className=" p-10 relative z-20">
                <div className="site-4xls-container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl gap-10 lg:gap-8  mx-auto"
                         style={{}}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 rounded-lg shadow-lg p-4 relative overflow-hidden"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => setExpanded(expanded === index ? null : index)}
                                >
                                    <h1 className="text-xl font-bold text-zinc-800">{item.name}</h1>
                                    <motion.div
                                        className=" text-2xl"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: expanded === index ? 45 : 0 }}
                                    >
                                        <FontAwesomeIcon icon={expanded === index ? faPlusCircle : faMinusCircle} className={`transition duration-300 ${expanded === index ? "text-gray-400" : "text-white"}`} />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {expanded === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 text-zinc-800"
                                        >
                                            <p>{item.details}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
            <div className="mb-12 site-4xl-container">
                <h3 className="text-4xl font-semibold text-zinc-800 text-center my-12 drop-shadow-md playfair-display-bold">
                    Contact Our Staff
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        className="bg-gray-300 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
                        <a
                            href="mailto:staff@ourcompany.com"
                            className="poppins-extrabold text-xl inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:scale-110 transition duration-200"
                        >
                            Email Us
                        </a>
                    </div>
                    <div
                        className="bg-gray-300 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="poppins-extrabold text-xl inline-block bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-full hover:scale-110 transition duration-200"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Office;