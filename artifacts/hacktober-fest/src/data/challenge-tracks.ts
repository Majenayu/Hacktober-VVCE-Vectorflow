export type ChallengeResource = {
  label: string;
  url: string;
};

export type Challenge = {
  id: string;
  number: string;
  trackTitle: string;
  title: string;
  summary: string;
  description: string;
  judging: string;
  resources: ChallengeResource[];
};

export type ChallengeTrack = {
  id: string;
  number: string;
  title: string;
  domain: string;
  focus: string;
  challenges: Challenge[];
};

export const challengeTracks: ChallengeTrack[] = [
  {
    id: 'track-ai-data',
    number: 'TRACK 1',
    title: 'AI & Data Intelligence',
    domain: 'Artificial Intelligence / Machine Learning / Data Science',
    focus:
      'This track focuses on building AI applications that combine open models, multimodal AI, datasets, analytics, intelligent assistants, and data-driven solutions.',
    challenges: [
      {
        id: 'gemma-4',
        number: 'CHALLENGE 01',
        trackTitle: 'AI & Data Intelligence',
        title: 'Best Use of Gemma 4',
        summary:
          'Build a useful AI prototype with the open-weights Gemma 4 model, including multimodal text and image applications.',
        description:
          'Use Gemma 4 through the Gemini API to build a focused tool for learning, creativity, productivity, or your community. The model can work with text and images, making assistants that understand more of what users share.',
        judging:
          'The project must actually use a Gemma model through the Gemini API. Identify the model in the README and show the integration in the code or demo.',
        resources: [
          { label: 'Gemma 4 resources', url: 'https://mlh.link/gemma' },
          { label: 'Gemma Quickstart', url: 'https://mlh.link/gemma-quickstart' },
          { label: 'Gemma API docs', url: 'https://mlh.link/gemma-docs' },
          { label: 'Gemma Beginner Guide', url: 'https://mlh.link/gemma-beginnerguide' },
        ],
      },
      {
        id: 'snowflake-open-source-ai',
        number: 'CHALLENGE 02',
        trackTitle: 'AI & Data Intelligence',
        title: 'Best Open-Source AI Project with Snowflake',
        summary:
          'Use Snowflake CoCo to explore a freely accessible dataset, then build an open-source AI project around it.',
        description:
          'Explore Snowflake Marketplace listings or Snowflake sample data with CoCo. Use it to understand a dataset, write queries, or create a data pipeline, then build an AI app, agent, analysis, or other useful experience with open-source code.',
        judging:
          'Eligible projects use Snowflake CoCo, a freely accessible Snowflake dataset, and open-source or open-weight AI. Publish the project in a public GitHub repository with an open-source license, identify the dataset, and show how CoCo helped.',
        resources: [
          {
            label: 'Snowflake CoCo overview',
            url: 'https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code',
          },
          {
            label: 'Snowflake CoCo trial',
            url: 'https://signup.snowflake.com/cortex-code/',
          },
          {
            label: 'Explore Snowflake Marketplace listings',
            url: 'https://docs.snowflake.com/en/collaboration/consumer-listings-exploring',
          },
          {
            label: 'Snowflake sample datasets',
            url: 'https://docs.snowflake.com/en/user-guide/sample-data',
          },
        ],
      },
    ],
  },
  {
    id: 'track-agents-open-source',
    number: 'TRACK 2',
    title: 'AI Agents & Open-Source Development',
    domain: 'AI Agents / Software Engineering / Web3 / Open Source',
    focus:
      'This track focuses on autonomous AI agents, agent identity and reputation, developer tooling, open-source development, AI-assisted engineering, and Web3-based agent ecosystems.',
    challenges: [
      {
        id: 'solana-agent-registry',
        number: 'CHALLENGE 01',
        trackTitle: 'AI Agents & Open-Source Development',
        title: 'Best Use of the Solana Agent Registry',
        summary:
          'Build an open-source project that gives an AI agent verifiable identity, understandable reputation, or useful validation records.',
        description:
          'Use the Solana Agent Registry, an open onchain protocol for agent identity, portable reputation, and validation records. Projects can register an agent, help people discover agents and understand their feedback, or use validation records to support safer decisions.',
        judging:
          'The Agent Registry must be an important part of the experience. Demonstrate the relevant identity, reputation, feedback, validation, or other onchain interaction. Publish the project in a public GitHub repository with an open-source license.',
        resources: [
          { label: 'Solana Agent Registry', url: 'https://solana.com/agent-registry' },
          { label: 'Solana Hack Day resources', url: 'https://mlh.link/solana' },
          { label: 'Solana documentation', url: 'https://mlh.link/solana-docs' },
          { label: 'Solana tutorials', url: 'https://mlh.link/solana-tutorials' },
          { label: 'Solana templates', url: 'https://mlh.link/solana-templates' },
        ],
      },
      {
        id: 'github-copilot',
        number: 'CHALLENGE 02',
        trackTitle: 'AI Agents & Open-Source Development',
        title: 'Best Hack Built with GitHub Copilot',
        summary:
          'Build an open-source AI project and show how Copilot helped your team plan, develop, test, or document it.',
        description:
          'Use GitHub Copilot as an AI pair programmer during development. Teams can use it to explore an unfamiliar model, framework, API, or codebase, generate boilerplate or tests, and focus on the core experience.',
        judging:
          'Build a working open-source AI project in a public GitHub repository with an open-source license. Explain in the README or demo specific ways Copilot helped the team learn, solve a problem, test, or document the project.',
        resources: [
          { label: 'GitHub Copilot documentation', url: 'https://docs.github.com/en/copilot' },
          { label: 'Fast-tracked student access (MLH)', url: 'https://mlh.link/GitHub' },
          {
            label: 'GitHub Student Developer Pack',
            url: 'https://education.github.com/pack',
          },
          {
            label: 'Set up Copilot for students',
            url: 'https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students',
          },
        ],
      },
    ],
  },
];