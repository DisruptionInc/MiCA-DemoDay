const strategies = [
  {
    number: "01",
    title: "AIDA Funnel Automation",
    description:
      "Attention → Interest → Desire → Action. The century-old framework, algorithmically perfected for digital outreach.",
    highlight: "Industry standard for conversion optimization",
  },
  {
    number: "02",
    title: "Pre-Event Nurture Sequences",
    description:
      "12-touch email cadences that transform registrants into attendees. 55% show-up rate becomes 85%+.",
    highlight: "Reduces no-shows by up to 60%",
  },
  {
    number: "03",
    title: "Social Proof Cascades",
    description:
      "Testimonials, case studies, and FOMO triggers deployed at critical decision points across channels.",
    highlight: "Conversion lift: +35-60%",
  },
  {
    number: "04",
    title: "Scarcity & Urgency Triggers",
    description:
      "Early-bird pricing, limited seats, countdown timers. Ethical urgency that drives registrations.",
    highlight: "Registration increase: +25-40%",
  },
  {
    number: "05",
    title: "Multi-Channel Retargeting",
    description:
      "Email, social, display ads working in concert. 7-12 touchpoints that keep your event top-of-mind.",
    highlight: "AIDA + Hook Model integration",
  },
  {
    number: "06",
    title: "Post-Event Value Ladder",
    description:
      "Automated follow-ups that convert attendees into customers, customers into repeat buyers.",
    highlight: "LTV increase: 2-4x",
  },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const Strategies = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="strategies" 
      className={`section-padding bg-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <p className="eyebrow mb-6">THE PLAYBOOK</p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-8">
            Battle-Tested Frameworks
          </h2>
          <p className="body-text text-xl md:text-2xl">
            Every campaign is built on proven methodologies that have filled conference halls, 
            sold out workshops, and launched products worldwide. No guesswork—just execution.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={strategy.number}
              className={`group bg-background p-8 border border-muted rounded-lg card-lift accent-bar transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              <p className="font-cormorant text-5xl text-muted/60 mb-4 group-hover:text-muted/80 transition-colors">
                {strategy.number}
              </p>
              <h3 className="font-cormorant text-2xl md:text-3xl text-primary font-semibold mb-4">
                {strategy.title}
              </h3>
              <p className="body-text text-lg md:text-xl mb-4 leading-relaxed">
                {strategy.description}
              </p>
              <p className="font-archivo text-sm text-accent font-semibold tracking-wide uppercase">
                {strategy.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
