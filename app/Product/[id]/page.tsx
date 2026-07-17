import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import Footer from "@/components/section/footer";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-transform mb-12 md:mb-16"
        >
          <span aria-hidden="true">←</span>
          Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="aspect-3/4 relative bg-zinc-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-light tracking-wide uppercase mb-4">
              {product.name}
            </h1>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="border-t border-zinc-200 pt-8 mb-8">
              <p className="text-2xl font-light tracking-wide text-zinc-900">
                {product.price}
              </p>
              <p className="text-xs text-zinc-400 mt-2 tracking-wide">
                ราคาอ้างอิง — ไม่มีการขายสินค้าผ่านเว็บไซต์นี้
              </p>
            </div>

            <p className="text-zinc-600 text-sm leading-relaxed mb-10">
              {product.details}
            </p>

            <dl className="space-y-4 border-t border-zinc-200 pt-8">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-baseline gap-8 text-sm"
                >
                  <dt className="text-zinc-400 uppercase tracking-widest text-xs">
                    {spec.label}
                  </dt>
                  <dd className="text-zinc-800 text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
