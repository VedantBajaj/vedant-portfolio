export const profile = {
  name: 'Vedant Bajaj',
  title: 'Data Engineer | GCP • Airflow • BigQuery',
  location: 'Dallas, TX',
  email: 'vedant.bajaj99@gmail.com',
  phone: '(945) 291-0320',
  linkedin: 'https://www.linkedin.com/in/vedant-bajaj99/',
  github: 'https://github.com/VedantBajaj',
  resumePath: 'Vedant_Bajaj_Data_Resume.pdf',
  summary:
  "Data Engineering graduate student with experience building and maintaining batch data pipelines for analytics. I focus on data correctness, performance, and making pipelines easy to operate and debug.",
  highlights: [
  "Built and supported batch data pipelines for healthcare analytics and reporting.",
  "Optimized SQL stored procedures and transformations to improve performance and reliability.",
  "Handled data validation, ad-hoc fixes, and production data issues end-to-end.",
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
  role: "Data Engineering Intern",
  company: "Conifer Health Solutions",
  dates: "2024 – Present",
  bullets: [
    "Built and maintained batch data pipelines that power healthcare analytics and reporting workflows.",
    "Optimized SQL stored procedures and complex queries to reduce execution time and improve report performance.",
    "Performed data validation checks such as row counts, null checks, and schema consistency to ensure data accuracy.",
    "Investigated and resolved ad-hoc data issues reported by analytics and business teams.",
    "Refactored SQL and transformation logic to make pipelines safer to re-run and easier to debug.",
    "Worked closely with stakeholders to understand reporting requirements and deliver reliable, analytics-ready datasets.",
  ]},
    {
  role: "Software Engineer",
  company: "Rabbit & Tortoise Technology Solutions",
  dates: "2022 – 2023",
  bullets: [
    "Built a document data extraction pipeline using OCR to convert unstructured files into structured text.",
    "Improved extraction accuracy through image preprocessing and validation checks.",
    "Designed the pipeline in modular stages to support reprocessing and future extensions.",
    "Delivered the solution as a web-based workflow for easier use by non-technical users.",
  ]},
    {
  role: "Software Engineer Intern",
  company: "Bizsol IT Services",
  dates: "2021",
  bullets: [
    "Built SQL-based workflows for reconciliation and reporting across enterprise datasets.",
    "Optimized slow queries using indexing and query refactoring to improve performance.",
    "Supported analytics teams by delivering cleaner and more reliable reporting tables.",
  ]}
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
