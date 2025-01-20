import { Suspense } from "react";
import OrderConfirmed from "./OrderConfirmed"; // Import the client component

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OrderConfirmed />
    </Suspense>
  );
}
