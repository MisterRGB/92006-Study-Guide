import React from 'react';
import { MagnifyingGlassIcon } from '../constants';

const heuristicsAnalysis = [
    { title: "Visibility of System Status", evaluation: "Excellent", description: "Auction pages clearly show the current bid, time remaining, and number of bidders. Search filters are always visible, showing the user what criteria are currently active." },
    { title: "Match Between System and Real World", evaluation: "Excellent", description: "Uses familiar automotive and auction terminology like 'Make', 'Model', 'Odometer', 'Buy Now', and 'Auction', making it instantly understandable for the target audience." },
    { title: "User Control and Freedom", evaluation: "Good", description: "Users can save searches and add vehicles to a 'Watchlist', giving them control. Navigation is clear with breadcrumbs, allowing easy retreat from any page." },
    { title: "Consistency and Standards", evaluation: "Good", description: "The layout for all vehicle listings is standardized, meaning users only have to learn how to read a listing once. Standard web conventions are followed for search and navigation." },
    { title: "Error Prevention", evaluation: "Good", description: "The site uses dropdowns for Make and Model, preventing spelling errors. A confirmation modal before placing a bid or 'Buying Now' helps prevent accidental purchases." },
    { title: "Recognition Rather Than Recall", evaluation: "Excellent", description: "The 'Watchlist' is a core feature that removes the need for users to remember specific cars. 'Recently Viewed' cars also help reduce cognitive load." },
];

const mataponoMaoriAnalysis = [
    { title: "Rangatiratanga (Control & Self-determination)", evaluation: "Good", description: "Account features like the watchlist, saved searches, and managing bids give users significant control and authority over their buying process." },
    { title: "Whanaungatanga (Community & Relationships)", evaluation: "Fair", description: "The platform is primarily transactional. While it connects buyers and sellers, it lacks strong community-building features like public seller reviews or forums." },
    { title: "Manaakitanga (Respect & Hospitality)", evaluation: "Good", description: "Turners provides extensive 'How to Buy' and 'How to Sell' guides, clear contact details for each branch, and information on finance. This is hospitable and shows respect by supporting users." },
    // FIX: Corrected a typo in the object property key. 'title:ag' should be 'title'.
    { title: "Kaitiakitanga (Guardianship)", evaluation: "Good", description: "By acting as a trusted intermediary and offering services like pre-purchase inspections and mechanical breakdown insurance, Turners acts as a guardian for the transaction, protecting both buyers and sellers." },
];

interface TurnersCaseStudyProps {
  onBack: () => void;
}

const TurnersCaseStudy: React.FC<TurnersCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="animate-fade-in">
      <div className="relative">
         <button onClick={onBack} className="absolute left-0 -top-4 text-secondary font-semibold hover:underline">&larr; Back to Case Studies</button>
      </div>
      <div className="text-center mb-12 pt-4">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
           <MagnifyingGlassIcon />
           Case Study: turners.co.nz
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          An analysis of NZ's largest vehicle auction platform through the lens of usability principles.
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
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.evaluation === 'Good' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
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

export default TurnersCaseStudy;