"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProtected({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.replace("/admin/login"); // redirect if no token
    } else {
      setLoading(false); // allow children to render
    }
  }, [router]);

  if (loading) return (
    <div className="text-center text-white mt-20">Checking authentication...</div>
  );

  return children;
}
