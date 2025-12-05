const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    }
  },
  numbering: {
    config: [{
      reference: "bullet-list",
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: "•",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } }
      }]
    }]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Header - Name
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 },
        children: [new TextRun({ text: "ANNA ESCALADA CORNELLAS", size: 32, bold: true })]
      }),
      
      // Contact Info
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: "Cloud Engineer · Fullstack Developer", size: 22 })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [new TextRun({ text: "Barcelona, Spain · annaescalada@gmail.com · +34 617 269 555", size: 20 })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 360 },
        children: [new TextRun({ text: "github.com/annaescalada · linkedin.com/in/annaescalada", size: 20 })]
      }),

      // Summary
      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun({ text: "PROFESSIONAL SUMMARY", size: 26, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 360 },
        children: [new TextRun({ 
          text: "Fullstack Engineer with 6+ years building scalable applications using TypeScript, Node.js, and React, with a strong backend focus. Experienced in designing APIs, optimizing database performance, and implementing CI/CD pipelines. Growing expertise in AWS and Infrastructure as Code through hands-on projects. Track record of improving system reliability, leading technical teams, and delivering end-to-end features. Currently pursuing AWS Solutions Architect certification to deepen cloud architecture skills.",
          size: 22
        })]
      }),

      // Technical Skills
      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun({ text: "TECHNICAL SKILLS", size: 26, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Cloud & Infrastructure: ", bold: true, size: 22 }),
          new TextRun({ text: "AWS (Lambda, API Gateway, DynamoDB, S3, CloudFront, EventBridge, Step Functions, ECS, VPC, IAM), AWS CDK, Serverless Architecture, IaC", size: 22 })
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Backend: ", bold: true, size: 22 }),
          new TextRun({ text: "TypeScript, Node.js, Express, NestJS, REST APIs, GraphQL", size: 22 })
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Frontend: ", bold: true, size: 22 }),
          new TextRun({ text: "React, Next.js, Tailwind CSS, Material UI", size: 22 })
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "DevOps & Testing: ", bold: true, size: 22 }),
          new TextRun({ text: "Docker, GitHub Actions, CI/CD, Playwright, Cypress, Jest", size: 22 })
        ]
      }),
      new Paragraph({
        spacing: { after: 360 },
        children: [
          new TextRun({ text: "Databases: ", bold: true, size: 22 }),
          new TextRun({ text: "PostgreSQL, MongoDB, Redis, MySQL, DynamoDB", size: 22 })
        ]
      }),

      // Experience
      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun({ text: "PROFESSIONAL EXPERIENCE", size: 26, bold: true })]
      }),

      // Role 1
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Technical Team Lead", size: 24, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Zazou Group GmbH · ", size: 22, italics: true }),
          new TextRun({ text: "Jan 2025 – Present · Barcelona, Spain", size: 22 })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Leading engineering team of 10+ developers, implementing structured workflows that increased delivery predictability by 40%", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Architecting PostgreSQL migration from MongoDB, designing normalized schemas and optimizing query performance for 100K+ records", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [new TextRun({ text: "Established 1:1s, goal tracking, and knowledge-sharing practices that improved team collaboration and reduced onboarding time", size: 22 })]
      }),

      // Role 2
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Full Stack Engineer", size: 24, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Zazou Group GmbH · ", size: 22, italics: true }),
          new TextRun({ text: "Jul 2021 – Jan 2025 · Barcelona, Spain / Mannheim, Germany", size: 22 })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Built resilient serverless integrations using Lambda and EventBridge with retry logic and timeout controls, reducing integration failures by 80%", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Implemented Redis caching layer that improved response times by 60% and stabilized session handling for 10K+ concurrent users", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Strengthened application security through SSO implementation and vulnerability remediation, achieving successful penetration test", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Introduced automated testing and CI/CD pipelines using GitHub Actions, reducing regression bugs by 70%", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [new TextRun({ text: "Delivered business-critical features end-to-end across React frontend, Node.js backend, and AWS deployment for hospitality platform serving 50K+ guests monthly", size: 22 })]
      }),

      // Role 3
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Full Stack Developer", size: 24, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "DALSON TRADE SL · ", size: 22, italics: true }),
          new TextRun({ text: "Oct 2019 – Jul 2021 · Barcelona, Spain", size: 22 })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Reduced production bugs by 50% through comprehensive test coverage and standardized debugging workflows", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Optimized Redux state management patterns, improving application performance and reducing render cycles", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 360 },
        children: [new TextRun({ text: "Documented and standardized API architecture, enabling faster feature development and reducing integration time", size: 22 })]
      }),

      // Projects
      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun({ text: "SELECTED PROJECTS", size: 26, bold: true })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "AWS CDK: Lambda-S3 Infrastructure with IAM", size: 23, bold: true })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Built production-ready CDK stack with S3, Lambda, and least-privilege IAM roles following AWS best practices", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [new TextRun({ text: "Implemented environment-based configuration and CloudWatch logging for multi-stage deployments", size: 22 })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "News Aggregator Microservice", size: 23, bold: true })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Architected NestJS microservice syncing NASA RSS feeds to PostgreSQL with Redis caching layer", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 240 },
        children: [new TextRun({ text: "Applied clean architecture principles with domain, application, and adapter layers for maintainable codebase", size: 22 })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "AI-Powered CV Search System", size: 23, bold: true })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Built full RAG pipeline with PDF extraction, embeddings, and semantic search using LanceDB and OpenAI", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 360 },
        children: [new TextRun({ text: "Created Express API for data ingestion and React UI for chat-based retrieval in monorepo structure", size: 22 })]
      }),

      // Education
      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun({ text: "EDUCATION & CERTIFICATIONS", size: 26, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "AWS Solutions Architect – Associate ", size: 23, bold: true }), new TextRun({ text: "(In Progress)", size: 22, italics: true })]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Amazon Web Services", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "CS50x: Introduction to Computer Science", size: 23, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Harvard University · 2025", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Fullstack Web Development Bootcamp", size: 23, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Ironhack · 2019", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Bachelor's Degree in Mathematics ", size: 23, bold: true }), new TextRun({ text: "(Unfinished)", size: 22, italics: true })]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Universitat Politècnica de Catalunya · 2015-2016", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Master's Degree in Biomedical Research", size: 23, bold: true })]
      }),
      new Paragraph({
        spacing: { after: 360 },
        children: [new TextRun({ text: "Universitat de Barcelona · 2014-2015", size: 22 })]
      }),

      // Languages
      new Paragraph({
        spacing: { before: 240, after: 240 },
        children: [new TextRun({ text: "LANGUAGES", size: 26, bold: true })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Spanish (Native) · Catalan (Native) · English (Advanced C1) · French (Advanced C1)", size: 22 })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Anna_Escalada_CV.docx", buffer);
  console.log("CV created successfully");
});
