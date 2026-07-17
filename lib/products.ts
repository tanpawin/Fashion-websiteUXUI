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
        name: "Minimalist Hoodie",
        category: "Hoodies",
        description: "เสื้อฮู้ดผ้าคอตตอนพรีเมียม ดีไซน์มินิมอล นุ่มสบาย ใส่ได้ทุกวัน",
        details:
            "Minimalist Hoodie ถูกออกแบบมาในสไตล์เรียบง่ายแต่ดูทันสมัย ผลิตจากผ้าคอตตอนคุณภาพสูง ให้สัมผัสนุ่ม ระบายอากาศได้ดี และสวมใส่สบายตลอดวัน ทรง Regular Fit ช่วยให้เคลื่อนไหวได้อย่างคล่องตัว เหมาะสำหรับการแต่งตัวในทุกโอกาส ไม่ว่าจะใส่เที่ยว ทำงาน หรือพักผ่อน สามารถจับคู่กับกางเกงยีนส์ กางเกงวอร์ม หรือกางเกงขาสั้นได้อย่างลงตัว",
        price: "฿1,290",
        image: "/images/shirt1.png",
        specs: [
            { label: "Material", value: "100% Premium Cotton" },
            { label: "Fit", value: "Regular Fit" },
            { label: "Features", value: "Adjustable Hood & Front Kangaroo Pocket" },
            { label: "Care", value: "Machine Wash Cold" },
        ],
    },
    {
        id: 2,
        name: "Relaxed Denim Jacket",
        category: "Jackets",
        description: "แจ็กเก็ตเดนิมทรง Relaxed น้ำหนักเบา สวมใส่ง่าย แมตช์ได้ทุกลุค",
        details:
            "Relaxed Denim Jacket มาพร้อมดีไซน์คลาสสิกที่ผสานความทันสมัย เนื้อผ้าเดนิมผสมให้สัมผัสนุ่มและมีน้ำหนักเบากว่าเดนิมทั่วไป สวมใส่สบายแม้ในอากาศร้อนชื้น ทรง Relaxed Fit ช่วยเพิ่มความคล่องตัว เหมาะสำหรับการสวมทับเสื้อยืดหรือเชิ้ตเพื่อสร้างลุคที่ดูมีสไตล์ในทุกวัน",
        price: "฿1,590",
        image: "/images/shirt2.png",
        specs: [
            { label: "Material", value: "Premium Denim Blend" },
            { label: "Fit", value: "Relaxed Fit" },
            { label: "Features", value: "Button Closure & Chest Pockets" },
            { label: "Care", value: "Hand Wash Recommended" },
        ],
    },
    {
        id: 3,
        name: "Oversized T-Shirt",
        category: "Shirts",
        description: "เสื้อยืดโอเวอร์ไซซ์ทรงหลวม ผ้านุ่ม ใส่สบาย แมตช์ง่ายทุกสไตล์",
        details:
            "Oversized T-Shirt คือเสื้อยืดที่ตอบโจทย์การแต่งตัวแบบเรียบง่ายแต่ดูดี ผลิตจากผ้าคอตตอนคุณภาพสูง เนื้อผ้านุ่ม ระบายอากาศได้ดี และคงรูปหลังการซัก ทรง Oversized ให้ลุคสบาย ๆ เหมาะกับการใส่ในชีวิตประจำวัน ไม่ว่าจะใส่เดี่ยว ๆ หรือเลเยอร์กับแจ็กเก็ตก็เข้ากันได้อย่างลงตัว",
        price: "฿990",
        image: "/images/shirt3.png",
        specs: [
            { label: "Material", value: "100% Premium Cotton" },
            { label: "Fit", value: "Oversized Fit" },
            { label: "Features", value: "Soft Fabric & Breathable" },
            { label: "Care", value: "Machine Wash Cold" },
        ],
    },

]

export function getProductById(id: number): Product | undefined {
    return products.find((product) => product.id === id)
}
