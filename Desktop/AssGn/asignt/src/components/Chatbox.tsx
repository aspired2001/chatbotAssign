import React, { useState, useEffect, useRef } from "react";
import Loading from "@/app/loading/page";
import Loader from "@/app/loader/page";
import { FaArrowUp } from "react-icons/fa";

const predefinedResponses: { [key: string]: string } = {
  "What services do you offer?":
    "We offer web development, mobile app development, and digital marketing services.",
  "How can I contact support?":
    "You can contact support via email at support@example.com.",
  "What's your name?": "My name is Wajahat Ali",
  "What song was or do you want to be the your first dance at your wedding?":
    "If you found out you were going to die tomorrow, the song would be 'Un Ke Andaaz-e-Karam'.",
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<
    { sender: string; content: string }[]
  >([
    { sender: "bot", content: "Hey, how can I help you?" }, // Initial bot message
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [botLoading, setBotLoading] = useState<boolean>(false); 
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 4000); // Loading for 4 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    const handleSend = () => {
      if (input.trim()) {
        const userMessage = { sender: "user", content: input };
        setMessages([...messages, userMessage]);
        setBotLoading(true); // Show loading dots when waiting for bot response

        setTimeout(() => {
          const botResponse =
            predefinedResponses[input] ||
            "I'm sorry, I don't understand that question.";
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", content: botResponse },
          ]);
          setBotLoading(false); // Hide loading dots once response is ready
        }, 3000); // Simulate a delay for the bot response

        setInput("");
      }
    };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col max-w-md mx-auto my-10 border rounded-lg shadow-lg font-mono ">
      <div className="bg-gray-200 w-[440px] h-[80vh] rounded-lg p-4 flex flex-col-reverse overflow-y-auto no-scrollbar">
        <div className="space-y-2">
          <div>
            <Loader />
          </div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-4 py-8 rounded-[2rem] text-left font-semibold ${
                  message.sender === "user"
                    ? "bg-black text-white h-[8rem] max-h-[8rem] max-w-[20rem]"
                    : "bg-white text-black h-[8rem] max-h-[8rem] max-w-[20rem]"
                }`}
              >
                {message.content}
              </span>
            </div>
          ))}

          {botLoading && (
            <div className="  flex space-x-1 items-center dark:invert">
              <div
                className="h-2 w-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "-0.3s" }}
              ></div>
              <div
                className="h-2 w-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "-0.15s" }}
              ></div>
              <div
                className="h-2 w-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "-0.10s" }}
              ></div>
              <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="flex p-4 border-t">
        <input
          className="flex-grow p-2 border rounded-l-lg text-black font-serif outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your Question..."
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-r-lg"
          onClick={handleSend}
        >
          <FaArrowUp className="text-2xl hover:rotate-90 hover:ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
