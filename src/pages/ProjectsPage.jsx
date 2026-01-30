import logo from "../assets/logo/logo.png";
const PROJECTS = [
  {
    id: "sentinel",
    name: "Phishing Email Sentinel",
    description:
      "Detect phishing emails using layered rule-based analysis and deep learning techniques.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M140-220v-274 27-273 520Zm340-307 340-213H140l340 213ZM80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v303l-60-30v-213L480-463 140-680v460h414q2 15 5 30.5t8 29.5H143q-25 0-44-18.5T80-220ZM766-40q-71-18-112.5-78T612-252v-98l154-77 154 77v98q0 74-41.5 134T766-40Zm0-60q44-21 69-62t25-90v-61l-94-47v260Z"/></svg>,
    url: "https://phishingemailsentinel.netlify.app/",
  },
  {
    id: "silentdrop",
    name: "SilentDrop",
    description:
      "Silent Drop is a privacy-first, zero-knowledge file sharing platform.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-480Zm0 399q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 21-2 42t-6 42H732q5-21 6.5-42t1.5-42v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143v62Zm220 1v-120H580v-60h120v-120h60v120h120v60H760v120h-60ZM429-360h102l-25-145q20.47-9.15 32.23-26.55Q550-548.94 550-570q0-28.88-20.59-49.44T479.91-640q-28.91 0-49.41 20.56Q410-598.88 410-570q0 21.06 11.77 38.45Q433.53-514.15 454-505l-25 145Z"/></svg>,
    url: "https://silent-frontend-gamma.vercel.app/",
  },
  {
    id: "patchsense",
    name: "PatchSense",
    description:
      "AI-Driven Vulnerability Prioritization & Patch Planning.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M530-80q-11 0-20.5-5.5T495-100q-5-9-5-20t6-21l170-280q6-10 15-15t19-5q10 0 19 5t15 15l170 280q6 10 6 21t-5 20q-5 9-14 14.5T870-80H530Zm170.14-35q10.86 0 18.86-8.14 8-8.15 8-19 0-10.86-8.14-18.86-8.15-8-19-8-10.86 0-18.86 8.14-8 8.15-8 19 0 10.86 8.14 18.86 8.15 8 19 8ZM317-160q-8.17 0-15.23-3.93-7.06-3.93-10.77-11.07l-84-150h71l42 80h90v-30h-71.78L296-355H191l-63-110q-1.6-3.75-2.8-7.5-1.2-3.75-1.2-7.5 0-2 4-15l63-110h105l42.22-80H410v-30h-90l-42 80h-71l84-150q3.71-7.14 10.77-11.07Q308.83-800 317-800h118q12.75 0 21.38 8.62Q465-782.75 465-770v175h-85l-30 30h115v130h-98l-39-80h-98l-30 30h108l40 80h117v199l-15 25q-3.33 4.77-5.56 10.02-2.22 5.25-4.44 10.98H317Zm359-41h48v-146h-48v146Zm-181-54v-310h115l-30-30h-85v-175q0-12.75 8.63-21.38Q512.25-800 525-800h118q8.17 0 15.23 3.93 7.06 3.93 10.77 11.07l84 150h-71l-42-80h-90v30h71.78L664-605h105l63 110q2.4 3.75 3.2 7.5.8 3.75.8 7.5 0 2-4 15l-26 46-26-43q-12-20-32-29.5t-48-9.5q-28 0-47.5 9.5T621-462L495-255Z"/></svg>,
    url: "https://patchsense.vercel.app/",
  }
];

export default function ProjectsPage() {
  const openProject = (project) => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen px-6 py-16">
      {/* Header */}
      <header className="text-center mb-16 animate-slide-up">
        <div className="flex items-center justify-center gap-3 mb-4">
  <img
    src={logo}
    alt="SecureHub Logo"
    className="w-10 h-10"
  />
  <h1 className="text-4xl sm:text-5xl font-extrabold">
    SecureHub Projects
  </h1>
</div>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of cybersecurity and machine learning projects developed
          as part of our university mini project.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:border-primary/50 transition-all animate-fade-in"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/20 text-2xl flex items-center justify-center mb-6 shadow-glow">
              {project.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Button */}
            <button
              onClick={() => openProject(project)}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
            >
              Open Project
            </button>
          </div>
        ))}
      </section>
       {/* Footer */}
        <footer className="mt-32 text-center text-sm text-muted-foreground">
          © 2026 SecureHub · 6th Semester Mini Project
        </footer>
    </div>
  );
}
