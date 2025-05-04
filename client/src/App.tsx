import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";
import FaviconScript from "./FaviconScript";

// Determine if we're using a custom domain by checking the hostname
const isCustomDomain = () => {
  if (typeof window !== 'undefined') {
    return !window.location.hostname.includes('github.io');
  }
  return false;
};

// Explicitly set the base path for GitHub Pages or custom domain
const isProduction = import.meta.env.PROD;
const base = isProduction && !isCustomDomain() ? '/saladmaster' : '/';

function Router() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FaviconScript />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
