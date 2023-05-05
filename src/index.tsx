import { createRoot } from "react-dom/client";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return <div>
    <UserSearch />
  </div>
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(
  rootElement as HTMLElement
);
root.render(<App />);
