import NextNProgress from "nextjs-progressbar";
export default function PulicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {children}
    </div>
  );
}
