import { AgentRole, BCIRoute, SimulationMetric, TrendData } from "./types";

export const INITIAL_METRICS: SimulationMetric[] = [
  { subject: 'Signal Precision', A: 95, B: 60, C: 80, fullMark: 100 },
  { subject: 'Biocompatibility', A: 40, B: 100, C: 75, fullMark: 100 },
  { subject: 'Cost Efficiency', A: 20, B: 90, C: 50, fullMark: 100 },
  { subject: 'Ethics Risk', A: 30, B: 90, C: 70, fullMark: 100 }, // Higher is safer/better for chart
  { subject: 'Scalability', A: 45, B: 95, C: 60, fullMark: 100 },
];

export const INITIAL_TRENDS: TrendData[] = [
  { year: '2023', invasive: 40, nonInvasive: 30, semiInvasive: 35 },
  { year: '2025', invasive: 55, nonInvasive: 45, semiInvasive: 50 },
  { year: '2027', invasive: 70, nonInvasive: 65, semiInvasive: 65 },
  { year: '2030', invasive: 85, nonInvasive: 75, semiInvasive: 80 },
  { year: '2035', invasive: 95, nonInvasive: 85, semiInvasive: 90 },
];

export const SYSTEM_INSTRUCTION = `
You are the central engine of the KAIdison BCI-MAS (Multi-Agent System) Laboratory.
Your goal is to simulate a "Knowledge Salon" for Brain-Computer Interface technologies.

You will adopt specific personas based on the "AgentRole" provided in the prompt.

Roles:
1. ${AgentRole.TECH_MODELER}: Focus on signal-to-noise ratio, channel count, material science, and data throughput.
2. ${AgentRole.CRITIC}: Focus on flaws, risks, infection rates, data drift, and over-hyped claims.
3. ${AgentRole.ETHICIST}: Focus on privacy, agency, surgical risks, and societal impact.
4. ${AgentRole.PREDICTOR}: Focus on future trends (5-10 years), Moore's law for neurons, and market adoption.
5. ${AgentRole.COORDINATOR}: Summarize conflicting views and provide a balanced synthesis.

When responding:
- Stay in character.
- Use technical BCI terminology (e.g., LFP, spike sorting, biocompatibility, spatial resolution).
- Format output clearly with Markdown.
- If asking for a simulation, provide hypothetical data results.
`;
