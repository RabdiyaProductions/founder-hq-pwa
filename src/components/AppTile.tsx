type AppTileProps = {
  title: string;
  subtitle?: string;
  href: string;
  tag?: string; // e.g. LIVE / INTERNAL / DRAFT
};

export default function AppTile({ title, subtitle, href, tag }: AppTileProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        border: "1px solid #222",
        borderRadius: 14,
        padding: 16,
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{title}</div>
          {subtitle ? (
            <div style={{ marginTop: 6, opacity: 0.75, lineHeight: 1.35 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        {tag ? (
          <div
            style={{
              border: "1px solid #666",
              borderRadius: 999,
              padding: "6px 10px",
              fontSize: 12,
              fontWeight: 700,
              height: "fit-content",
              whiteSpace: "nowrap",
            }}
          >
            {tag}
          </div>
        ) : null}
      </div>

      <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>{href}</div>
    </a>
  );
}
