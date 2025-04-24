import { UserButton } from "@clerk/nextjs";

export default function ToolsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-900">
      {/* Top-right user profile button */}
      <div className="absolute top-4 right-4 z-50">
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="flex h-screen items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to the Tools Page 🔧</h1>
      </div>
    </div>
  );
}  