import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartIndicator } from "@/components/CartIndicator";

export const metadata: Metadata = {
  title: "Storefront Demo",
  description: "Demonstração conceitual de e-commerce, sem vínculo com nenhuma plataforma específica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid #eee",
            }}
          >
            <Link href="/" style={{ fontWeight: 700, textDecoration: "none", color: "inherit" }}>
              Storefront Demo
            </Link>
            <CartIndicator />
          </header>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
