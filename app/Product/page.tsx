import Link from "next/link"
import { products } from "@/lib/products"

export default function ProductIndexPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-2xl font-light uppercase tracking-widest mb-4">
                        Collection
                    </h1>
                    <p className="text-zinc-500 text-sm max-w-md mx-auto">
                        สำรวจผลงานการออกแบบแฟชั่นในคอลเลกชันนี้
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/Product/${product.id}`}
                            className="group block"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                {product.category}
                            </p>
                            <h2 className="text-base font-normal tracking-wide text-zinc-800 group-hover:text-zinc-500 transition-colors">
                                {product.name}
                            </h2>
                            <p className="text-zinc-400 text-xs mt-1 font-light">
                                {product.description}
                            </p>
                            <p className="font-medium text-sm text-zinc-900 mt-2">
                                {product.price}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/"
                        className="text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    )
}
