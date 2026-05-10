const DecorativeLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Organic vine-like SVG lines */}
      <svg
        className="absolute w-full h-full opacity-[0.15]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main flowing vine from top left */}
        <path
          d="M-50 100 Q 200 150, 300 300 T 500 450 T 650 350 T 800 500 T 950 400 T 1100 550 T 1300 450 T 1500 600 T 1700 500 T 1920 650"
          stroke="hsl(156, 27%, 23%)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
        />
        
        {/* Secondary vine from bottom left */}
        <path
          d="M-100 800 Q 100 700, 250 750 T 450 650 T 600 700 T 800 600 T 1000 700 T 1200 600 T 1400 700 T 1600 650 T 1800 750 T 2000 700"
          stroke="hsl(150, 14%, 55%)"
          strokeWidth="1.5"
          fill="none"
          className="animate-draw-line delay-500"
        />
        
        {/* Delicate branch from right */}
        <path
          d="M1920 200 Q 1700 250, 1600 350 T 1400 300 T 1200 400 T 1000 350 T 800 450 T 600 400 T 400 500 T 200 450 T 0 550"
          stroke="hsl(156, 24%, 29%)"
          strokeWidth="1"
          fill="none"
          className="animate-draw-line delay-1000"
        />
        
        {/* Spiral accent top right */}
        <path
          d="M1600 50 Q 1650 100, 1620 150 T 1580 180 T 1550 220 T 1520 280 T 1500 350"
          stroke="hsl(156, 27%, 23%)"
          strokeWidth="1.5"
          fill="none"
          className="animate-draw-line delay-200"
        />
        
        {/* Small tendril left */}
        <path
          d="M100 500 Q 150 450, 200 480 T 280 420 T 350 460 T 420 400"
          stroke="hsl(150, 14%, 55%)"
          strokeWidth="1"
          fill="none"
          className="animate-draw-line delay-700"
        />
        
        {/* Flowing curve center */}
        <path
          d="M600 1080 Q 700 900, 850 950 T 1000 800 T 1150 850 T 1300 700 T 1450 750 T 1600 600"
          stroke="hsl(156, 27%, 23%)"
          strokeWidth="1.5"
          fill="none"
          className="animate-draw-line delay-300"
        />
        
        {/* Elegant S-curve */}
        <path
          d="M0 600 Q 200 500, 400 600 T 800 500 T 1200 600 T 1600 500 T 1920 600"
          stroke="hsl(156, 24%, 29%)"
          strokeWidth="1"
          fill="none"
          className="animate-draw-line delay-800"
        />
        
        {/* Small decorative circles */}
        <circle cx="300" cy="300" r="3" fill="hsl(156, 27%, 23%)" className="animate-pulse-slow" />
        <circle cx="800" cy="500" r="2" fill="hsl(150, 14%, 55%)" className="animate-pulse-slow delay-200" />
        <circle cx="1200" cy="350" r="4" fill="hsl(156, 24%, 29%)" className="animate-pulse-slow delay-400" />
        <circle cx="1500" cy="600" r="2.5" fill="hsl(156, 27%, 23%)" className="animate-pulse-slow delay-600" />
        <circle cx="500" cy="700" r="3" fill="hsl(150, 14%, 55%)" className="animate-pulse-slow delay-300" />
        <circle cx="1000" cy="200" r="2" fill="hsl(156, 27%, 23%)" className="animate-pulse-slow delay-500" />
        
        {/* Subtle leaf shapes */}
        <ellipse cx="400" cy="400" rx="8" ry="4" fill="hsl(156, 27%, 23%)" transform="rotate(45 400 400)" className="opacity-60" />
        <ellipse cx="900" cy="550" rx="6" ry="3" fill="hsl(150, 14%, 55%)" transform="rotate(-30 900 550)" className="opacity-50" />
        <ellipse cx="1400" cy="380" rx="7" ry="3.5" fill="hsl(156, 24%, 29%)" transform="rotate(60 1400 380)" className="opacity-55" />
        <ellipse cx="200" cy="650" rx="5" ry="2.5" fill="hsl(156, 27%, 23%)" transform="rotate(-45 200 650)" className="opacity-45" />
        <ellipse cx="1100" cy="250" rx="6" ry="3" fill="hsl(150, 14%, 55%)" transform="rotate(30 1100 250)" className="opacity-50" />
      </svg>
    </div>
  );
};

export default DecorativeLines;