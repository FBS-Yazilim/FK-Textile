import Link from "next/link";
import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Path = (props) => (<motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
/>);

function Index() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const {locale} = router;
    const items = {
        en: {
            home: "Home",
            howWeProduce: "How We Produce",
            manufacturing: "Manufacturing",
            aboutUs: "About Us",
            needToKnow: "Need To Know",
            blog: "Blog",
        }, de: {
            home: "Startseite",
            howWeProduce: "Wie Wir Produzieren",
            manufacturing: "Produktion",
            aboutUs: "Über Uns",
            needToKnow: "Wissenswertes",
            blog: "Blog",
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const changeLanguage = (lang) => {
        router.push(router.asPath, router.asPath, {locale: lang});
    };
    const navItems = locale === "de" ? items.de : items.en;
    return (<div
        className={`${scrolled ? "bg-black bg-opacity-80 backdrop-blur-lg" : "lg:bg-gradient-to-b lg:from-black lg:to-transparent bg-black bg-opacity-80 backdrop-blur-lg lg:backdrop-blur-0 lg:bg-transparent"} transition-colors duration-300 mt-0 py-2 fixed w-full top-0 z-50`}
    >
        <div className=" mx-auto">
            <div className="flex flex-col lg:mr-12 lg:flex-row justify-around lg:items-center">
                {/* Telefon navbar üst kısım */}
                <div className="flex flex-row justify-around mt-5">
                    <div className="lg:hidden max-w-16">
                        <Link href="/">
                            <img src="../img/fklogo-white-navbar.webp" alt=""/>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link href="/">
                            <p className="navItem lg:hidden text-white text-lg font-bold mr-8 uppercase">
                                fk textile
                            </p>
                        </Link>
                    </div>
                    <div className="lg:hidden ">
                        <motion.nav initial={false} animate={menuOpen ? "open" : "closed"} custom={12}>
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                <svg width="23" height="23" viewBox="0 0 23 23">
                                    <Path
                                        variants={{
                                            closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"},
                                        }}
                                    />
                                    <Path
                                        d="M 2 9.423 L 20 9.423"
                                        variants={{
                                            closed: {opacity: 1}, open: {opacity: 0},
                                        }}
                                        transition={{duration: 0.1}}
                                    />
                                    <Path
                                        variants={{
                                            closed: {d: "M 2 16.346 L 20 16.346"}, open: {d: "M 3 2.5 L 17 16.346"},
                                        }}
                                    />
                                </svg>
                            </button>
                        </motion.nav>
                    </div>
                </div>
                {/* Navbar bölümü */}
                <div
                    className={`${menuOpen ? "max-h-screen mb-12 lg:mb-0" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out text-lg lg:text-base flex flex-col lg:max-h-full lg:flex-row items-center text-white space-y-5 lg:space-y-0 lg:space-x-12 font-serif`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Link href="/">
                        <img
                            className={"w-12 mt-2 hidden lg:block hover:opacity-60 navItem"}
                            src="../img/fklogo-white-navbar.webp"
                            alt="Logo"
                        />
                    </Link>
                    <Link href="/howWeProduce">
                        <p className="navItem">{navItems.howWeProduce}</p>
                    </Link>
                    <Link href="/manufacturing">
                        <p className="navItem">{navItems.manufacturing}</p>
                    </Link>
                    <Link href="/about">
                        <p className="navItem">{navItems.aboutUs}</p>
                    </Link>
                    <Link href="/needToKnow">
                        <p className="navItem">{navItems.needToKnow}</p>
                    </Link>
                    <Link href="/blog/">
                        <p className="navItem">{navItems.blog}</p>
                    </Link>
                    <h1 onClick={() => changeLanguage("de")} className={"lg:hidden playfair-display-bold"}>Deutsch</h1>
                    <h1 onClick={() => changeLanguage("en")} className={"lg:hidden playfair-display-bold"}>English</h1>
                </div>
                <Menu as="div" className="relative text-left hidden lg:inline-block">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  transition duration-300 items-center">
                            {locale === "de" ?
                                <img src={"https://flagcdn.com/w320/de.png"} alt="german" className={"w-auto h-4"}/>
                                :
                                <img src={"https://flagcdn.com/w320/us.png"} alt="german" className={"w-auto h-4"}/>
                            }
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                            <MenuItem className={"hover:bg-zinc-200 transition duration-300 cursor-pointer px-3"} onClick={() => changeLanguage("de")}>
                                <div className={"flex items-center "}>
                                    <img src={"https://flagcdn.com/w320/de.png"} alt="german" className={"w-auto h-4"}/>
                                    <h1
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Deutsch
                                    </h1>
                                </div>
                            </MenuItem>
                            <MenuItem className={"hover:bg-zinc-200 transition duration-300 cursor-pointer px-3"} onClick={() => changeLanguage("en")}>
                                <div className={"flex items-center hover:bg-zinc-200 transition duration-300 cursor-pointer"}>
                                    <img src={"https://flagcdn.com/w320/us.png"} alt="german" className={"w-auto h-4"}/>
                                    <h1
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                    English
                                    </h1>
                                </div>

                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </div>
        </div>

    </div>);
}

export default Index;