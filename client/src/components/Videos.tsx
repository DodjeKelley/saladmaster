import { useState } from "react";

interface VideoCardProps {
  title: string;
  description: string;
  embedId?: string;
  thumbnail?: string;
}

function VideoCard({ title, description, embedId, thumbnail }: VideoCardProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handlePlayClick = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="aspect-w-16 aspect-h-9">
        {embedId && videoLoaded ? (
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded-t-xl"
          ></iframe>
        ) : (
          <div 
            className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-xl cursor-pointer"
            onClick={handlePlayClick}
          >
            <div className="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 font-medium">{title}</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <button 
          onClick={handlePlayClick}
          className="inline-block text-primary hover:text-primary-dark font-medium transition duration-300"
        >
          Watch Full Video →
        </button>
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section id="videos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Public Demonstration Videos</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Watch our cooking demonstrations to learn more about Saladmaster cookware and cooking techniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <VideoCard
            title="SaladMaster Cooking Show 2 – We Cook Healthy"
            description="A recording of a full live Saladmaster presentation, covering meal prep, cookware features, and Q&A. This popular demonstration has over 60K views!"
            embedId="vHfbMHAj3LM" // Example YouTube ID, replace with actual
          />
          
          <VideoCard
            title="Saladmaster How To Cookware Guide"
            description="A step-by-step demo on using Saladmaster pots and pans, ideal for beginners. Learn the basics of waterless cooking and get started with your cookware."
            embedId="qXLmM-aM3Cg" // Example YouTube ID, replace with actual
          />
        </div>
      </div>
    </section>
  );
}
