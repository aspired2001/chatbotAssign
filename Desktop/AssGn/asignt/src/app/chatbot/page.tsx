'use client'

import Head from "next/head";
import Chatbot from "../../components/Chatbox";

const ChatbotPage = () => {
  return (
    <div>
      <Head>
        <title>Chatbot</title>
        <meta
          name="description"
          content="Chatbot application using Next.js and TailwindCSS"
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl text-black font-serif font-bold mb-8">Chatbot</h1>
        <Chatbot />
      </main>
    </div>
  );
};

export default ChatbotPage;
