const projects = ["Personal Portfolio Website"];
const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS"];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-8 sm:py-10">
      <div className="site-card mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/80 shadow-2xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-900/10 px-6 py-6 sm:px-12">
          <a href="#home" className="text-xl font-bold text-[#17464d]">Thrsha.G Arasa<span className="text-teal-500">.</span></a>
          <nav className="flex flex-wrap gap-4 text-sm text-[#45656a]">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#achievements">Achievements</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#17464d] px-5 py-3 text-xs font-semibold text-white">Contact ↗</a>
        </header>

        <section id="home" className="grid items-center gap-8 px-6 py-14 sm:px-12 lg:grid-cols-2 lg:py-24">
          <div className="relative z-10">
            <p className="mb-8 text-xs uppercase tracking-widest text-[#52797b]">Student developer · [Your City]</p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#183f45] sm:text-7xl">Hi, I’m<br />Thrsha.G Arasa.</h1>
            <p className="mt-4 text-3xl font-bold text-[#4c9699]">I build for the web.</p>
            <p className="mt-6 max-w-lg leading-7 text-[#547176]">I’m a student developing my web skills and learning to create clear, responsive websites.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-[#17464d] px-6 py-4 text-sm font-semibold text-white">View my project ↗</a>
              <a href="#about" className="rounded-full border border-teal-800/30 px-6 py-4 text-sm text-[#28585e]">About me</a>
            </div>
            <p className="mt-10 text-sm text-[#315c61]">Learning: JavaScript · React · Next.js · Tailwind CSS</p>
          </div>

          <div className="water-art relative mx-auto flex h-[360px] w-full max-w-[480px] items-center justify-center sm:h-[460px]">
            <div className="ripple ripple-outer" /><div className="ripple ripple-middle" />
            <div className="water-glass relative flex h-[300px] w-[230px] items-center justify-center overflow-hidden rounded-[48%] border border-white/80 shadow-xl sm:h-[370px] sm:w-[290px]">
              <div className="portrait-sky absolute inset-0" /><div className="portrait-head absolute top-[23%] h-24 w-24 rounded-full bg-[#b5d4d3]" />
              <div className="portrait-body absolute bottom-[22%] h-[35%] w-[72%] rounded-t-[50%] bg-gradient-to-b from-[#93c7cc] to-[#3b7b85]" />
              <div className="water-line line-one" /><div className="water-line line-two" /><div className="shine" />
            </div>
            <span className="float-label label-top">Curious by nature</span><span className="float-label label-bottom">Design × Code</span>
          </div>
        </section>

        <section id="projects" className="flex flex-wrap items-center justify-between gap-5 border-t border-teal-900/10 px-6 py-7 sm:px-12">
          <p className="text-xs uppercase tracking-widest text-[#52797b]">My project</p>
          <div className="flex flex-wrap gap-5">{projects.map((project) => <a key={project} href="#contact" className="text-sm text-[#315c61]">{project} ↗</a>)}</div>
        </section>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 py-4 sm:grid-cols-2">
        <section id="about" className="info-card"><p className="eyebrow">ABOUT ME</p><h2>About Thrsha</h2><p>I’m Thrsha.G Arasa, a student interested in web development. I’m learning to build websites with JavaScript, React, Next.js, and Tailwind CSS, and enjoy turning ideas into useful online experiences.</p><p className="mt-3">I study <strong>[your course]</strong> at <strong>[your school or university]</strong>. My interests include <strong>[your hobbies]</strong>.</p></section>

        <section id="experience" className="info-card"><p className="eyebrow">EXPERIENCE</p><h2>Personal portfolio project</h2><p><strong>Assignment 1 · In progress</strong></p><p className="mt-3">Building a responsive portfolio website with Next.js and Tailwind CSS to present my background, projects, skills, and achievements.</p></section>

        <section id="skills" className="info-card"><p className="eyebrow">SKILLS</p><h2>Technologies I’m learning</h2><div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-teal-800/20 bg-white/40 px-3 py-2 text-xs text-[#315c61]">{skill}</span>)}</div></section>

        <section id="achievements" className="info-card"><p className="eyebrow">ACHIEVEMENTS</p><h2>Current milestone</h2><p>Working on Assignment 1: Personal Portfolio Website.</p><p className="mt-3">Add your certificates, awards, or other achievements here when you’re ready.</p></section>
      </div>

      <section id="contact" className="mx-auto max-w-7xl py-8 text-center"><p className="eyebrow">CONTACT</p><h2 className="mt-3 text-3xl font-bold text-[#244c47]">Let’s make something together.</h2><a className="mt-5 inline-block rounded-full bg-[#17464d] px-6 py-3 text-sm font-semibold text-white" href="mailto:YOUR.EMAIL@example.com">Email me ↗</a></section>
    </main>
  );
}
