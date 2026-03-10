import BrandName from "./BrandName";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const processSteps = [
  {
    number: "1",
    title: "Tell Us Everything",
    description:
      "Your product, your audience, your launch date. A quick intake captures brand voice, positioning, and goals—the details that make campaigns resonate.",
  },
  {
    number: "2",
    title: "Watch the Plan Unfold",
    description:
      "AI cross-references thousands of successful campaigns to build yours. Tailored messaging, channel strategy, and timing—all mapped out before a single email sends.",
  },
  {
    number: "3",
    title: "Sit Back & Launch",
    description:
      "One click deploys everything: email sequences, social campaigns, retargeting. It runs for weeks, months—nurturing leads while you focus on what you do best.",
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-20">
          <p className="eyebrow mb-6">HOW IT WORKS</p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            How <BrandName size="2xl" variant="onLight" className="md:text-5xl lg:text-6xl" /> Weaves Its Magic
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 md:space-y-24">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8 md:gap-16 items-center group cursor-default ${
                index % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Number Box */}
              <div className="aspect-square bg-primary rounded-lg flex items-center justify-center max-w-[250px] md:max-w-none mx-auto md:mx-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl backdrop-blur-sm border border-gold/10 group-hover:border-gold/30">
                <span className="font-cormorant text-7xl md:text-8xl lg:text-9xl font-semibold text-gold">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className={`transition-all duration-300 group-hover:scale-[1.02] p-6 rounded-lg group-hover:bg-card/50 group-hover:backdrop-blur-md ${index % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <h3 className="font-cormorant text-3xl md:text-4xl text-primary font-semibold mb-6">
                  {step.title}
                </h3>
                <p className="font-archivo text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
