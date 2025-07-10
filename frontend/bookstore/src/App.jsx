import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-5xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
    </>
  );
}

export default App;
