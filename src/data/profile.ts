export const profile = {
  name: 'Vedant Bajaj',
  title: 'Data Engineer',
  location: 'Dallas, TX',
  email: 'vedant.bajaj99@gmail.com',
  phone: '(945) 291-0320',
  linkedin: 'https://www.linkedin.com/in/vedant-bajaj99/',
  github: 'https://github.com/VedantBajaj',
  resumePath: 'Vedant_Bajaj_Data_Resume.pdf',
  summary:
  'I turn chaotic data into calm, trustworthy tables. I build data pipelines, optimize slow SQL, and fix broken reports—so dashboards stop lying and people stop panicking.',
  highlights: [{
  'label':['Built and supported batch data pipelines for healthcare analytics and reporting.']},
  {'label':['Optimized SQL stored procedures to improve performance and reliability.']},
  {'label':['Handled data validation, ad-hoc fixes, and production data issues end-to-end.']}
],
  skills: {
    'Data Engineering & Cloud': [
      'Data Pipelines',
      'ETL / Batch Processing',
      'Data Validation',
      'Data Quality Checks',
      'Python',
      'SQL',
      'GCP',
      'BigQuery',
      'Apache Airflow',
      'Dataflow'
    ],
    'Streaming & Distributed Systems': [
      'Kafka',
      'Spark',
      'Real-time Streaming',
      'Message Queues',
      'Distributed Processing',
      'Consumer Groups / Offsets'
    ],
    'Database & Performance': [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'Stored Procedures',
      'Query Optimization',
      'Indexing',
      'Data Warehousing',
      'Schema Design'
    ],
    'ML / Unstructured Data': [
      'OCR',
      'Text Extraction',
      'Image Preprocessing',
      'OpenCV',
      'PyTesseract'
    ],
    'Software & Tools': [
      'Docker',
      'Docker Compose',
      'REST APIs',
      'Git',
      'Logging & Debugging',
      'Web Applications'
    ]
  },
  experience: [
    {
  role: 'Data Engineering Intern',
  company: 'Conifer Health Solutions',
  dates: '2025 – Present',
  bullets: [{
    problem:'Analytics workflows required improvements in performance, consistency, and data reliability as reporting needs scaled.',
    tech:'SQL Server, stored procedures, query optimization, batch data pipelines, SQL-based data validation (row counts, null checks, schema consistency), and ad-hoc debugging.',
    impact:'Improved report refresh speed and reliability, strengthened data quality checks before downstream consumption, and supported analytics teams by resolving data issues efficiently and safely.',
    }]},
    {
  role: 'Software Engineer',
  company: 'Rabbit & Tortoise Technology Solutions',
  dates: '2022 – 2023',
  bullets: [{
    problem:'Processing and analyzing unstructured documents required a more consistent, debuggable, and reusable approach.',
    tech:'Python, OpenCV, PyTesseract, image preprocessing (denoising, thresholding, morphology), modular pipeline design, validation checks, and page-level logging.',
    impact:'Enabled reliable conversion of unstructured PDFs and images into searchable text, improved extraction consistency across document types, and made the pipeline easier to extend and maintain.',
    }]},
    {
  role: 'Software Engineer Intern',
  company: 'Bizsol IT Services',
  dates: '2021',
  bullets: [{
    problem:'Data reconciliation and reporting workflows needed better scalability and automation to support growing datasets.',
    tech: 'SQL, data integration workflows, query refactoring, indexing, and performance tuning.',
    impact:'Reduced manual effort in reconciliation processes, improved query performance, and delivered more consistent reporting datasets for analytics and business teams.',
    }]}
  ],
  projects: [
    {
      name: 'PDF OCR WebApp (ML-Based Text Extraction)',
      link: 'https://pdf-ocr-webapp.onrender.com',
      tags: ['Python', 'OpenCV', 'PyTesseract', 'Web'],
      bullets: [
        'Designed an end-to-end OCR pipeline: upload → preprocessing → text extraction → validation → results.',
        'Implemented image preprocessing (denoising, thresholding, morphology) to improve OCR accuracy and consistency.',
        'Built modular pipeline stages so preprocessing strategies can be swapped and improved without rewriting the app.',
        'Added post-processing and validation to clean extracted text and reduce garbage output.'
      ]
    },
    {
      name: "Real-Time Sentiment Platform (Kafka + Spark + Postgres + Grafana)",
      tags: ["Kafka", "Spark", "Streaming", "PostgreSQL", "Docker", "Grafana", "Python"],
      link: "https://github.com/VedantBajaj/sentiment-platform",
      bullets: [
        "Built an end-to-end streaming pipeline: producer → Kafka → Spark processing → Postgres storage → Grafana dashboard.",
        "Designed a scalable, containerized stack with Docker Compose to run the full system locally and deploy consistently.",
        "Implemented real-time aggregation and sentiment scoring to power dashboards for trends, spikes, and throughput.",
        "Added reliability-focused plumbing: consumer/group handling, restart-safe processing, and schema-consistent writes."
      ]
    },
    // {
    //   name: 'Real‑Time Face Mask Detection',
    //   link: '',
    //   tags: ['OpenCV', 'MobileNetV2', 'Python'],
    //   bullets: [
    //     'Real-time detection system (~96% accuracy) using MobileNetV2 + OpenCV.',
    //     'Packaged into reusable modules (clean interfaces + testable components).' 
    //   ]
    // }
  ]
};
