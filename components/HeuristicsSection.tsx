
import React from 'react';
import { HEURISTICS_DATA } from '../constants';
import { LightBulbIcon } from '../constants';

const HeuristicsSection: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
           <LightBulbIcon />
           Nielsen's 10 Usability Heuristics
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          These are 'rules of thumb' to help measure the effectiveness of a user interface.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {HEURISTICS_DATA.map((heuristic) => (
          <div key={heuristic.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex items-center">
                <span className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {heuristic.id}
                </span>
                <h3 className="ml-4 text-lg font-semibold text-primary">{heuristic.title}</h3>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">{heuristic.description}</p>
            </div>
            <div className="p-6 pt-4 bg-neutral-100/70">
                <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-800">Example:</strong> {heuristic.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeuristicsSection;