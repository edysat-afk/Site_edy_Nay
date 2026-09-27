import { AiBackgroundCanvas } from "@/components/ui/AiBackgroundCanvas";
import { TickerTypewriter } from "@/components/ui/TickerTypewriter";
import { Nav } from "@/components/sections/Nav";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { Credencial } from "@/components/sections/Credencial";
import { ServicosGrid } from "@/components/sections/ServicosGrid";
import { Processo } from "@/components/sections/Processo";
import { Ia } from "@/components/sections/Ia";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* Interactive AI background particle canvas */}
      <AiBackgroundCanvas />

      {/* Top Header Glass Bar Navigation */}
      <Nav />

      {/* Main Full-Width Content Area */}
      <div className="relative z-10">
        <main>
          {/* High-Impact Hero Carousel */}
          <HeroCarousel />
          <TickerTypewriter />
          <Credencial />
          <ServicosGrid />
          <Processo />
          <Ia />
          <QuemSomos />
          <Faq />
          <CtaFinal />
        </main>
        <Footer />
      </div>
    </div>
  );
}
