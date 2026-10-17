import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = { title: "Estate Shop" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">Shop</Link> · <Link href="/cart">Cart</Link> · <Link href="/account">Account</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
