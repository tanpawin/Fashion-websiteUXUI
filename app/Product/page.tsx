import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light uppercase tracking-[0.3em]">
            Collection
          </h1>
          <p className="text-zinc-500 mt-4">
            Discover our latest fashion collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/Product/${product.id}`}
              className="group"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="mt-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                  {product.category}
                </p>

                <h2 className="mt-2 text-base font-medium group-hover:text-zinc-600 transition-colors">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                  {product.description}
                </p>

                <p className="mt-3 text-lg font-semibold">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Back */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-[0.3em] text-zinc-400 transition-all duration-300 hover:text-zinc-900 hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}