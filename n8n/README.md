# n8n Automations

This folder keeps the production n8n workflow definitions in Git so webhook setup is backed up outside the n8n UI.

## Floatin Leads -> Google Sheet

- n8n workflow name: `Floatin Leads -> Google Sheet`
- n8n workflow ID: `ShzXw0itwxEv2XuJ`
- webhook URL: `https://n8n.floatin.in/webhook/floatin-leads`
- Google Sheet: `Floatin Leads Master`
- Google Sheet ID: `1SLk2S14nuLni6YxHT_VR9fTdYRDjGT1G1C-b-lq11a8`
- sheet tab: `Leads`

### Covered sources

- `audit`
- `tool:<slug>` leads from the calculator/tool pages

### Current behavior

- accepts POST webhook payloads from the website
- normalizes audit and tool submissions into one flat row shape
- appends each lead into the `Leads` tab
- auto-creates new columns in the sheet if extra mapped fields appear later

### Sync note

If the live n8n workflow is changed in the n8n UI, this file should be re-exported so GitHub stays in sync with production.
