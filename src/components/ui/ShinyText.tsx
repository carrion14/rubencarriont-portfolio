"use client"

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
}

const ShinyText = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  pauseOnHover = false,
  direction = 'left',
}: ShinyTextProps) => {
  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  const gradientDeg = direction === 'left' ? spread : 360 - spread;
  const animName = direction === 'left' ? 'shine-left' : 'shine-right';

  const inlineCss = `
    .shiny-${direction}-${speed} {
      background-image: linear-gradient(${gradientDeg}deg, ${color} 0%, ${color} 30%, ${shineColor} 50%, ${color} 70%, ${color} 100%) !important;
      animation: ${animName} ${speed}s linear infinite;
    }
  `;

  return (
    <>
      <style>{inlineCss}</style>
      <span
        className={`shiny-text shiny-${direction}-${speed} ${className}`}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            (e.target as HTMLElement).style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            (e.target as HTMLElement).style.animationPlayState = 'running';
          }
        }}
      >
        {text}
      </span>
    </>
  );
};

export default ShinyText;
