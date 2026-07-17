import Banner from "@/components/section/banner";
import ProductShowcase from "@/components/section/productshowcase";
import Model from "@/components/section/model";
import Footer from "@/components/section/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Banner />
      <ProductShowcase />
      <hr />
      <Model/>
      <Footer />
    </main>
  );
}
