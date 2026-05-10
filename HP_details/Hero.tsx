import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandName from "./BrandName";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [{
  number: "01",
  title: "Strategic Foundation",
  description: "Share your product vision, target audience, and launch timeline"
}, {
  number: "02",
  title: "Intelligent Architecture",
  description: "AI analyzes market positioning and crafts your comprehensive campaign"
}, {
  number: "03",
  title: "Automated Excellence",
  description: "Multi-channel execution with precision timing and adaptive nurturing"
}];

const dynamicPhrases = [
  "runs itself",
  "never sleeps",
  "delivers results",
  "feels like magic",
  "builds your audience",
  "converts on autopilot",
  "knows your customer",
  "is cost effective",
  "handles creativity for you",
  "is optimally deployed",
  "is relevant and relatable",
  "is no fuss!",
  "is easy as pie",
  "just works!",
  "understands your needs",
  "is hassle free",
  "will steal your heart",
  "makes it worth it",
  "hooks & connects",
  "delivers & keeps delivering",
  "is made just for you",
  "makes you breathe easy",
  "is tailor-made for you",
  "loves a challenge",
  "adapts & executes",
];

const Hero = () => {
  const typewriterText = useTypewriter({
    words: dynamicPhrases,
    typingSpeed: 40,
    deletingSpeed: 20,
    pauseDuration: 800,
  });

  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`min-h-screen bg-background pt-32 md:pt-48 pb-16 md:pb-24 px-8 md:px-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-[1600px] mx-auto">
        {/* Left Column - Content */}
        <div className="animate-fade-in-up">
          <p className="eyebrow mb-8 text-base md:text-lg"><BrandName size="sm" variant="onLight" /> - Creative Intelligence Meets Execution</p>
          
          {/* Fixed height container to prevent jumping */}
          <div className="h-[120px] md:h-[140px] lg:h-[160px] mb-8">
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl">
              Marketing that{" "}
              <span className="heading-italic">{typewriterText}</span>
              <span className="heading-italic animate-pulse">|</span>
            </h1>
          </div>
          
          <p className="body-text text-xl md:text-2xl max-w-[650px] mb-10 leading-relaxed">
            <BrandName size="sm" variant="onLight" /> is your professional Marketing Agent that delivers not just a comprehensive marketing plan built on proven frameworks, it also executes every campaign automatically across all channels until your launch day!
          </p>

          <div className="mb-10 rounded-lg p-8 bg-card/10 border border-primary/30 backdrop-blur-xl shadow-xl relative overflow-hidden">
            {/* Green gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary" />
            
            <div className="relative">
              <p className="font-archivo text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                <span className="text-primary font-bold">Tell <BrandName size="md" variant="onLight" />:</span>{" "}
                Your product & launch date
              </p>
              <p className="font-archivo text-xl md:text-2xl text-foreground leading-relaxed font-medium mt-3">
                <span className="text-primary font-bold"><BrandName size="md" variant="onLight" /> delivers:</span>{" "}
                Tone-perfect marketing plan & one-click campaign execution
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="primary" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#waitlist">Get Early Access</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#strategies">See the Magic</a>
            </Button>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="flex flex-col gap-8 animate-fade-in-up delay-200">
          {/* Demo Video Placeholder */}
          <div className="relative aspect-video bg-primary rounded-lg border-2 border-muted flex items-center justify-center group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent" />
            <div className="relative flex flex-col items-center gap-4 text-primary-foreground">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-gold fill-gold" />
              </div>
              <p className="font-archivo text-sm text-center px-4">
                Demo Video — See <BrandName size="sm" variant="onDark" /> in Action
              </p>
            </div>
          </div>

          {/* 3-Step Process Box */}
          <div className="gradient-forest rounded-lg p-8 text-primary-foreground backdrop-blur-md border border-gold/20">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="animate-slide-in-left p-4 rounded-lg transition-all duration-300 hover:bg-card/10 hover:scale-[1.02] hover:backdrop-blur-lg cursor-default" 
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <p className="font-cormorant text-3xl text-gold mb-1">{step.number}</p>
                  <h3 className="font-archivo text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="font-archivo text-base opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;