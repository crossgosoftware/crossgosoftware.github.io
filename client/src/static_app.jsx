/**
 * This is an alternative entry point for the application
 * that uses the HashRouter instead of the default BrowserRouter,
 * making it more compatible with GitHub Pages.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Router, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import './index.css';

/**
 * This is a hash-based routing mechanism compatible with GitHub Pages
 */
const HashRouting = ({ hook, base = "" }) => {
  // Convert hash path to wouter path and vice versa
  const useHashLocation = () => {
    const [path, setPath] = React.useState(
      window.location.hash ? window.location.hash.replace("#", "") : "/"
    );

    React.useEffect(() => {
      // Handle hash change and initial hash
      const handler = () => {
        const path = window.location.hash ? window.location.hash.replace("#", "") : "/";
        setPath(path);
      };

      window.addEventListener("hashchange", handler);
      if (!window.location.hash) {
        window.location.hash = "#/";
      }

      return () => window.removeEventListener("hashchange", handler);
    }, []);

    const navigate = (to) => {
      window.location.hash = to;
    };

    return [path, navigate];
  };

  return <Router hook={useHashLocation} base={base} />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouting>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouting>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);