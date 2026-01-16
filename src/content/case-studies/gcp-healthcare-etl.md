---
title: "Healthcare ETL to BigQuery (GCP Migration)"
date: "2024-11"
role: "Data Engineering Intern · Conifer Health Solutions"
status: "Anonymized"
stack: ["GCP", "BigQuery", "Apache Airflow", "Dataflow", "Python", "SQL"]
highlights:
  - "Migrated on‑prem batch pipelines to GCP; standardized raw → curated layers in BigQuery."
  - "Built Airflow DAGs with retries + backfills; designed idempotent loads for safe re‑runs."
  - "Implemented Python/SQL transformations for analytics-ready datasets (anonymized healthcare domain)."
---

## Snapshot (recruiter-friendly)
**Goal:** Move legacy on‑prem ETL into a cloud-native workflow that is easier to operate, re-run, and scale.

**My role:** owned parts of the orchestration + transformation workflow (DAG design, reliability, curated outputs).

**What shipped:** automated batch pipelines landing in **BigQuery**, with clear raw/curated layers and repeatable runs.

## Architecture
```mermaid
flowchart LR
  A[On‑prem Sources] -->|Extract| B[Landing / Staging]
  B --> C[Airflow DAGs]
  C -->|Trigger| D[Dataflow Jobs]
  D --> E[BigQuery Raw]
  E --> F[BigQuery Curated]
  F --> G[Analytics / Dashboards]

  C --> H[(Logs/Alerts)]
  D --> H
```

## What I did
- **Orchestration:** built/maintained **Airflow DAGs** with retries, SLAs, and backfill support.
- **Transforms:** wrote **Python + SQL** logic to clean/standardize data and produce curated tables.
- **Warehouse modeling:** organized **raw → curated** BigQuery datasets to reduce downstream breakage.

## Reliability & data quality (the “DE signal”)
- **Idempotent loads** so re-runs don’t double-count.
- **Schema checks** (expected columns/types) + sanity checks (row counts, duplicates).
- **Operational visibility** via logs/alerts to reduce time-to-diagnose.

## Next improvements (if I had more cycles)
- Add **dbt** for curated models + tests.
- Add **partitioning/clustering** guidelines for BigQuery cost + performance.
- Add lightweight **lineage + docs** so new stakeholders can self-serve.
