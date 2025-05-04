import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import FaviconScript from "./FaviconScript";

function Router() {
  const [base, setBase] = useState('/');
  
  useEffect(() => {
    // Determine the base path based on the hostname
    const isGitHubPages = window.location.hostname.includes('github.io');
    const useSubpath = isGitHubPages && !window.location.hostname.includes('socalsaladmaster');
    
    // Set the appropriate base path
    if (useSubpath) {
      setBase('/saladmaster');
      console.log('Using GitHub Pages subpath: /saladmaster');
    } else {
      setBase('/');
      console.log('Using root path for custom domain');
    }
    
    // Scroll to top on route change
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
