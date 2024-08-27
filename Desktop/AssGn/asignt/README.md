
## Getting Started

First, run the development server:

```bash

cd asignt

npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## File Structure

```
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── public/
│   └── favicon.ico
├── components/
│   ├── Chatbot.tsx
│   ├── Loader.tsx
│   └── Loading.tsx
├── styles/
│   └── globals.css
├── README.md
├── package.json
└── tsconfig.json
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## About this CHATBOT project

Tech stacks used: Next.Js, TailwindCSS, Typescript.

## Key Files:

pages/index.tsx: The main entry point for the application, rendering the Chatbot component.
components/Chatbot.tsx: The primary chat interface component, handling user input, message display, and bot responses.
components/Loader.tsx: Displays an animated loader while waiting for the bot's initial load.
components/Loading.tsx: Shows an animated loading dots component between the user’s query and the bot’s response.

## Key Components

Chatbot.tsx
State Management: Uses useState and useEffect hooks to manage user input, messages, and loading states.
Predefined Responses: Contains predefined responses to certain queries.
Dynamic Message Display: Messages are displayed in a reverse order, with new messages appearing at the bottom and moving upward as the chat grows.
Loading Indicator: A loading animation is shown between sending a message and receiving the bot’s response.
Loader.tsx and Loading.tsx
Loader.tsx: Displays an animated infinity symbol during the initial loading phase.
Loading.tsx: Shows a bouncing dots animation while the bot processes and returns a response to the user's query.

## Assumptions and Limitations

Assumptions:
The chatbot currently only handles a limited set of predefined queries.
The user input is expected to match the predefined questions exactly for a proper response.
Limitations:
Static Responses: The bot doesn't have an AI backend; it only responds to predefined questions. This limits the bot's functionality to specific queries.
No Backend Integration: The application doesn't support external APIs or backend systems for storing chat history or enhancing bot intelligence.
