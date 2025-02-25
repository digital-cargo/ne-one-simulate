"use client";
import TestReport from "@/components/test-report"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const collection = localStorage.getItem('postmanCollection');
    if (!collection) {
      router.push('/start');
    }
  }, [router]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <TestReport />
    </div>
  );
}