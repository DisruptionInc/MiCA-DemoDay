import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import EyeCharacter from './components/EyeCharacter';
import PeekingVignette from './components/PeekingVignette';
import './App.css';

// Interest points the hero eyeball wanders to (as fraction of viewport)
const WANDER_POINTS = [
  { x: 0.50, y: 0.48 },  // Centre — near hero text
  { x: 0.32, y: 0.28 },  // Top-left heading area
  { x: 0.68, y: 0.28 },  // Top-right
  { x: 0.24, y: 0.68 },  // Bottom-left CTA
  { x: 0.76, y: 0.68 },  // Bottom-right CTA
  { x: 0.50, y: 0.78 },  // Bottom centre button
  { x: 0.18, y: 0.50 },  // Left edge lurk
  { x: 0.82, y: 0.50 },  // Right edge lurk
  { x: 0.50, y: 0.20 },  // Top centre — title area
];

export default function App() {
  // ── Mouse position (normalised 0–1) for gaze target  ──────────────────────
  const [mouseNorm, setMouseNorm] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouseNorm({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // ── Wandering hero position ────────────────────────────────────────────────
  // Very slow, floaty springs so the movement feels organic
  const wanderX = useSpring(window.innerWidth * 0.5, { stiffness: 18, damping: 14 });
  const wanderY = useSpring(window.innerHeight * 0.48, { stiffness: 18, damping: 14 });
  const wanderIndexRef = useRef(0);

  useEffect(() => {
    const pickNext = () => {
      // Never pick the same point twice in a row
      let next = Math.floor(Math.random() * WANDER_POINTS.length);
      if (next === wanderIndexRef.current) next = (next + 1) % WANDER_POINTS.length;
      wanderIndexRef.current = next;

      const pt = WANDER_POINTS[next];
      wanderX.set(window.innerWidth * pt.x);
      wanderY.set(window.innerHeight * pt.y);

      // Stay at this point for 2.5–5.5 seconds before moving on
      setTimeout(pickNext, Math.random() * 3000 + 2500);
    };

    // First wander after 2 seconds
    const t = setTimeout(pickNext, 2000);
    return () => clearTimeout(t);
  }, [wanderX, wanderY]);

  // ── Peeking vignette logic ─────────────────────────────────────────────────
  const [isPeeking, setIsPeeking] = useState(false);

  const triggerPeek = () => {
    if (isPeeking) return;
    setIsPeeking(true);
    setTimeout(() => setIsPeeking(false), 2500); // Eyeballs peek for 2.5s then retreat
  };

  // Idle-triggered peeking — user hasn't moved mouse or scrolled for 3s
  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;
    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(triggerPeek, 3000);
    };
    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('scroll', resetIdle);
    resetIdle(); // Start the timer immediately
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('scroll', resetIdle);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="page">
      {/* ── Landing page content ─────────────────────────────────────── */}
      <div className="hero-text">
        <div className="brand-label">MiCA</div>
        <h1 className="hero-headline">
          Your AI<br />
          <span className="accent">Marketing Partner</span>
        </h1>
        <p className="hero-sub">
          Create full-stack campaigns in minutes.<br />
          Click the eyeball if you dare.
        </p>
        <div className="cta-row">
          <button className="btn-primary">Get Started</button>
          <button className="btn-ghost">See How It Works</button>
        </div>
      </div>

      {/* ── Hero wandering eyeball ────────────────────────────────────── */}
      <motion.div className="hero-eye-wrapper" style={{ x: wanderX, y: wanderY }}>
        <EyeCharacter />
      </motion.div>

      {/* ── Peeking vignette — always mounted so exit animations play ─── */}
      <PeekingVignette visible={isPeeking} gazeX={mouseNorm.x} gazeY={mouseNorm.y} />
    </div>
  );
}
