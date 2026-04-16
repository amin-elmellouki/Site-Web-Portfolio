import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#121415",
          color: "#e8e6e3",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            width: 430,
            backgroundColor: "#033325",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 300,
            height: 220,
            backgroundColor: "#2e121e",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 76px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              fontFamily: "sans-serif",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "uppercase",
                color: "#a3d0bc",
              }}
            >
              Portfolio / 2026
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "uppercase",
                color: "rgba(232,230,227,0.45)",
              }}
            >
              Orléans, France
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 40,
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 720,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "serif",
                  fontSize: 90,
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: 0,
                  whiteSpace: "pre-wrap",
                }}
              >
                Amin{"\n"}EL MELLOUKI
              </p>
              <p
                style={{
                  margin: "28px 0 0 0",
                  maxWidth: 540,
                  fontFamily: "sans-serif",
                  fontSize: 20,
                  lineHeight: 1.55,
                  color: "#b7b3af",
                }}
              >
                Développeur full stack. Applications web et mobile, de
                l&apos;interface au backend.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontFamily: "sans-serif",
                textTransform: "uppercase",
              }}
            >
              {[
                { text: "React / Next.js", color: "#a3d0bc" },
                { text: "FastAPI / PostgreSQL", color: "#a3d0bc" },
                { text: "React Native / Delivery", color: "#d4a0b9" },
              ].map((item) => (
                <p
                  key={item.text}
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: 0,
                    color: item.color,
                  }}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
