import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";

const App = () => {
  return <div>
    <GuestList />
  </div>
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(
  rootElement as HTMLElement
);
root.render(<App />);
