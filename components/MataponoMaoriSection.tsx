
import React from 'react';
import { MATAPONO_MAORI_DATA } from '../constants';
import { BookOpenIcon } from '../constants';

const MataponoMaoriSection: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
          <BookOpenIcon />
          Mātāpono Māori in Usability
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Core Māori principles that guide respectful and effective user interface design.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MATAPONO_MAORI_DATA.map((principle) => (
          <div key={principle.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
             <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-primary">{principle.title}</h3>
               <p className="mt-3 text-gray-700 leading-relaxed">{principle.description}</p>
             </div>
             <div className="p-6 pt-4 bg-neutral-100/70">
                <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-800">Example:</strong> {principle.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MataponoMaoriSection;