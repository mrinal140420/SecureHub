import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Shield, Zap, Lock } from "lucide-react";

import mrinal from "../assets/team/mrinal.jpg";
import soma from "../assets/team/soma.jpg";
import ashwani from "../assets/team/ashwani.jpg";
import ankita from "../assets/team/ankita.jpeg";
import logo from "../assets/logo/logo.png";


const members = [
  {
    name: "Mrinal Sahoo",
    role: "Security & Analysis",
    color: "from-blue-600 to-blue-400",
    icon: <Zap className="w-6 h-6" />,
    image: mrinal,
  },
  {
    name: "Soma Chatterjee",
    role: "UI/UX Implementation and Project Management",
    color: "from-purple-600 to-purple-400",
    icon: <Lock className="w-6 h-6" />,
    image: soma,
  },
  {
    name: "Ashwani Kumar",
    role: "ML Implementation",
    color: "from-cyan-600 to-cyan-400",
    icon: <Shield className="w-6 h-6" />,
    image: ashwani,
  },
  {
    name: "Ankita Biswas",
    role: "UI/UX & Documentation",
    color: "from-red-600 to-red-400",
    icon: <Zap className="w-6 h-6" />,
    image: ankita,
  },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % members.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  const member = members[index];

  return (
    <div className="min-h-screen overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
  </div>

  <div className="relative z-10 px-6 sm:px-10 py-16 max-w-6xl mx-auto">
    {/* Header */}
   <header className="mb-28 animate-slide-up">
  <div className="flex items-center gap-4 sm:gap-5">
    {/* Logo */}
    <div className="p-3 sm:p-4 rounded-2xl bg-primary/20 shadow-glow">
      <img
        src={logo}
        alt="SecureHub Logo"
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
      />
    </div>

    {/* Brand Text */}
    <div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
        SecureHub
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground mt-1">
        Adamas University · Semester VI Mini Project
      </p>
    </div>
  </div>
</header>



    {/* Hero */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div className="animate-slide-up">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Cybersecurity & ML{" "}
          <span className="text-primary animate-glow-pulse">
            Project Showcase
          </span>
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
          SecureHub is a centralized platform developed as part of the
          Semester VI mini project at Adamas University. It serves as a
          structured showcase for cybersecurity and machine learning tools
          created by the team, providing descriptions, demonstrations, and
          external links to individual projects and repositories. The
          platform focuses on presenting practical implementations,
          architectural understanding, and real-world security use cases.
        </p>

        <button
          onClick={() => (window.location.href = "/projects")}
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
        >
          View Projects
        </button>
      </div>


          {/* Team Slider */}
          <div className="bg-card border border-border rounded-2xl p-10 text-center backdrop-blur-lg shadow-xl animate-fade-in">
            {/* Avatar */}
            <div
              className={`w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br ${member.color} p-1 mb-6`}
            >
              <div className="w-full h-full rounded-2xl bg-background overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl text-muted-foreground">
                    {member.name[0]}
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground">
              {member.name}
            </h3>
            <p className="text-secondary font-semibold mt-1">
              {member.role}
            </p>

            <p className="text-muted-foreground text-sm mt-4 max-w-xs mx-auto">
              Contributing expertise to build robust cybersecurity solutions.
            </p>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <span className="text-xs text-muted-foreground">
                {index + 1} / {members.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setIndex((i) => (i - 1 + members.length) % members.length)
                  }
                  className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() =>
                    setIndex((i) => (i + 1) % members.length)
                  }
                  className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 text-center text-sm text-muted-foreground">
          © 2026 SecureHub · 6th Semester Mini Project
        </footer>
      </div>
    </div>
  );
}
