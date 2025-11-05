import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Anna Escalada
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to my GitHub Pages site built with React, Vite, and Tailwind CSS
          </p>
        </div>

        {/* Tech Stack Showcase */}
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://vite.dev" 
            target="_blank"
            className="group transform hover:scale-110 transition-transform duration-200"
          >
            <img 
              src={viteLogo} 
              className="h-20 w-20 drop-shadow-lg group-hover:drop-shadow-xl" 
              alt="Vite logo" 
            />
            <p className="text-sm text-gray-600 mt-2">Vite</p>
          </a>
          <a 
            href="https://react.dev" 
            target="_blank"
            className="group transform hover:scale-110 transition-transform duration-200"
          >
            <img 
              src={reactLogo} 
              className="h-20 w-20 animate-spin-slow drop-shadow-lg group-hover:drop-shadow-xl" 
              alt="React logo" 
            />
            <p className="text-sm text-gray-600 mt-2">React</p>
          </a>
          <div className="group transform hover:scale-110 transition-transform duration-200">
            <div className="h-20 w-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center drop-shadow-lg group-hover:drop-shadow-xl">
              <span className="text-white font-bold text-2xl">TW</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Tailwind</p>
          </div>
        </div>

        {/* Interactive Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Count is {count}
          </button>
          <p className="text-gray-600 mt-4 text-sm">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Powered by Vite for instant hot module replacement</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-800 mb-2">Beautiful Design</h3>
            <p className="text-gray-600 text-sm">Styled with Tailwind CSS utility classes</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-gray-800 mb-2">Deploy Ready</h3>
            <p className="text-gray-600 text-sm">Optimized for GitHub Pages deployment</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">
          Click on the tech logos to learn more about each technology
        </p>
      </div>
    </div>
  )
}

export default App
