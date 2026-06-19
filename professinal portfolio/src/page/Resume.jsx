export default function ResumePage() {
  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Python",
    "Git & GitHub",
    "HTML","CSS", "JavaScript",
    "SQL"
  ];
  const projects = [
    {
      title: "Doctor Appointment Booking System",
      desc: "Full-stack MERN application with authentication, admin panel, and appointment booking functionality.",
    },
    {
      title: "Customer Management System",
      desc: "A responsive MERN project for managing customers with CRUD operations and dashboard UI.",
    },
    {
      title: "Job Portal",
      desc: "Built a responsive Job Portal using MERN stack for recruiters and job seekers with job posting and search functionality",
    },
    {
      title: "ShopYatra",
      desc: "Developed a Complete e-commerce website using the MERN stack with a responsive and modern user interface.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#0d1117] text-white mt-5 px-4 sm:px-8 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDEBAR */}
        <div className="bg-[#161b22] border border-zinc-800 rounded-3xl p-8 shadow-2xl h-fit lg:sticky lg:top-10">
          {/* PROFILE */}
          <div className="flex flex-col items-center text-center ">
            <img
              src="/personal.jpeg"
              alt="profile"
              className="w-38 h-38 rounded-full border-4  border-purple-500 object-cover shadow-lg"
            />
            <h1 className="text-3xl font-bold mt-5">
              Poojan Patel
            </h1>
            <p className="text-purple-400 mt-2 text-lg">
              MERN Stack Developer
            </p>
            <p className="text-zinc-400 text-sm mt-4 leading-7">
              Passionate fresher developer focused on building responsive and modern full-stack web applications.
            </p>
          </div>
          {/* CONTACT */}
          <div className="mt-10 space-y-4 text-sm">
            <div className="bg-[#0d1117] p-4 rounded-2xl border border-zinc-800">
              📍 Mehsana, Gujarat, India
            </div>
            <a
              href="mailto:poojanpatel1595@gmail.com"
              className="block bg-[#0d1117] p-4 rounded-2xl border border-zinc-800 break-all hover:border-purple-500 transition duration-300 text-white cursor-pointer decoration-none"
              style={{ textDecoration: "none" }}
            >
              📧 poojanpatel1595@gmail.com
            </a>
            <a
              href="tel:+919722379175"
              className="block bg-[#0d1117] p-4 rounded-2xl border border-zinc-800 hover:border-purple-500 transition duration-300 text-white cursor-pointer decoration-none"
              style={{ textDecoration: "none" }}
            >
              📞 +91 9722379175
            </a>
          </div>
          {/* SKILLS */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/20 hover:scale-105 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* HERO */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Building Modern & Creative Web Experiences
            </h2>
            <p className="mt-5 text-white/80 leading-8 max-w-3xl text-sm sm:text-base">
              I create modern, responsive, and user-friendly applications using MERN Stack technologies with clean UI and scalable architecture.
            </p>
            <a href="/Resume.pdf" download>
            <button className="mt-7 bg-white text-black px-6 py-3 rounded font-semibold hover:scale-105 transition duration-300">
              Download Resume
            </button>
          </a>
          </div>
          {/* EDUCATION */}
          <div className="bg-[#161b22] border border-zinc-800 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">
              Education
            </h2>
            <div className="border-l-2 border-purple-500 pl-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-purple-400 mt-2">
                  Parul University, Vadodara
                </p>
                <p className="text-zinc-400 mt-2 text-sm leading-7">
                  Focused on Web Development, Artificial Intelligence, and Full Stack Development.
                </p>
              </div>
            </div>
          </div>
          {/* PROJECTS */}
          <div className="bg-[#161b22] border border-zinc-800 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">
              Featured Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#0d1117] border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-7">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* EXPERIENCE */}
          <div className="bg-[#161b22] border border-zinc-800 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">
              Internship Experience
            </h2>
            <div className="space-y-8 border-l-2 border-blue-500 pl-6">
              <div>
                <h3 className="text-xl font-semibold">
                  MERN Stack Intern
                </h3>
                <p className="text-blue-400 mt-2">
                  Unified Mentor Pvt Ltd
                </p>
                <p className="text-zinc-400 mt-3 leading-7 text-sm">
                  Developed full-stack applications and improved frontend responsiveness and backend integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
