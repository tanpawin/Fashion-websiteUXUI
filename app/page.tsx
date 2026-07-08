import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* 1. Hero Banner Slider */}
      <section className="w-full relative">
        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3].map((slide) => (
              <CarouselItem key={slide} className="h-[70vh] relative">
                {/* เปลี่ยนเป็นรูป Banner จริง */}
                <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
                  <Image
                    src={`/images/banner${slide}.png`}
                    alt={`Banner ${slide}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-xl">
                      NEW COLLECTION
                    </h1>

                    <p className="mt-4 text-xl text-white tracking-[0.4em]">
                      SPRING / SUMMER 2026
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* ปุ่มกดเปลี่ยนเอง ซ่อนในมือถือ แสดงในจอใหญ่ */}
          <div className="hidden md:block">
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-8" />
          </div>
        </Carousel>
      </section>

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
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="border-0 shadow-none group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative bg-zinc-100 mb-4 overflow-hidden rounded-sm">
                  <Image
                    src={`/images/shirt${item}.png`} // 2. ใช้ Template Literal เผื่อให้เปลี่ยนรูปตามลูป item ได้ (เช่น shirt1.png, shirt2.png)
                    alt="Minimalist Shirt"
                    fill // ใช้ fill แทนการกำหนด width/height ตายตัวเพื่อให้ยืดหยุ่นตามกรอบ
                    sizes="(max-width: 768px) 100vw, 33vw" // ช่วยเรื่องความเร็วในการโหลดรูป
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out" //เวลา hover รูปจะซูมเข้าเบาๆ
                    priority={item === 1} // ให้รูปแรกโหลดเร็วขึ้น
                  />
                </div>

                <h3 className="text-base font-normal tracking-wide text-zinc-800 group-hover:text-zinc-500 transition-colors">
                  Minimalist Shirt
                </h3>
                <p className="text-zinc-400 text-xs mt-1 mb-2 font-light">
                  Cotton 100% สวมใส่สบาย ระบายอากาศได้ดี
                </p>
                <p className="font-medium text-sm text-zinc-900">฿1,290</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Model & Details (Split Layout) */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ฝั่งซ้าย: รูปภาพนายแบบ */}
          <div className="w-full md:w-1/2 aspect-4/5 relative bg-zinc-100">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
              <Image
                src="/images/model.jpg"
                alt="Model banner"
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
      <footer>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-zinc-500">
            &copy; 2026 Pawin Thitipong. ผลงานสำหรับการศึกษา
          </p>
        </div>
      </footer>
    </main>
  );
}
