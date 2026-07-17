#!/bin/bash
generate_svg() {
  local file="$1"
  local name="$2"
  local color="$3"
  local dir=$(dirname "$file")
  mkdir -p "$dir"
  cat > "$file" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:${color}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <rect x="0" y="0" width="1200" height="800" fill="url(#g)" opacity="0.3"/>
  <text x="600" y="400" font-family="Inter, system-ui, sans-serif" font-size="32" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" opacity="0.9">${name}</text>
  <text x="600" y="440" font-family="JetBrains Mono, monospace" font-size="14" fill="#3B82F6" text-anchor="middle" dominant-baseline="middle" opacity="0.7">placeholder · replace with real asset</text>
</svg>
SVGEOF
}

generate_svg "public/img/hero/hero-bg.jpg" "Hero Background" "#16213e"
generate_svg "public/img/hero/ruben-photo.jpg" "Rubén Carrión" "#0a1628"
generate_svg "public/img/brand/logo.svg" "Logo" "#1a1a2e"
generate_svg "public/img/projects/cicada-3301/cover.jpg" "Cicada 3301 — IA Research" "#16213e"
generate_svg "public/img/projects/lake-city/cover.jpg" "Lake City — Digital Investigation" "#1a1a2e"
generate_svg "public/img/projects/lol-superman/cover.jpg" "LOL Superman — Lost Media" "#0f3460"
generate_svg "public/img/projects/karcher-work/cover.jpg" "Kärcher — Branding & Automation" "#16213e"
generate_svg "public/img/projects/proyecto-diseno-1/cover.jpg" "Proyecto Diseño I" "#1a1a2e"
generate_svg "public/img/projects/proyecto-diseno-2/cover.jpg" "Proyecto Diseño II" "#0a1628"
echo "✅ Placeholders generated"
