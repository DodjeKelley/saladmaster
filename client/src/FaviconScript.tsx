import { useEffect } from 'react';
import faviconImg from './assets/images/favicon.webp';

export default function FaviconScript() {
  useEffect(() => {
    // Create link element for favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconImg;
    link.type = 'image/webp';
    
    // Append to document head
    document.head.appendChild(link);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  // Component doesn't render anything
  return null;
} 