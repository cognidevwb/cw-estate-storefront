import { cookies } from "next/headers";
import { myAccount } from "@/lib/orders";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const email = (await cookies()).get("email")?.value ?? "guest@example.com";
  const me = await myAccount(email);
  return (
    <section>
      <h1>{me.email}</h1>
      <p>
        {me.orders} orders · {me.spent.toFixed(2)} spent
      </p>
    </section>
  );
}
