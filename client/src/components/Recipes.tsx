interface RecipeCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  tagClasses: string[];
  link: string;
}

function RecipeCard({ imageSrc, title, description, tags, tagClasses, link }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="h-56 overflow-hidden">
        <img 
          src={imageSrc}
          alt={title} 
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap items-center mb-4">
          {tags.map((tag, index) => (
            <span key={index} className={`${tagClasses[index]} text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-1`}>{tag}</span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-2 text-primary hover:text-primary-dark font-medium transition duration-300"
        >
          View Full Recipe →
        </a>
      </div>
    </div>
  );
}

export default function Recipes() {
  const recipes = [
    {
      imageSrc: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FsbW9uLGJyb2Njb2xpfHx8fHx8MTY0NjI0NjY5Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      title: "One-Skillet Garlicky Salmon & Broccoli",
      description: "A quick weeknight meal with omega-3 rich salmon and antioxidant-loaded broccoli. Flavored with olive oil and garlic, this dish is ready in about 20 minutes.",
      tags: ["High Protein", "Omega-3", "Ready in 20 min"],
      tagClasses: ["bg-primary/10 text-primary", "bg-secondary/10 text-secondary", "bg-accent/10 text-accent"],
      link: "https://www.eatingwell.com/one-skillet-garlicky-salmon-broccoli-8778821"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpY2tlbixyaWNlfHx8fHx8MTY0NjI0NjgxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      title: "One-Pot Chicken & Rice with Veggies",
      description: "Lean chicken breast and brown rice simmered with frozen vegetables for convenience. Toss everything in one pan or pot for a hearty balanced dinner with minimal cleanup.",
      tags: ["Family Friendly", "One Pot", "Complete Meal"],
      tagClasses: ["bg-primary/10 text-primary", "bg-secondary/10 text-secondary", "bg-accent/10 text-accent"],
      link: "https://feelgoodfoodie.net/recipe/one-pot-chicken-rice-vegetables/"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FsYWQsYm93bHx8fHx8fDE2NDYyNDY5MTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      title: "Quinoa Buddha Bowl (Vegan)",
      description: "A nourishing grain bowl of high-fiber quinoa topped with roasted sweet potatoes, kale, crispy chickpeas, avocado and tahini dressing. Colorful, plant-powered, and filling.",
      tags: ["Vegan", "Plant Protein", "High Fiber"],
      tagClasses: ["bg-primary/10 text-primary", "bg-secondary/10 text-secondary", "bg-accent/10 text-accent"],
      link: "https://feelgoodfoodie.net/recipe/vegan-buddha-bowl/"
    }
  ];

  return (
    <section id="recipes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Health-Focused Recipes</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Simple, nutritious recipes perfect for cooking in Saladmaster cookware.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
