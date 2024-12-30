import { useRouter } from "next/router";
import data from "../../data/blog-posts.json";
import Link from "next/link";

export default function BlogPage() {
    const router = useRouter();
    const { id } = router.query;
    const blog = data.find((blog) => blog.id.toString() === id);
    const {locale} = router;
    if (!blog) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl font-semibold text-gray-600">Blog not found</p>
            </div>
        );
    }
    return (
        <div className="max-w-4xl mx-auto p-6 pt-24 mt-12 pb-96">
            <h1 className="text-4xl font-bold text-zinc-800 mb-4 poppins-extrabold">{locale === "de" ? blog.title.de : blog.title.en}</h1>
            <p className="text-sm text-zinc-600 mb-4">{blog.category}</p>
            <div className="flex justify-between text-sm text-gray-500 mb-8">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
            </div>
            <div className="text-lg text-gray-700 space-y-4">
                <p>{locale === "de" ? blog.content.de : blog.content.en}</p>
            </div>
            <div className="mt-12">
                <Link href="/blog/" className="text-blue-500 hover:underline">
                    ← Back to Blog List
                </Link>
            </div>
        </div>
    );
}