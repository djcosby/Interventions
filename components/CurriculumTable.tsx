
import React from 'react';
import { Curriculum } from '../types';

interface CurriculumTableProps {
  data: Curriculum[];
}

const CurriculumTable: React.FC<CurriculumTableProps> = ({ data }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-200 p-3 text-left font-semibold text-blue-800">Curriculum Name</th>
            <th className="border border-slate-200 p-3 text-left font-semibold text-blue-800">Target Focus</th>
            <th className="border border-slate-200 p-3 text-left font-semibold text-blue-800">Core Model / Framework</th>
            <th className="border border-slate-200 p-3 text-left font-semibold text-blue-800"># of Sessions</th>
            <th className="border border-slate-200 p-3 text-left font-semibold text-blue-800">Key Modalities</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curriculum, index) => (
            <tr key={curriculum.name} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="border border-slate-200 p-3 font-medium text-slate-700">{curriculum.name}</td>
              <td className="border border-slate-200 p-3 text-slate-600">{curriculum.targetFocus}</td>
              <td className="border border-slate-200 p-3 text-slate-600">{curriculum.coreModel}</td>
              <td className="border border-slate-200 p-3 text-slate-600">{curriculum.sessionCount}</td>
              <td className="border border-slate-200 p-3 text-slate-600">{curriculum.keyModalities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurriculumTable;
