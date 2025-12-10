import { Suspense } from "react";
import ReservationSuccessPage from "./SuccessWrapper";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <ReservationSuccessPage />
    </Suspense>
  );
}
