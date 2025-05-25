import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/navbar/Home";

// 404 page
import NotFound from "./pages/NotFound";

// Navbar imports
import About from "./pages/navbar/About";
import HowITutor from "./pages/navbar/HowITutor";
import SATMath from "./pages/navbar/SATMath";
import Fees from "./pages/navbar/Fees";
import Testimonials from "./pages/navbar/Testimonials";
import Location from "./pages/navbar/Location";
import Contact from "./pages/navbar/Contact";

// Misc pages

import MathsJokes from "./pages/misc/MathJokes";
import GeneralHandouts from "./pages/misc/handouts/GeneralHandouts";
import TI84CalculatorDocs from "./pages/misc/TI84CalculatorDocs";
import IBSLQuestions from "./pages/misc/handouts/IBSLQuestions";
import IBHLQuestions from "./pages/misc/handouts/IBHLQuestions";


// Add more pages as needed

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-i-tutor" element={<HowITutor />} />
            <Route path="/sat-math" element={<SATMath />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/maths-jokes" element={<MathsJokes />} />
            <Route path="/handouts" element={<GeneralHandouts />} />
            <Route path="/handouts/ib-sl-questions" element={<IBSLQuestions />} />
            <Route path="/handouts/ib-hl-questions" element={<IBHLQuestions />} />
            <Route path="/ti-84-calculator-docs" element={<TI84CalculatorDocs />} />

            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 page */}



            {/* Add more routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
