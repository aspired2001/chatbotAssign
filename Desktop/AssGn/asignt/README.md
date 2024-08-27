<h1>Chatbot Application</h1>

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

<p>This Chatbot application is built using Next.js, Tailwind CSS, React, and TypeScript. The bot responds to predefined queries and includes features such as a loading animation while waiting for the bot's response and a chat interface that mimics popular chat apps.</p>

<p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> with your browser to see the result.</p>

<p>You can start editing the page by modifying <code>app/page.tsx</code>. The page auto-updates as you edit the file.</p>

<h2>About this CHATBOT project</h2>

<p><strong>Tech stacks used:</strong> Next.Js, TailwindCSS, Typescript.</p>

<h2>Key Files:</h2>

<ul>
  <li><code>pages/index.tsx</code>: The main entry point for the application, rendering the Chatbot component.</li>
  <li><code>components/Chatbot.tsx</code>: The primary chat interface component, handling user input, message display, and bot responses.</li>
  <li><code>components/Loader.tsx</code>: Displays an animated loader while waiting for the bot's initial load.</li>
  <li><code>components/Loading.tsx</code>: Shows an animated loading dots component between the user’s query and the bot’s response.</li>
</ul>

<h2>Key Components</h2>

<h3>Chatbot.tsx</h3>
<ul>
  <li><strong>State Management:</strong> Uses <code>useState</code> and <code>useEffect</code> hooks to manage user input, messages, and loading states.</li>
  <li><strong>Predefined Responses:</strong> Contains predefined responses to certain queries.</li>
  <li><strong>Dynamic Message Display:</strong> Messages are displayed in a reverse order, with new messages appearing at the bottom and moving upward as the chat grows.</li>
  <li><strong>Loading Indicator:</strong> A loading animation is shown between sending a message and receiving the bot’s response.</li>
</ul>

<h3>Loader.tsx and Loading.tsx</h3>
<ul>
  <li><code>Loader.tsx</code>: Displays an animated infinity symbol during the initial loading phase.</li>
  <li><code>Loading.tsx</code>: Shows a bouncing dots animation while the bot processes and returns a response to the user's query.</li>
</ul>

<h2>Assumptions and Limitations</h2>

<h3>Assumptions:</h3>
<ul>
  <li>The chatbot currently only handles a limited set of predefined queries.</li>
  <li>The user input is expected to match the predefined questions exactly for a proper response.</li>
</ul>

<h3>Limitations:</h3>
<ul>
  <li><strong>Static Responses:</strong> The bot doesn't have an AI backend; it only responds to predefined questions. This limits the bot's functionality to specific queries.</li>
  <li><strong>No Backend Integration:</strong> The application doesn't support external APIs or backend systems for storing chat history or enhancing bot intelligence.</li>
</ul>
