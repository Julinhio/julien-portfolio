import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import TalkToMe from "./pages/TalkToMe";
import NotFound from "./pages/NotFound";
import ProposalFlow from "./pages/ProposalFlow";
import Flowrence from "./pages/Flowrence";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/talk" element={<TalkToMe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects/proposalflow" element={<ProposalFlow />} />
          <Route path="/projects/flowrence-ai-support" element={<Flowrence />} />
        </Routes>
      </main>
    </Router>
  );
}
