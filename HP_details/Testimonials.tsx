import BrandName from "./BrandName";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredTestimonial = {
  quoteBefore: "We were hemorrhaging $3,000 monthly on an agency that delivered PowerPoints, not performance. ",
  quoteAfter: " gave us the same strategic depth with automated execution that actually moved metrics. Three months in, our cost per acquisition dropped 67% while lead volume tripled.",
  author: "Sarah Chen",
  title: "Founder, Digital Education Platform",
  meta: "Revenue Growth: +340% YoY",
  initial: "S",
};

const testimonials = [
  {
    quote:
      "No marketing background. Zero. The platform walked me through strategy development like a seasoned consultant, then executed autonomously. Our workshop sold out two weeks ahead of schedule—first time that's ever happened.",
    author: "Marcus Johnson",
    title: "Professional Development Coach",
    initial: "M",
  },
  {
    quote:
      "The automated nurture sequences are frighteningly good. 97% engagement rate across a 14-day campaign. Attendees showed up informed, excited, and ready to engage. This isn't marketing automation—it's relationship automation.",
    author: "Priya Patel",
    title: "Conference Director",
    initial: "P",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-accent-cream transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <p className="eyebrow mb-6">CASE EVIDENCE</p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            Results That Speak Volumes
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div 
          className={`bg-card p-8 md:p-12 lg:p-16 border border-muted rounded-lg relative mb-12 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-accent/40 cursor-default backdrop-blur-sm ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          {/* Giant Quote Mark */}
          <span className="absolute top-4 md:top-8 left-6 md:left-12 font-cormorant text-[8rem] md:text-[12rem] text-muted/40 leading-none select-none">
            "
          </span>
          
          <div className="relative pt-16 md:pt-20">
            <blockquote className="font-cormorant text-2xl md:text-3xl lg:text-4xl italic text-primary leading-relaxed mb-10 max-w-4xl">
              {featuredTestimonial.quoteBefore}<BrandName size="lg" variant="onLight" />{featuredTestimonial.quoteAfter}
            </blockquote>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-2xl md:text-3xl font-semibold text-gold">
                  {featuredTestimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-cormorant text-xl md:text-2xl text-primary font-semibold">
                  {featuredTestimonial.author}
                </p>
                <p className="font-archivo text-base md:text-lg text-muted-foreground">
                  {featuredTestimonial.title}
                </p>
                <p className="font-archivo text-sm text-accent font-semibold tracking-wide mt-1">
                  {featuredTestimonial.meta}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-card p-8 border-l-4 border-accent rounded-r-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:bg-card/80 cursor-default backdrop-blur-sm ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
            >
              <blockquote className="font-archivo text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-cormorant text-lg font-semibold text-gold">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-cormorant text-lg text-primary font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="font-archivo text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
