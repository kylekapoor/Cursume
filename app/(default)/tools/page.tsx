"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function ToolsPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const [mounted, setMounted] = useState(false);

  // Only show the UI after first hydration to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-900">
      {/* Top-right user profile button - only render when auth is loaded and component is mounted */}
      {mounted && isLoaded && (
        <div className="absolute top-4 right-4 z-50">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}

      <div className="flex h-screen items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to the Tools Page 🔧</h1>
      </div>
    </div>
  );
}  