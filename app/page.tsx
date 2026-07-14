import Banner from "@/components/section/banner";
import ProductShowcase from "@/components/section/productshowcase";
import Model from "@/components/section/model";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Banner />
      <ProductShowcase />
      <Model/>
      <footer>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-zinc-500">
            &copy; {new Date().getFullYear()} Pawin Thitipong. ผลงานสำหรับการศึกษา
          </p>
        </div>
      </footer>
    </main>
  );
}
