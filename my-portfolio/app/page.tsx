import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight">Sushmashree PS</h1>
        <div className="space-x-6 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="https://github.com/Sushmashreeps10" target="_blank" className="bg-black text-white px-4 py-2 rounded-lg">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Full Stack Developer / Software Developer
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          B.Tech in Computer Science and Engineering from Presidency University. 
        </p>
        <div className="flex justify-center gap-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Python</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Java</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Spring Boot</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">.Net</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">React.js</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Next.js</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Sql</span>
        </div>
      </header>

      {/* Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <a href="https://github.com/Sushmashreeps10/Gemini-AI-Excel-Analysis">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">AI Excel Analysis</h4>
            <p className="text-slate-600 mb-4 text-sm">Automated data insights using Python and Data Science principles.</p>
            <div className="flex gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Python</span>
              <span className="text-xs font-bold text-slate-400 uppercase">AI/ML</span>
            </div>
          </div>
          </a>

          {/* Project 2 */}
          <a href="https://github.com/Sushmashreeps10/KredoFullstackProject">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">E-Commerce Web</h4>
            <p className="text-slate-600 mb-4 text-sm">Full-stack store built with React and Spring Boot for secure transactions.</p>
            <div className="flex gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase">React</span>
              <span className="text-xs font-bold text-slate-400 uppercase">Spring Boot</span>
            </div>
          </div>
          </a>

          {/* Project 3 */}
          <a href="https://github.com/Sushmashreeps10/Student-Management-System">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Student Management</h4>
            <p className="text-slate-600 mb-4 text-sm">CRUD application using SQL and Java for educational record keeping.</p>
            <div className="flex gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Java</span>
              <span className="text-xs font-bold text-slate-400 uppercase">PostgreSQL</span>
            </div>
          </div>
          </a>

        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Technical Expertise</h3>
            <p className="text-slate-400 mb-6">Expertise in building end-to-end systems with CI/CD pipelines and cloud integration.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800 rounded-lg">
              <p className="font-bold text-blue-400">Backend</p>
              <p className="text-sm">Java, Python, C#, .Net,  Spring Boot, FastAPI, RestAPI</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <p className="font-bold text-teal-400">Frontend</p>
              <p className="text-sm">Next.js, React, Tailwind CSS</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <p className="font-bold text-purple-400">Databases</p>
              <p className="text-sm">PostgreSQL, SQL, MongoDB</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <p className="font-bold text-orange-400">DevOps</p>
              <p className="text-sm">CI/CD, Git, REST APIs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}