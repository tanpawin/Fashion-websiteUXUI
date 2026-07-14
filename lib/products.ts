export type Product = {
    id: number
    name: string
    category: string
    description: string
    details: string
    price: string
    image: string
    specs: { label: string; value: string }[]
}

export const products: Product[] = [
    {
        id: 1,
        name: "Minimalist Shirt",
        category: "Shirts",
        description: "Cotton 100% สวมใส่สบาย ระบายอากาศได้ดี",
        details:
            "เสื้อเชิ้ตทรงมินิมอลที่ออกแบบมาเพื่อการใช้งานในชีวิตประจำวัน ตัดเย็บด้วยเส้นใยคอตตอนคุณภาพสูง ให้สัมผัสนุ่ม โปร่ง และคงทรงสวยตลอดวัน เหมาะสำหรับทั้งลุคฟอร์มอลและแคชชวล",
        price: "฿1,290",
        image: "/images/shirt1.png",
        specs: [
            { label: "Material", value: "Cotton 100%" },
            { label: "Fit", value: "Regular" },
            { label: "Care", value: "Machine wash cold" },
        ],
    },
    {
        id: 2,
        name: "Relaxed Linen Top",
        category: "Tops",
        description: "ผ้าลินินผสม น้ำหนักเบา เหมาะกับอากาศร้อนชื้น",
        details:
            "ท็อปผ้าลินินผสมที่ให้ความรู้สึกเบาและสบาย เหมาะกับสภาพอากาศร้อนชื้น ดีไซน์เรียบง่ายแต่ดูมีสไตล์ สามารถจับคู่กับกางเกงหรือกระโปรงได้หลากหลายสไตล์",
        price: "฿1,590",
        image: "/images/shirt2.png",
        specs: [
            { label: "Material", value: "Linen blend" },
            { label: "Fit", value: "Relaxed" },
            { label: "Care", value: "Hand wash recommended" },
        ],
    },
    {
        id: 3,
        name: "Essential Cotton Tee",
        category: "Basics",
        description: "เสื้อเบสิกทรง Oversized ตัดเย็บเรียบร้อย ใส่ได้ทุกโอกาส",
        details:
            "เสื้อยืดเบสิกที่เป็นพื้นฐานของตู้เสื้อผ้า ทรง Oversized ให้ความรู้สึกผ่อนคลาย ผ้าคอตตอนหนาแน่นพอดี ไม่บางจนเกินไป ใส่ได้ทั้งอยู่บ้านและออกนอกบ้าน",
        price: "฿990",
        image: "/images/shirt3.png",
        specs: [
            { label: "Material", value: "Cotton 100%" },
            { label: "Fit", value: "Oversized" },
            { label: "Care", value: "Machine wash" },
        ],
    },
]

export function getProductById(id: number): Product | undefined {
    return products.find((product) => product.id === id)
}
