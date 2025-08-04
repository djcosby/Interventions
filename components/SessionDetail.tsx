
import React from 'react';
import { Session } from '../types';

interface SessionDetailProps {
  session: Session;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

const SessionDetail: React.FC<SessionDetailProps> = ({ session }) => {
  return (
    <div className="space-y-5">
      <Section title="Purpose of the Session">{session.purpose}</Section>
      <Section title="Summary of Session Content/Themes">{session.summary}</Section>
      <Section title="Group Interventions and Facilitator Actions">{session.interventions}</Section>
      <Section title="Group Process and Dynamics">{session.dynamics}</Section>
      <Section title="Overall Group Response to Interventions">{session.response}</Section>
      <Section title="Plan and Follow-Up">{session.plan}</Section>
      
      {session.modalities.length > 0 && (
        <div className="pt-4 border-t border-dashed border-slate-200">
          <strong className="text-blue-800 font-semibold">Modalities:</strong>
          <div className="mt-2 flex flex-wrap gap-2">
            {session.modalities.map((tag) => (
              <span key={tag} className="inline-block bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionDetail;
