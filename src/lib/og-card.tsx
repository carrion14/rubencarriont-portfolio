import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }

export async function renderOgCard({ kicker, title, accent }: { kicker: string; title: string; accent: string }) {
  const portrait = await readFile(join(process.cwd(), "public/img/brand/ruben-carrion-retrato.jpg"))
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #f8fbff 0%, #e6f2ff 55%, #ffffff 100%)",
          color: "#1d1d1f",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: "#0066cc", letterSpacing: 1 }}>{kicker}</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
            <span>{title}</span>
            <span style={{ color: "#0071e3" }}>{accent}</span>
          </div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 28, color: "#6e6e73" }}>rubencarriont.com</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 999, border: "8px solid rgba(255,255,255,0.9)", boxShadow: "0 24px 60px rgba(0,85,170,0.18)" }}
        />
      </div>
    ),
    ogSize,
  )
}
