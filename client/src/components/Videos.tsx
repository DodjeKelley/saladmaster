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

  // Get YouTube thumbnail
  const youtubeThumb = embedId ? 
    `https://img.youtube.com/vi/${embedId}/hqdefault.jpg` : 
    undefined;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-video">
        {embedId && videoLoaded ? (
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-t-xl"
          ></iframe>
        ) : (
          <div 
            className="w-full h-full rounded-t-xl cursor-pointer overflow-hidden group relative"
            onClick={handlePlayClick}
          >
            {/* YouTube thumbnail */}
            <img
              src={youtubeThumb || thumbnail}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
              <div className="relative transition-transform duration-300 transform group-hover:scale-110">
                {/* Red play button background */}
                <div className="absolute inset-0 bg-red-600 rounded-full"></div>
                {/* Play icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white relative" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </div>
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
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition duration-300"
        >
          <span>Watch Video</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
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
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">Quick Recipe Ideas</div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Sizzle & Serve: How to Master Quick, Healthy Meals with Saladmaster</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Watch these quick demonstrations of the amazing Saladmaster Grill Pan in action. These easy recipes showcase how Saladmaster cookware helps you prepare delicious, nutritious meals in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <VideoCard
            title="Saladmaster Grill Pan Shrimp"
            description="Learn how to prepare perfectly seared shrimp in minutes using the Saladmaster Grill Pan. No added oils needed for this quick, protein-rich meal."
            embedId="jeIGUCv1__I"
          />
          
          <VideoCard
            title="Grill Pan Chicken with Pineapple"
            description="See how to make juicy grilled chicken with caramelized pineapple using the Saladmaster Grill Pan. A delicious sweet and savory combination."
            embedId="w6Ly6jcJA08"
          />
          
          <VideoCard
            title="Saladmaster Grill Pan Peaches"
            description="Discover how to make a healthy dessert by grilling peaches on the Saladmaster Grill Pan. A perfect way to satisfy your sweet tooth naturally."
            embedId="qljk6uhze_A"
          />
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-heading font-semibold text-xl mb-3">Why the Saladmaster Grill Pan?</h3>
            <p className="text-gray-700 mb-4">
              The Saladmaster Grill Pan is crafted from 316Ti surgical-grade stainless steel. It features a unique design that allows you to grill indoors without added oils or fats, while still achieving perfect sear marks and flavor.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition duration-300"
              >
                Schedule a Demo to See It in Action
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
