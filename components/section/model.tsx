import { Button } from "../ui/button"
import Image from "next/image";
const model = () => {
    return (
        <>
        {/* 3. Model & Details (Split Layout) */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ฝั่งซ้าย: รูปภาพModel */}
          <div className="w-full md:w-1/2 aspect-4/5 relative bg-zinc-100">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
              <Image
                src="/images/model.jpg"
                alt="Shirt Hero Model"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ฝั่งขวา: Text รายละเอียด */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
            <h2 className="text-3xl font-light tracking-wide uppercase">
              The Modern Silhouette
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              นิยามใหม่ของการแต่งตัวที่เน้นความเรียบง่ายแต่แฝงไปด้วยรายละเอียดในแพทเทิร์นและการตัดเย็บ
              ออกแบบมาให้สามารถ Mix & Match ได้อย่างอิสระ
            </p>
            <Button
              variant="outline"
              className="rounded-none border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 py-6 uppercase tracking-widest text-xs transition-colors"
            >
              Explore the Look
            </Button>
          </div>
        </div>
      </section>
        </>
    )
}

export default model