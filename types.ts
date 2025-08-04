
export interface Session {
  title: string;
  purpose: string;
  summary: string;
  interventions: string;
  dynamics: string;
  response: string;
  plan: string;
  modalities: string[];
}

export interface Curriculum {
  name: string;
  targetFocus: string;
  coreModel: string;
  sessionCount: string;
  keyModalities: string;
  description: string;
  sessions: Session[];
}
