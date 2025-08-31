
import React from 'react';
import { CollectionIcon } from '../constants';

interface CaseStudySelectionProps {
  setActiveCaseStudy: (id: string) => void;
}

const caseStudies = [
  {
    id: 'warehouse',
    title: 'The Warehouse',
    description: 'An analysis of a major NZ big-box retailer e-commerce platform.',
    logoUrl: 'https://www.thewarehouse.co.nz/images/the-warehouse-logo.svg',
    color: 'bg-red-600'
  },
  {
    id: 'trademe',
    title: 'Trade Me',
    description: 'An analysis of NZ\'s largest online auction and classifieds website.',
    logoUrl: 'https://trademe.tmcdn.co.nz/images/tme-logo-2020.svg',
    color: 'bg-blue-600'
  }
];

const CaseStudySelection: React.FC<CaseStudySelectionProps> = ({ setActiveCaseStudy }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
           <CollectionIcon />
           Case Study Selection
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose a website to analyze through the lens of usability principles.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {caseStudies.map((study) => (
          <button
            key={study.id}
            onClick={() => setActiveCaseStudy(study.id)}
            className="text-left bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col group"
          >
            <div className={`p-8 ${study.color} flex items-center justify-center`}>
                <img src={study.logoUrl} alt={`${study.title} logo`} className="h-12 object-contain invert" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{study.title}</h3>
              <p className="mt-2 text-gray-600">{study.description}</p>
            </div>
            <div className="p-4 bg-gray-50 text-right">
                <span className="font-semibold text-secondary">View Analysis &rarr;</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudySelection;
