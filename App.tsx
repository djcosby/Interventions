
import React, { useState, useMemo, useCallback } from 'react';
import { curricula } from './constants';
import { Curriculum, Session } from './types';
import Header from './components/Header';
import CurriculumTable from './components/CurriculumTable';
import Accordion from './components/Accordion';
import SessionDetail from './components/SessionDetail';

function App(): React.ReactNode {
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

  const allAccordionIds = useMemo(() => {
    const ids: string[] = [];
    curricula.forEach((curriculum) => {
      ids.push(curriculum.name);
      if (curriculum.sessions.length > 0) {
        curriculum.sessions.forEach((session) => {
          ids.push(`${curriculum.name}-${session.title}`);
        });
      }
    });
    return ids;
  }, []);

  const handleToggleAccordion = useCallback((id: string) => {
    setOpenAccordions((prevOpen) => {
      const newOpen = new Set(prevOpen);
      if (newOpen.has(id)) {
        newOpen.delete(id);
      } else {
        newOpen.add(id);
      }
      return newOpen;
    });
  }, []);

  const handleExpandAll = useCallback(() => {
    setOpenAccordions(new Set(allAccordionIds));
  }, [allAccordionIds]);

  const handleCollapseAll = useCallback(() => {
    setOpenAccordions(new Set());
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
        <Header onExpandAll={handleExpandAll} onCollapseAll={handleCollapseAll} />

        <main>
          <h3 className="text-2xl font-semibold text-blue-700 border-b border-slate-200 pb-3 mt-8">
            Curriculum at a Glance
          </h3>
          <p className="mt-4 text-slate-600">
            The following table provides a high-level overview of the seven distinct curricula contained within this compendium. This summary allows for a quick comparison of each program's focus, underlying therapeutic model, length, and primary modalities. This structure serves as a map to the detailed session content below, enabling users to efficiently identify the most relevant curriculum for their specific clinical or training needs.
          </p>
          
          <CurriculumTable data={curricula} />

          <div className="mt-12 space-y-4">
            {curricula.map((curriculum: Curriculum) => (
              <Accordion
                key={curriculum.name}
                id={curriculum.name}
                title={curriculum.name}
                isOpen={openAccordions.has(curriculum.name)}
                onToggle={handleToggleAccordion}
                level={1}
              >
                <p className="mb-6 px-1 text-slate-600">{curriculum.description}</p>
                
                {curriculum.sessions.length > 0 ? (
                  <div className="space-y-2">
                    {curriculum.sessions.map((session: Session) => {
                        const sessionId = `${curriculum.name}-${session.title}`;
                        return (
                          <Accordion
                            key={sessionId}
                            id={sessionId}
                            title={session.title}
                            isOpen={openAccordions.has(sessionId)}
                            onToggle={handleToggleAccordion}
                            level={2}
                          >
                            <SessionDetail session={session} />
                          </Accordion>
                        );
                    })}
                  </div>
                ) : (
                  <div className="p-4 text-center bg-slate-50 rounded-md">
                    <p className="text-slate-500 italic">
                        Detailed session content for this curriculum is in development. Please check back later.
                    </p>
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
