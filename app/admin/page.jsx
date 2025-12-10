import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl  text-dark font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/admin/reservations" className="bg-dark p-6 rounded shadow hover:shadow-lg text-white">
          <h2 className="text-xl font-bold">Reservations</h2>
        </Link>
        <Link href="/admin/events" className="bg-dark p-6 rounded shadow hover:shadow-lg text-white">
          <h2 className="text-xl font-bold">Events</h2>
        </Link>
       
      </div>
    </div>
  );
}
