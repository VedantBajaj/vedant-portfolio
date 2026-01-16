---
title: "Document OCR Pipeline + WebApp"
date: "2025-01"
role: "Personal Project / Coursework"
status: "Public"
stack: ["Python", "OpenCV", "PyTesseract", "Django/Backend APIs", "Deployment"]
highlights:
  - "Built a modular OCR pipeline (preprocess → extract → validate) designed for repeatability."
  - "Deployed a web app: upload PDF → extract text → return results; defensive handling for failures/timeouts."
---

## Snapshot (recruiter-friendly)
**Goal:** Turn messy PDFs/images into clean, searchable text with a pipeline you can debug and improve.

**What shipped:** a deployed OCR web app + a modular pipeline where preprocessing is swappable and measurable.

## Pipeline
```mermaid
flowchart LR
  U[User Uploads PDF] --> P[Split pages / render images]
  P --> PRE[Preprocess: denoise, threshold, morphology]
  PRE --> OCR[Text extraction (Tesseract)]
  OCR --> VAL[Validation + cleanup]
  VAL --> OUT[Return extracted text + download]
```

## What I did
- Implemented preprocessing stages (denoise/threshold/morphology) to improve extraction consistency.
- Built a **modular pipeline** so new preprocessing strategies can be A/B tested without rewriting the app.
- Added post-processing (cleanup/validation) to reduce garbage output.

## Production touches
- Clear boundaries: upload → process → results (simple to operate).
- Defensive limits (file size/timeouts) so a single bad doc doesn’t take down the service.
- Logging for “which page failed and why” (useful when improving preprocessing).
