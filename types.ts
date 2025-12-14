export enum BCIRoute {
  INVASIVE = 'Invasive (e.g., Neuralink)',
  NON_INVASIVE = 'Non-Invasive (e.g., EEG/Ultrasound)',
  DIGITAL_TWIN = 'Digital Twin & Simulation',
  SEMI_INVASIVE = 'Semi-Invasive (e.g., Stentrode)'
}

export enum AgentRole {
  TECH_MODELER = 'Technical Modeler',
  CRITIC = 'Critic & Risk Assessor',
  PREDICTOR = 'Trend Predictor',
  ETHICIST = 'Ethics & Policy Guardian',
  COORDINATOR = 'MAS Coordinator'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  senderName: string; // The specific agent name or "User"
  content: string;
  timestamp: number;
}

export interface SimulationMetric {
  subject: string;
  A: number; // Invasive
  B: number; // Non-Invasive
  C: number; // Semi-Invasive
  fullMark: number;
}

export interface TrendData {
  year: string;
  invasive: number;
  nonInvasive: number;
  semiInvasive: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  agent: AgentRole;
  action: string;
  status: 'success' | 'processing' | 'warning';
}