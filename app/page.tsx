import Header from "@/components/Header";
import Galeria from "@/components/Galeria";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex justify-center">
          <Header />
        </div>
        <div>
          <Galeria />
        </div>
      </main>
    </div>
  );
}
