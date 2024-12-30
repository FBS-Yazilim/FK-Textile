import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {useRouter} from "next/router";

function Index() {
    const router = useRouter();
    const {locale} = router;
    const items = {
        en: {
            detail: "Where quality meets trust. Providing sustainable textile solutions worldwide.",
            links : "Quick Links",
            howWeProduce: "How We Produce",
            manufacturing: "Manufacturing",
            aboutUs: "About Us",
            needToKnow: "Need To Know",
            blog: "Blog",
        }, de: {
            detail: "Wo Qualität auf Vertrauen trifft. Nachhaltige Textillösungen weltweit.",
            links : "Schnelle Links",
            howWeProduce: "Wie Wir Produzieren",
            manufacturing: "Produktion",
            aboutUs: "Über Uns",
            needToKnow: "Wissenswertes",
            blog: "Blog",
        },
    };
    const navItems = locale === "de" ? items.de : items.en;
    return (
        <footer className=" text-zinc-800 py-10">
            <div className="container mx-auto flex flex-wrap justify-between gap-10 px-5">
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold border-b-2 border-gray-800 pb-2 mb-4">FK Textile</h3>
                    <p className="text-sm mb-4">
                        {navItems.detail}
                    </p>
                    <p className="text-sm"><strong>Address:</strong> Mahmutbey, Gözde Kutu Plaza, Floor 2, Soğuksu Cd.
                        No:22, 34218 Bağcılar/İstanbul</p>
                    <p className="text-sm"><strong>Phone:</strong> +90 212 123 45 67</p>
                    <p className="text-sm mb-3"><strong>Email:</strong> info@fktekstil.com</p>
                    <iframe
                        src="https://www.google.com/maps?q=Mahmutbey,+Gözde+Kutu+Plaza,+Soğuksu+Cd.+No:22,+34218+Bağcılar/İstanbul&output=embed"
                        width="100%"
                        height="45%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Haritası üzerinde Mahmutbey, Gözde Kutu Plaza konumu"
                    ></iframe>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold border-b-2 border-gray-800 pb-2 mb-4">{navItems.links}</h3>
                    <ul className="space-y-2">
                        <li><Link href={"/"}><p className={"hover:text-zinc-400 transition-colors"}>Home</p></Link></li>
                        <li><Link href={"/howWeProduce"}><p className={"hover:text-zinc-400 transition-colors"}>{navItems.howWeProduce}</p></Link></li>
                        <li><Link href={"/manufacturing"}><p className={"hover:text-zinc-400 transition-colors"}>{navItems.manufacturing}</p></Link></li>
                        <li><Link href={"/about"}><p className={"hover:text-zinc-400 transition-colors"}>{navItems.aboutUs}</p></Link></li>
                        <li><Link href={"/needToKnow"}><p className={"hover:text-zinc-400 transition-colors"}>{navItems.needToKnow}</p></Link></li>
                        <li><Link href={"/blog"}><p className={"hover:text-zinc-400 transition-colors"}>{navItems.blog}</p></Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold border-b-2 border-gray-800 pb-2 mb-4">Social Media</h3>
                    <div className={`flex justify-around items-center space-x-12`}>
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
                                             style={{color: "#0077B5"}} alt="linkedin"/>
                        </a>
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-sm">© 2024 FK Textile. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Index;
