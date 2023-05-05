import { createRoot } from "react-dom/client";
import EventComponent from "./events/EventComponent";

const App = () => {
  return <div>
    <EventComponent />
  </div>
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(
  rootElement as HTMLElement
);
root.render(<App />);
