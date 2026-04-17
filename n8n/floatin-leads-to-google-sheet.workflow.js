import { workflow, trigger, node, expr } from '@n8n/workflow-sdk';

const floatinLeadWebhook = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: {
    name: 'Floatin Lead Webhook',
    position: [240, 300],
    parameters: {
      httpMethod: 'POST',
      path: 'floatin-leads',
      responseMode: 'onReceived',
      options: {
        allowedOrigins: '*',
        responseCode: {
          values: {
            responseCode: 200,
          },
        },
      },
    },
  },
  output: [
    {
      body: {
        source: 'audit',
        name: 'Aarav Mehta',
        email: 'aarav@example.com',
        phone: '+919999999999',
        submittedAt: '2026-04-18T10:00:00.000Z',
        pageUrl: 'https://floatin.in/audit',
        referrer: 'https://www.google.com/',
        data: {
          businessType: 'leadgen',
          website: 'https://brand.example',
          monthlySpend: '₹50K - ₹2L/month',
          currentChannels: ['Google Ads', 'Meta Ads'],
          biggestChallenge: 'Lead quality is inconsistent',
          monthlyRevenue: '₹5L - ₹10L',
        },
      },
      headers: {
        'content-type': 'application/json',
      },
      params: {},
      query: {},
      webhookUrl: 'https://n8n.floatin.in/webhook/floatin-leads',
      executionMode: 'production',
    },
  ],
});

const normalizeLead = node({
  type: 'n8n-nodes-base.set',
  version: 3.4,
  config: {
    name: 'Normalize Lead',
    position: [560, 300],
    parameters: {
      mode: 'manual',
      includeOtherFields: false,
      assignments: {
        assignments: [
          {
            id: 'submittedAt',
            name: 'submittedAt',
            type: 'string',
            value: expr('{{ $json.body.submittedAt ?? $now.toISO() }}'),
          },
          {
            id: 'leadType',
            name: 'leadType',
            type: 'string',
            value: expr('{{ ($json.body.source ?? "").startsWith("tool:") ? "tool" : ($json.body.source ?? "unknown") }}'),
          },
          {
            id: 'source',
            name: 'source',
            type: 'string',
            value: expr('{{ $json.body.source ?? "" }}'),
          },
          {
            id: 'toolSlug',
            name: 'toolSlug',
            type: 'string',
            value: expr('{{ ($json.body.source ?? "").startsWith("tool:") ? ($json.body.source ?? "").replace("tool:", "") : "" }}'),
          },
          {
            id: 'name',
            name: 'name',
            type: 'string',
            value: expr('{{ $json.body.name ?? "" }}'),
          },
          {
            id: 'email',
            name: 'email',
            type: 'string',
            value: expr('{{ $json.body.email ?? "" }}'),
          },
          {
            id: 'phone',
            name: 'phone',
            type: 'string',
            value: expr('{{ $json.body.phone ?? "" }}'),
          },
          {
            id: 'pageUrl',
            name: 'pageUrl',
            type: 'string',
            value: expr('{{ $json.body.pageUrl ?? "" }}'),
          },
          {
            id: 'referrer',
            name: 'referrer',
            type: 'string',
            value: expr('{{ $json.body.referrer ?? "" }}'),
          },
          {
            id: 'businessType',
            name: 'businessType',
            type: 'string',
            value: expr('{{ $json.body.data?.businessType ?? "" }}'),
          },
          {
            id: 'website',
            name: 'website',
            type: 'string',
            value: expr('{{ $json.body.data?.website ?? "" }}'),
          },
          {
            id: 'monthlySpend',
            name: 'monthlySpend',
            type: 'string',
            value: expr('{{ $json.body.data?.monthlySpend ?? "" }}'),
          },
          {
            id: 'currentChannels',
            name: 'currentChannels',
            type: 'string',
            value: expr('{{ Array.isArray($json.body.data?.currentChannels) ? $json.body.data.currentChannels.join(", ") : "" }}'),
          },
          {
            id: 'biggestChallenge',
            name: 'biggestChallenge',
            type: 'string',
            value: expr('{{ $json.body.data?.biggestChallenge ?? "" }}'),
          },
          {
            id: 'monthlyRevenue',
            name: 'monthlyRevenue',
            type: 'string',
            value: expr('{{ $json.body.data?.monthlyRevenue ?? "" }}'),
          },
          {
            id: 'toolTitle',
            name: 'toolTitle',
            type: 'string',
            value: expr('{{ $json.body.data?.toolTitle ?? "" }}'),
          },
          {
            id: 'toolInputsJson',
            name: 'toolInputsJson',
            type: 'string',
            value: expr('{{ JSON.stringify($json.body.data?.inputs ?? {}) }}'),
          },
          {
            id: 'toolResultsJson',
            name: 'toolResultsJson',
            type: 'string',
            value: expr('{{ JSON.stringify($json.body.data?.results ?? []) }}'),
          },
          {
            id: 'rawDataJson',
            name: 'rawDataJson',
            type: 'string',
            value: expr('{{ JSON.stringify($json.body.data ?? {}) }}'),
          },
        ],
      },
      options: {
        dotNotation: false,
      },
    },
  },
  output: [
    {
      submittedAt: '2026-04-18T10:00:00.000Z',
      leadType: 'audit',
      source: 'audit',
      toolSlug: '',
      name: 'Aarav Mehta',
      email: 'aarav@example.com',
      phone: '+919999999999',
      pageUrl: 'https://floatin.in/audit',
      referrer: 'https://www.google.com/',
      businessType: 'leadgen',
      website: 'https://brand.example',
      monthlySpend: '₹50K - ₹2L/month',
      currentChannels: 'Google Ads, Meta Ads',
      biggestChallenge: 'Lead quality is inconsistent',
      monthlyRevenue: '₹5L - ₹10L',
      toolTitle: '',
      toolInputsJson: '{}',
      toolResultsJson: '[]',
      rawDataJson: '{"businessType":"leadgen"}',
    },
  ],
});

const appendLeadToGoogleSheet = node({
  type: 'n8n-nodes-base.googleSheets',
  version: 4.7,
  config: {
    name: 'Append Lead to Google Sheet',
    position: [880, 300],
    parameters: {
      resource: 'sheet',
      operation: 'append',
      authentication: 'oAuth2',
      documentId: {
        __rl: true,
        mode: 'id',
        value: '1SLk2S14nuLni6YxHT_VR9fTdYRDjGT1G1C-b-lq11a8',
      },
      sheetName: {
        __rl: true,
        mode: 'name',
        value: 'Leads',
      },
      columns: {
        mappingMode: 'autoMapInputData',
        value: null,
      },
      options: {
        cellFormat: 'USER_ENTERED',
        handlingExtraData: 'insertInNewColumn',
        useAppend: true,
      },
    },
  },
  output: [
    {
      submittedAt: '2026-04-18T10:00:00.000Z',
      leadType: 'audit',
      source: 'audit',
      name: 'Aarav Mehta',
    },
  ],
});

export default workflow('ShzXw0itwxEv2XuJ', 'Floatin Leads → Google Sheet')
  .add(floatinLeadWebhook)
  .to(normalizeLead)
  .to(appendLeadToGoogleSheet);
