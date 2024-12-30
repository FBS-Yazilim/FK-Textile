import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
import blogPosts from "../../data/blog-posts.json";
function Index() {

    const router = useRouter();
    const {locale} = router;    const [quote, setQuote] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const canvasRef = useRef(null);
    const filteredPosts =
        category === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === category);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const displayedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    useEffect(() => {
        const quotes = [
            "Fashion fades, style is eternal.",
            "The best way to predict the future is to create it.",
            "Sustainability is no longer about doing less harm. It's about doing more good.",
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const stars = [];
        const numStars = 100;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        const createStars = () => {
            stars.length = 0; // Clear existing stars
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2,
                    speed: Math.random() * 0.5 + 0.2,
                });
            }
        };
        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
        };
        const animateStars = () => {
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });
            drawStars();
            requestAnimationFrame(animateStars);
        };
        const initialize = () => {
            resizeCanvas();
            createStars();
            drawStars();
            animateStars();
        };
        window.addEventListener("resize", () => {
            resizeCanvas();
            createStars();
        });
        initialize();
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);
    const categories = [
        "All",
        "Printing Techniques",
        "Embroidery",
        "Market Advantages",
        "Fashion Trends",
        "Quality Control",
        "Global Impact",
    ];
    return (
        <motion.div
            className="min-h-screen bg-black text-white py-12 px-6 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Head>
                <title>FK TEXTILE - BLOG</title>
            </Head>
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
            ></canvas>
            <div className="relative z-10 pt-12">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.p
                        className="text-xl text-gray-300 italic"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                    >
                        "{quote}"
                    </motion.p>
                </div>

                {/* Main Header */}
                <header className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h1
                        className="lg:text-6xl text-4xl font-extrabold text-white leading-tight poppins-extrabold"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                    >
                        All Inclusive Clothing Manufacturer
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-400 mt-6"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3, duration: 1}}
                    >
                        Inspiring stories from the textile world, production processes, and sustainability!
                    </motion.p>
                </header>
                <div className="lg:flex lg:space-y-0 lg:space-x-8 grid grid-cols-1 lg:grid-cols-3 items-center justify-center space-y-4 mb-16">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            className={`px-6 py-3 text-lg rounded-full font-semibold ${
                                category === cat
                                    ? "bg-white text-black"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                            onClick={() => setCategory(cat)}
                            whileHover={{scale: 1.1}}
                            transition={{type: "spring", stiffness: 300}}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
                <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 mb-16">
                    {displayedPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-gray-800 shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <motion.h3
                                className="text-3xl font-semibold text-white mb-4 poppins-light"
                            >
                                {locale === "de" ? post.title.de : post.title.en}
                            </motion.h3>
                            <p className="text-sm text-gray-400 mb-4">
                                By {post.author} on {new Date(post.date).toLocaleDateString()}
                            </p>
                            <div className="flex space-x-2 mb-4">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={`/blog/${post.id}`}
                            className="text-gray-300 hover:underline text-lg font-semibold"
                            >
                                Read More
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center space-x-4">
                    {Array.from({length: totalPages}, (_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className="px-4 py-2 text-lg bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
                            whileHover={{scale: 1.1}}
                            transition={{type: "spring", stiffness: 300}}
                        >
                            {i + 1}
                        </motion.button>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="text-center mt-20 bg-gray-800 p-10 rounded-xl shadow-lg">
                    <motion.h2
                        className="text-3xl font-semibold text-white mb-6"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration: 1}}
                    >
                        FK TEKSTİL BLOG
                    </motion.h2>
                </div>
            </div>
        </motion.div>
    );
}

export default Index;




