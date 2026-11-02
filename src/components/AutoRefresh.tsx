"use client";
import { useEffect, Suspense, memo } from "react";
import { usePathname } from "next/navigation";

function AutoRefreshInner() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when pathname changes for better UX
    // Mobile performance optimization: use requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [pathname]);

  return null;
}

const MemoizedAutoRefreshInner = memo(AutoRefreshInner);

export default function AutoRefresh() {
  return (
    <Suspense fallback={null}>
      <MemoizedAutoRefreshInner />
    </Suspense>
  );
}