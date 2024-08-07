import "./globals.css";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
