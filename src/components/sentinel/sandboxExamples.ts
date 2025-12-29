export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type SandboxExample = {
  id: string;
  label: string;
  description: string;
  method: HttpMethod;
  path: string;
  body: unknown | null;
  requiredHeaders?: Array<'x-infra-scope' | 'x-infra-key' | 'x-infra-actor'>;
};

export const SENTINEL_SANDBOX_EXAMPLES: SandboxExample[] = [
  {
    id: 'health',
    label: 'Health Check',
    description: 'Verify the demo backend is running (in-browser IndexedDB + retrieval).',
    method: 'GET',
    path: '/health',
    body: null
  },
  {
    id: 'memory_put',
    label: 'Memory: Upsert Record',
    description: 'Store a scoped memory with optional embedding.',
    method: 'POST',
    path: '/v1/memory/records',
    requiredHeaders: ['x-infra-scope'],
    body: {
      scope: 'tenant:acme',
      type: 'fact',
      content: 'A customer prefers email for updates.',
      tags: ['preference', 'channel'],
      embed: true
    }
  },
  {
    id: 'memory_search',
    label: 'Memory: Hybrid Search',
    description: 'Hybrid = lexical + semantic (server-side embeddings).',
    method: 'POST',
    path: '/v1/memory/search',
    requiredHeaders: ['x-infra-scope'],
    body: {
      scope: 'tenant:acme',
      query: 'preferred channel',
      mode: 'hybrid',
      limit: 5
    }
  },
  {
    id: 'kb_upsert',
    label: 'KB: Upsert Document',
    description: 'Store a KB document; auto-chunks and embeds into pgvector.',
    method: 'POST',
    path: '/v1/kb/documents',
    requiredHeaders: ['x-infra-scope'],
    body: {
      scope: 'tenant:acme',
      source: 'upload',
      title: 'Operations Runbook',
      content: 'Escalations require manager approval. Retain records for 7 years.'
    }
  },
  {
    id: 'kb_search',
    label: 'KB: Hybrid Search',
    description: 'Search across chunks; returns top hits with doc + chunk context.',
    method: 'POST',
    path: '/v1/kb/search',
    requiredHeaders: ['x-infra-scope'],
    body: {
      scope: 'tenant:acme',
      query: 'retention period',
      mode: 'hybrid',
      limit: 5
    }
  },
  {
    id: 'sessions_create',
    label: 'Sessions: Create',
    description: 'Create a session with optional initial state.',
    method: 'POST',
    path: '/v1/sessions',
    requiredHeaders: ['x-infra-scope'],
    body: {
      id: 'sess_demo',
      scope: 'tenant:acme',
      title: 'Onboarding assistant session',
      state: { stage: 'start' }
    }
  },
  {
    id: 'sessions_message',
    label: 'Sessions: Add Message',
    description: 'Append a message to the session and embed for search.',
    method: 'POST',
    path: '/v1/sessions/sess_demo/messages',
    requiredHeaders: ['x-infra-scope'],
    body: {
      role: 'user',
      content: 'Summarize what we discussed so far.',
      embed: true
    }
  },
  {
    id: 'tools_upsert',
    label: 'Tools: Register Tool',
    description: 'Register an HTTP tool (base URL + optional secret-backed headers).',
    method: 'POST',
    path: '/v1/tools',
    requiredHeaders: ['x-infra-scope'],
    body: {
      id: 'tool_demo',
      scope: 'tenant:acme',
      name: 'Demo Tool',
      kind: 'http',
      baseUrl: 'https://jsonplaceholder.typicode.com',
      enabled: true,
      timeoutMs: 30000,
      config: {
        headers: {
          'user-agent': 'SentinelSandbox/1.0'
        }
      }
    }
  },
  {
    id: 'tools_op_upsert',
    label: 'Tools: Register Operation',
    description: 'Register an operation for the tool (method + path).',
    method: 'POST',
    path: '/v1/tools/tool_demo/operations?scope=tenant:acme',
    requiredHeaders: ['x-infra-scope'],
    body: {
      id: 'op_demo',
      name: 'get_todo',
      method: 'GET',
      path: '/todos/1',
      enabled: true
    }
  },
  {
    id: 'tools_execute',
    label: 'Tools: Execute (API Gateway)',
    description: 'Execute a tool operation and store the output as an evidence artifact.',
    method: 'POST',
    path: '/v1/tools/execute',
    requiredHeaders: ['x-infra-scope'],
    body: {
      scope: 'tenant:acme',
      toolId: 'tool_demo',
      operation: 'get_todo',
      input: {}
    }
  }
];
