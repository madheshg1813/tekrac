import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";
import { LOGO_ICON_DATA_URI } from "@/lib/logo-data";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0c0e10",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(31,178,98,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(31,178,98,0.18), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "76px",
              height: "76px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* next/image cannot render inside next/og's ImageResponse */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_ICON_DATA_URI} width={76} height={76} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "34px", fontWeight: 800, color: "white" }}>TEKREC</span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "3px",
                color: "#7be3a2",
                textTransform: "uppercase",
              }}
            >
              E Waste Recycling
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            maxWidth: "980px",
          }}
        >
          Responsible E-Waste Recycling for a Sustainable Future
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "24px",
            color: "#a7afb8",
            maxWidth: "820px",
          }}
        >
          Secure data destruction, compliant IT asset disposal &amp; certified electronics
          recycling.
        </div>
      </div>
    ),
    { ...size }
  );
}
