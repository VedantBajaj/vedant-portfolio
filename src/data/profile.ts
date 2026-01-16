export const profile = {
  name: 'Vedant Bajaj',
  title: 'Data Engineer | GCP • Airflow • BigQuery',
  location: 'Dallas, TX',
  email: 'vedant.bajaj99@gmail.com',
  phone: '(945) 291-0320',
  linkedin: 'https://www.linkedin.com/in/vedant-bajaj99/',
  github: 'https://github.com/VedantBajaj',
  resumePath: 'public/Vedant_Bajaj_Data_Resume.pdf',
  summary:
    'MS Computer Engineering @ UT Dallas (May 2026) — Data Engineer focused on reliable ETL/ELT on GCP. Built Airflow/Dataflow pipelines into BigQuery, automated reconciliation workflows in SQL Server (60% time reduction), and shipped production OCR pipelines (95% detection).',
  highlights: [
    { label: 'Cloud ETL on GCP', detail: 'Airflow orchestration + Dataflow processing → BigQuery' },
    { label: 'Impact', detail: '60% less manual reconciliation; 40% faster queries (SQL Server)' },
    { label: 'Production pipeline work', detail: 'OCR system at 95% detection + deployed web app' }
  ],
  skills: {
    'Data Engineering & Cloud': ['Python', 'SQL', 'GCP', 'BigQuery', 'Apache Airflow', 'Dataflow', 'ETL Pipelines'],
    'Database Management': ['MySQL', 'SQL Server', 'Data Warehousing', 'Query Optimization', 'Database Design'],
    'Data Analysis & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    'Software Development': ['REST APIs', 'Git', 'Agile', 'OOP'],
    'Additional Tools': ['OpenCV', 'PyTesseract', 'Django', 'Web Scraping']
  },
  experience: [
    {
      role: 'Data Engineering Intern',
      company: 'Conifer Health Solutions (USA)',
      dates: 'Sep 2024 – Present',
      bullets: [
        'Migrating on-prem ETL to GCP; orchestrating batch pipelines in Airflow and triggering Dataflow jobs that land in BigQuery (raw → curated).',
        'Built Python + SQL transformations with safe re-runs (idempotent loads), plus basic quality checks (schema/row-count/dup signals) for reliability.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Rabbit and Tortoise Technology Solutions (India)',
      dates: 'Nov 2022 – Sep 2023',
      bullets: [
        'Built a modular OCR pipeline in Python (OOP) using OpenCV + PyTesseract; achieved ~95% text detection accuracy.',
        'Reusable preprocessing/extraction/validation components reduced future dev effort ~40% and improved extraction consistency for downstream usage.'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Bizsol IT Services (India)',
      dates: 'Aug 2021 – Dec 2021',
      bullets: [
        'Automated reconciliation with a SQL Server integration + reporting layer, reducing manual effort by 60%.',
        'Improved query performance by 40% via indexing + query optimization; built dashboards for business visibility.'
      ]
    }
  ],
  projects: [
    {
      name: 'PDF OCR WebApp (ML-Based Text Extraction)',
      link: 'https://pdf-ocr-webapp.onrender.com',
      tags: ['Python', 'OpenCV', 'PyTesseract', 'Web'],
      bullets: [
        'Deployed web app: upload PDF → extract text → return results (pipeline-first design).',
        'Modular preprocessing + extraction + validation to improve OCR consistency.',
        'Defensive handling for large files/timeouts + logging for failed-page debugging.'
      ]
    },
    {
      name: 'ETL Data Pipeline (Academic)',
      link: '',
      tags: ['Python', 'Pandas', 'NumPy', 'ETL'],
      bullets: [
        'End-to-end ETL pipelines with cleaning + validation steps designed for repeatable reprocessing.',
        'Used batching + incremental patterns to keep runs predictable on large datasets.'
      ]
    },
    {
      name: 'Real‑Time Face Mask Detection',
      link: '',
      tags: ['OpenCV', 'MobileNetV2', 'Python'],
      bullets: [
        'Real-time detection system (~96% accuracy) using MobileNetV2 + OpenCV.',
        'Packaged into reusable modules (clean interfaces + testable components).' 
      ]
    }
  ]
};
