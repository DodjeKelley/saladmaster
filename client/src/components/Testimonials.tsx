interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  initials: string;
  imageSrc?: string;
}

function TestimonialCard({ quote, name, title, initials, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-6">
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="text-gray-700 mb-4 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center mt-6">
        {imageSrc ? (
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={`${name}'s portrait`} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-gray-500 font-medium">{initials}</span>
          </div>
        )}
        <div>
          <p className="font-heading font-medium">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sharon's guidance changed the way our family cooks. We've never felt better eating veggies cooked in these amazing pots!",
      name: "Maria G.",
      title: "Local customer",
      initials: "MG",
      imageSrc: "/images/maria.jpg"
    },
    {
      quote: "After just a few weeks of using Saladmaster, my blood pressure and cholesterol improved. Dhong is so knowledgeable and patient!",
      name: "Roberto S.",
      title: "Client",
      initials: "RS",
      imageSrc: "/images/roberto.jpg"
    },
    {
      quote: "I love not needing oil to make our food taste great. Sharon makes healthy cooking feel easy and delicious.",
      name: "Health Coach Attendee",
      title: "Professional",
      initials: "HC",
      imageSrc: "/images/health-coach.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Testimonials</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Hear what our customers say about their Saladmaster experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              initials={testimonial.initials}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
