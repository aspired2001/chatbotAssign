import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl text-black font-bold mb-8">Welcome to My Chatbot App</h1>
      <Link className=" text-blue-500" href="/chatbot">
        Go to Chatbot
      </Link>
    </div>
  );
}
