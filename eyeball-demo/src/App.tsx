import { AnimationProvider } from './AnimationContext';
import EyeCharacter from './EyeCharacter';

export default function App() {
  return (
    <AnimationProvider>
      <div style={{
        width: '100vw',
        height: '100vh',
        background: '#08080f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        fontFamily: 'system-ui, sans-serif',
      }}>
        <EyeCharacter size={220} version="modern" />
        <p style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: 13,
          letterSpacing: '0.08em',
          userSelect: 'none',
        }}>
          click to giggle
        </p>
      </div>
    </AnimationProvider>
  );
}
