import "./globals.css";

export const metadata = {
  title: "AD Brokerage CRM",
  description: "Life Insurance CRM"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
