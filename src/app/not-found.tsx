import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Page Not Found 😢</p>
        <Link href="/" className="mt-6 text-blue-600 underline">
          Go Back Home
        </Link>
      </div>
    );
  }