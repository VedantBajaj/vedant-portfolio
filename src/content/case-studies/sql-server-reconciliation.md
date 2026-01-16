---
title: "SQL Server Integration + Reconciliation Automation"
date: "2021-12"
role: "Software Engineer Intern · Bizsol IT Services"
status: "Public"
stack: ["SQL Server", "SQL", "Indexing", "Data Integration", "Dashboards"]
highlights:
  - "Reduced manual reconciliation time by **60%** by automating integration + reporting tables."
  - "Improved query performance by **40%** using indexing + query optimization."
---

## Snapshot (recruiter-friendly)
**Goal:** Reduce manual reconciliation work and make reporting fast + trustworthy.

**Impact:** **60%** less manual reconciliation time; **40%** faster queries.

**What shipped:** SQL Server integration + reconciliation layer feeding reporting tables + dashboards.

## Architecture (simplified)
```mermaid
flowchart LR
  S1[Source A] --> STG[(Staging Tables)]
  S2[Source B] --> STG
  STG -->|Standardize| INT[(Integration Layer)]
  INT -->|Reconcile| RPT[(Reporting Tables)]
  RPT --> BI[Dashboards]
```

## Reliability patterns
- Repeatable runs (same inputs → same outputs)
- Controlled updates to reporting tables
- Monitoring key reconciliation metrics

## Outcome
- Manual reconciliation time reduced by **60%**
- Query performance improved by **40%**
