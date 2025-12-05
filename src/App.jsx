import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero - Personal Introduction */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src="./profile.jpg" 
                alt="Anna Escalada" 
                className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-xl ring-4 ring-white"
              />
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">
                👋 Available for remote opportunities
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
                Hi, I'm Anna
              </h1>
              <p className="text-xl text-slate-600">
                Full Stack Engineer based in Barcelona
              </p>
            </div>
          </div>

          {/* Personal Story */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Nice to meet you! I'm a full stack engineer who loves building apps with TypeScript, Node.js, and React. 
              I have a backend focus and I'm currently growing my expertise in AWS and cloud infrastructure.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              My path here was a bit unconventional—I started with a background in biomedical research and nutrition science. 
              While I enjoyed the research, I always felt drawn to building and creating with code. 
              In 2019, I took the leap and transitioned into software engineering, and it turned out to be exactly where I belonged.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not coding, you'll likely find me at the piano. I've been playing at a professional level for years, 
              and I love how both music and programming share that same blend of creativity and precision. 🎹
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a 
              href="https://github.com/annaescalada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              <span>GitHub</span>
              <span className="text-lg">→</span>
            </a>
            <a 
              href="https://linkedin.com/in/annaescalada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-slate-200"
            >
              <span>LinkedIn</span>
              <span className="text-lg">→</span>
            </a>
            <a 
              href="mailto:annaescalada@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              <span>Say Hello</span>
              <span className="text-lg">✉️</span>
            </a>
          </div>
        </div>

        {/* What I Do */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">What I work with</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="font-semibold text-slate-800 mb-3">Backend & APIs</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Node.js', 'Express', 'NestJS', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-900 text-sm rounded-lg border border-orange-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="font-semibold text-slate-800 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'Material UI'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-900 text-sm rounded-lg border border-orange-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
              <div className="text-2xl mb-3">☁️</div>
              <h3 className="font-semibold text-slate-800 mb-3">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS Lambda', 'CDK', 'DynamoDB', 'S3', 'EventBridge'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-900 text-sm rounded-lg border border-orange-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
              <div className="text-2xl mb-3">🗄️</div>
              <h3 className="font-semibold text-slate-800 mb-3">Databases & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-900 text-sm rounded-lg border border-orange-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Things I've built recently</h2>
          
          <div className="space-y-4">
            <a
              href="https://github.com/annaescalada"
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                  AWS CDK Infrastructure
                </h3>
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="text-orange-600 text-sm mb-2 font-medium">TypeScript · AWS CDK · Lambda</p>
              <p className="text-slate-600">
                Production-ready serverless infrastructure with least-privilege IAM patterns
              </p>
            </a>

            <a
              href="https://github.com/annaescalada"
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                  News Aggregator API
                </h3>
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="text-orange-600 text-sm mb-2 font-medium">NestJS · PostgreSQL · Redis</p>
              <p className="text-slate-600">
                Microservice with clean architecture and caching layer for NASA RSS feeds
              </p>
            </a>

            <a
              href="https://github.com/annaescalada"
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                  AI-Powered CV Search
                </h3>
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="text-orange-600 text-sm mb-2 font-medium">Express · React · OpenAI · RAG</p>
              <p className="text-slate-600">
                Semantic search system with embeddings and LanceDB for intelligent document retrieval
              </p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-orange-200">
          <p className="text-slate-600 mb-2">
            Currently in Barcelona, Spain 🇪🇸
          </p>
          <p className="text-slate-500 text-sm">
            Open to remote opportunities · Let's build something great together
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
