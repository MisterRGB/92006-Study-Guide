
import React from 'react';
import { MagnifyingGlassIcon } from '../constants';

const heuristicsAnalysis = [
    { title: "Visibility of System Status", evaluation: "Excellent", description: "Bidding status (current bid, time remaining, number of bids) is constantly visible. 'My Trade Me' provides a clear dashboard of all user activity." },
    { title: "Match Between System and Real World", evaluation: "Excellent", description: "Uses concepts like 'auction', 'bidding', and 'watchlist' which are direct analogues to real-world auctions, making it highly intuitive." },
    { title: "User Control and Freedom", evaluation: "Good", description: "Users can retract bids under specific conditions and can easily edit their own listings after posting, providing clear 'emergency exits'." },
    { title: "Consistency and Standards", evaluation: "Excellent", description: "The blue and orange branding is iconic. The layout for listings is standardized across the entire site, making browsing predictable and efficient." },
    { title: "Error Prevention", evaluation: "Good", description: "A confirmation step is required before placing a bid, preventing costly mistakes. Search also provides suggestions for common typos.", image: "https://placehold.co/600x250/E57921/FFFFFF?text=Bid+Confirmation+Dialog" },
    { title: "Recognition Rather Than Recall", evaluation: "Excellent", description: "The 'Watchlist' is a primary feature. Users don't need to remember items; they add them to a list for easy access, reducing memory load significantly.", image: "https://placehold.co/600x250/00ADEF/FFFFFF?text=Personalized+Watchlist+Feature" },
    { title: "Aesthetic and Minimalist Design", evaluation: "Fair", description: "While highly functional, listing pages can be cluttered with ads, seller information, and shipping options, which detracts from a minimalist aesthetic." },
    { title: "Help Users with Errors", evaluation: "Good", description: "If a search returns no results, the site clearly states '0 results found' and provides helpful suggestions for broader search terms." },
];

const mataponoMaoriAnalysis = [
    { title: "Rangatiratanga (Control)", evaluation: "Excellent", description: "Sellers have full control over their listings (pricing, description). Buyers control their bids and watchlists. Extensive account settings provide authority over personal data." },
    { title: "Whanaungatanga (Community)", evaluation: "Excellent", description: "The user feedback system is the core of Trade Me's community trust model. It builds relationships and accountability between members. The Q&A section on each listing also fosters direct communication.", image: "https://placehold.co/600x250/19355B/FFFFFF?text=Member+Feedback+System" },
    { title: "Manaakitanga (Respect)", evaluation: "Good", description: "The platform's 'Buyer Protection' policy shows care for users by offering a safety net. The help section is extensive and easy to navigate, showing hospitality to users in need of support." },
    { title: "Kaitiakitanga (Guardianship)", evaluation: "Good", description: "Trade Me acts as a guardian for the transaction process through services like Ping. They also enforce policies against prohibited items, protecting the community." },
];

interface TradeMeCaseStudyProps {
  onBack: () => void;
}

const TradeMeCaseStudy: React.FC<TradeMeCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="animate-fade-in">
       <div className="relative">
         <button onClick={onBack} className="absolute left-0 -top-4 text-secondary font-semibold hover:underline">&larr; Back to Case Studies</button>
      </div>
      <div className="text-center mb-12 pt-4">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
           <MagnifyingGlassIcon />
           Case Study: trademe.co.nz
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          An analysis of NZ's largest online auction site through the lens of usability principles.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">Nielsen's Heuristics Analysis</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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
              {item.image && <img src={item.image} alt={`Example of ${item.title}`} className="w-full h-auto object-cover" />}
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
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.evaluation === 'Excellent' || item.evaluation === 'Good' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {item.evaluation}
                    </span>
                 </div>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.description}</p>
              </div>
               {item.image && <img src={item.image} alt={`Example of ${item.title}`} className="w-full h-auto object-cover" />}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TradeMeCaseStudy;
