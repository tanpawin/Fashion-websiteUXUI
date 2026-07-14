import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"

const productshowcase = () => {
    return (
        <>
            {/* 2. Product Showcase */}
            <section className="container mx-auto px-4 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-light uppercase tracking-widest mb-4">
                        Featured
                    </h2>
                    <p className="text-zinc-500 max-w-md mx-auto text-sm">
                        คัดสรรออกแบบมาเพื่อการสวมใส่ในทุกๆ วัน
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link key={product.id} href={`/Product/${product.id}`}>
                        <Card
                            className="border-0 shadow-none group cursor-pointer"
                        >
                            <CardContent className="p-0">
                                <div className="aspect-[3/4] relative bg-zinc-100 mb-4 overflow-hidden rounded-sm">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                                        priority={product.id === 1}
                                    />
                                </div>

                                <h3 className="text-base font-normal tracking-wide text-zinc-800 group-hover:text-zinc-500 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-zinc-400 text-xs mt-1 mb-2 font-light">
                                    {product.description}
                                </p>
                                <p className="font-medium text-sm text-zinc-900">{product.price}</p>
                            </CardContent>
                        </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default productshowcase