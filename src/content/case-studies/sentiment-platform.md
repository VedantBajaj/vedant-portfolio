---
title: "Real-Time Sentiment Platform (Kafka + Spark)"
date: "2026-01-16"
status: "Public"
role: "Data Engineering · Streaming Systems"
stack:
  - Kafka
  - Spark
  - PostgreSQL
  - Docker
  - Grafana
  - Python
---

## Snapshot (recruiter-friendly)

**Goal:**  
Process streaming text data and compute sentiment in real time so trends, spikes, and system health are visible immediately.

**What shipped:**  
A fully containerized, end-to-end streaming data platform with ingestion, processing, storage, and live dashboards.

## **Architecture**
<div class="mermaid">
  flowchart LR
  P[Producer emits text events] --> K[Kafka topic]
  K --> S[Spark streaming job]
  S --> A[Sentiment scoring + aggregation]
  A --> DB[(PostgreSQL)]
  DB --> G[Grafana dashboards]
</div>


## **What I did**
- Built a Kafka-based ingestion layer to handle continuous streams of text events.
- Implemented Spark streaming jobs to compute sentiment scores and rolling aggregates in near real time.
- Designed structured writes into PostgreSQL optimized for analytics and dashboard queries.
- Containerized Kafka, Spark, Postgres, and Grafana using Docker Compose for reproducible local development.

## **Why it matters (DE skills shown)**
- Streaming fundamentals (topics, consumer groups, offsets)
- Scalable processing (Spark execution, micro-batching / streaming concepts)
- Analytics store + dashboards (Postgres + Grafana)
- Production mindset (restarts, observability, consistent deployments)
