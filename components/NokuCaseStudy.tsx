
import React from 'react';
import { MagnifyingGlassIcon } from '../constants';

const heuristicsAnalysis = [
    { title: "Aesthetic and Minimalist Design", evaluation: "Excellent", description: "The interface is exceptionally clean, using beautiful imagery, typography, and whitespace. It removes all distractions, allowing the user to focus on the reflective task of creating their pepeha." },
    { title: "Match Between System and Real World", evaluation: "Excellent", description: "The entire system is built around the real-world cultural concept of a pepeha. It uses language and concepts (maunga, awa, iwi) that are deeply familiar and meaningful to its target audience." },
    { title: "Help and Documentation", evaluation: "Good", description: "The process is so intuitive and guided that minimal documentation is needed. Each step is clearly explained, providing contextual help as the user progresses." },
    { title: "User Control and Freedom", evaluation: "Good", description: "Users can easily navigate back and forth between steps to edit parts of their pepeha before finalizing it, providing a clear and stress-free way to correct information." },
    { title: "Error Prevention", evaluation: "Good", description: "By structuring the creation process into simple, guided steps with clear input fields, the design prevents users from getting lost or making significant errors." },
    { title: "Visibility of System Status", evaluation: "Good", description: "Clear headings and a logical flow let the user know exactly where they are in the creation process at all times." },
];

const mataponoMaoriAnalysis = [
    { title: "Rangatiratanga (Self-determination)", evaluation: "Excellent", description: "The platform's entire purpose is to empower users to define, articulate, and preserve their own identity and connections (whakapapa). It is a tool for digital self-determination." },
    { title: "Whanaungatanga (Relationships)", evaluation: "Excellent", description: "A pepeha is fundamentally about establishing relationships—to place, ancestors, and family. The tool provides a modern way to create and share these vital connections." },
    { title: "Manaakitanga (Respect & Hospitality)", evaluation: "Excellent", description: "The respectful tone, beautiful design, and gentle guidance create a welcoming and supportive digital space, showing deep respect for the user and their cultural journey." },
    { title: "Kaitiakitanga (Guardianship)", evaluation: "Excellent", description: "Nōku acts as a digital kaitiaki (guardian) for a user's pepeha. It provides a safe, accessible way to store and preserve this precious cultural information for oneself and for future generations." },
    { title: "Accurate use of te reo Māori", evaluation: "Excellent", description: "The platform is a showcase of correct and respectful use of te reo Māori, integrating it seamlessly into the user interface and the core purpose of the application." },
];

interface NokuCaseStudyProps {
  onBack: () => void;
}

const NokuCaseStudy: React.FC<NokuCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="animate-fade-in">
      <div className="relative">
         <button onClick={onBack} className="absolute left-0 -top-4 text-secondary font-semibold hover:underline">&larr; Back to Case Studies</button>
      </div>
      <div className="text-center mb-12 pt-4">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
           <MagnifyingGlassIcon />
           Case Study: noku.co.nz
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          An analysis of a purpose-built platform for creating and preserving your pepeha.
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
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mataponoMaoriAnalysis.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                 <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-primary pr-2">{item.title}</h4>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.evaluation === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
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

export default NokuCaseStudy;
