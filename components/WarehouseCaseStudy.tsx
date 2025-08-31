
import React from 'react';
import { MagnifyingGlassIcon } from '../constants';

const heuristicsAnalysis = [
    { title: "Visibility of System Status", evaluation: "Good", description: "The site uses breadcrumb navigation (e.g., 'Home > Cereal > Oats'), clear stock indicators ('In stock online'), and provides order tracking in the user's account to keep them informed of their status." },
    { title: "Match Between System and Real World", evaluation: "Excellent", description: "It uses a universally recognized shopping cart icon and familiar, real-world product categories like 'Toys' or 'Home & Garden', making navigation intuitive for users." },
    { title: "User Control and Freedom", evaluation: "Good", description: "Users can easily add or remove items from their cart. The multi-step checkout has clear 'Back' options, allowing users to correct mistakes before committing to a purchase." },
    { title: "Consistency and Standards", evaluation: "Good", description: "The site maintains a consistent layout, colour scheme (red branding), and button style across most pages, which helps users learn the interface quickly." },
    { title: "Error Prevention", evaluation: "Fair", description: "Searching for a misspelled item often yields zero results instead of offering a 'Did you mean...?' suggestion, which could prevent a failed search. However, forms provide good input constraints." },
    { title: "Recognition Rather Than Recall", evaluation: "Good", description: "The 'Recently Viewed Items' feature helps users remember products they've looked at, reducing memory load." },
];

const mataponoMaoriAnalysis = [
    { title: "Rangatiratanga (Control & Self-determination)", evaluation: "Good", description: "Users can create accounts to manage orders, save payment details, and create wishlists. This gives them significant control over their data and shopping experience." },
    { title: "Whanaungatanga (Community & Relationships)", evaluation: "Present", description: "The customer reviews and ratings system on product pages helps build a sense of community, allowing shoppers to share experiences and help each other make informed decisions." },
    { title: "Manaakitanga (Respect & Hospitality)", evaluation: "Good", description: "The website provides a detailed help center, clear contact information, and a straightforward returns policy. This shows respect for the customer by offering support and a safety net for their purchases." },
    { title: "Kaitiakitanga (Guardianship)", evaluation: "Fair", description: "While the site has a privacy policy (guardianship of data), there's little visible emphasis on Kaitiakitanga in a broader sense, such as prominently promoting sustainably sourced or locally made New Zealand products." },
];

interface WarehouseCaseStudyProps {
  onBack: () => void;
}

const WarehouseCaseStudy: React.FC<WarehouseCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="animate-fade-in">
      <div className="relative">
         <button onClick={onBack} className="absolute left-0 -top-4 text-secondary font-semibold hover:underline">&larr; Back to Case Studies</button>
      </div>
      <div className="text-center mb-12 pt-4">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
           <MagnifyingGlassIcon />
           Case Study: thewarehouse.co.nz
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          An analysis of a popular NZ e-commerce site through the lens of usability principles.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">Nielsen's Heuristics Analysis</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {heuristicsAnalysis.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                 <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-primary pr-2">{item.title}</h4>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.evaluation === 'Excellent' || item.evaluation === 'Good' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {item.evaluation}
                    </span>
                 </div>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-primary mb-6">Mātāpono Māori Analysis</h3>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {mataponoMaoriAnalysis.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                 <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-primary pr-2">{item.title}</h4>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.evaluation === 'Good' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {item.evaluation}
                    </span>
                 </div>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WarehouseCaseStudy;
