import { useState } from 'react';

export default function Schedule() {
  const [showCalendarInfo, setShowCalendarInfo] = useState(true);
  
  const handleBookNowClick = () => {
    setShowCalendarInfo(false);
  };

  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Schedule Your Free Demo</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Choose a time that works for you and we'll come to your home for a personalized cooking demonstration.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="font-heading font-semibold text-2xl mb-4">Why Schedule a Demo?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>See the cookware in action in your own kitchen</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Learn nutritionist cooking techniques from certified coaches</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Taste delicious food prepared with minimal effort</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No pressure, just an informative and fun experience</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ask questions and get personalized advice</span>
                </li>
              </ul>
              <div className="p-6 bg-primary/10 rounded-lg">
                <h4 className="font-heading font-semibold text-lg mb-2 text-primary">Virtual Options Available</h4>
                <p className="text-gray-700">
                  Can't host in person? We also offer virtual cooking demonstrations via Zoom. Select the virtual option when scheduling.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12">
              <h3 className="font-heading font-semibold text-2xl mb-4">Book Your Demo</h3>
              
              {showCalendarInfo ? (
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-sm">
                    <p className="flex items-center text-blue-700 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      This is a demonstration scheduling section
                    </p>
                    <p className="text-gray-600 text-sm ml-7">
                      {/* Calendly integration comment */}
                      {/* When deployed, this will be integrated with Sharon and Alden's actual Calendly account */}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-lg">Available Times:</h4>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                      <div className="p-3 border rounded-md text-center hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">Mon, May 6</p>
                        <p className="text-sm text-gray-500">10:00 AM</p>
                      </div>
                      <div className="p-3 border rounded-md text-center hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">Tue, May 7</p>
                        <p className="text-sm text-gray-500">2:00 PM</p>
                      </div>
                      <div className="p-3 border rounded-md text-center hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">Wed, May 8</p>
                        <p className="text-sm text-gray-500">4:00 PM</p>
                      </div>
                      <div className="p-3 border rounded-md text-center hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">Thu, May 9</p>
                        <p className="text-sm text-gray-500">1:00 PM</p>
                      </div>
                      <div className="p-3 border rounded-md text-center hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">Fri, May 10</p>
                        <p className="text-sm text-gray-500">3:30 PM</p>
                      </div>
                      <div className="p-3 border rounded-md text-center hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">Sat, May 11</p>
                        <p className="text-sm text-gray-500">11:00 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleBookNowClick}
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition duration-300"
                  >
                    Book Now
                  </button>
                
                  <div className="text-center text-sm text-gray-500 mt-4">
                    <p>For immediate assistance, please call</p>
                    <p className="font-medium text-primary">(714) 504-3014</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-md border border-green-200">
                    <div className="flex items-center text-green-700 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-medium">Thanks for your interest!</p>
                    </div>
                    <p className="text-gray-600 text-sm ml-7">
                      In a real deployment, this would complete the Calendly booking process. Our team will be in touch shortly to confirm your appointment.
                    </p>
                  </div>
                  
                  <div className="p-5 border rounded-md">
                    <h4 className="font-medium mb-2">What happens next?</h4>
                    <ol className="space-y-2 text-gray-600 text-sm list-decimal ml-5">
                      <li>Sharon or Alden will call you to confirm your appointment</li>
                      <li>They'll ask about your kitchen setup and any dietary preferences</li>
                      <li>On the day of your demo, they'll arrive with all necessary equipment</li>
                      <li>Enjoy a 1-2 hour cooking demonstration in your home</li>
                    </ol>
                  </div>
                  
                  <button 
                    onClick={() => setShowCalendarInfo(true)}
                    className="w-full py-3 border border-primary text-primary hover:bg-primary/10 font-medium rounded-md transition duration-300"
                  >
                    Back to Schedule
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
