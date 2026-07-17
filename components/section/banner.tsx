import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const banner = () => {
    return (
        <>
            {/* 1. Hero Banner Slider */}
            < section className="w-full relative" >
                <Carousel className="w-full">
                    <CarouselContent>
                        {[1, 2, 3].map((slide) => (
                            <CarouselItem key={slide} className="relative h-[50vh] md:h-[65vh] lg:h-[75vh]">
                                <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
                                    <Image
                                        src={`/images/banner${slide}.png`}
                                        alt={`Banner ${slide}`}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                        loading="eager"
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
            </section >
        </>
    )
}

export default banner