const Skills = () => (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-black">
        {["Next.js", "React.js", "Node.js", "Tailwind CSS", "MySQL", "Material-UI","Figma","TypeORM","Nest.js"].map(skill => (
          <div key={skill} className="p-2 bg-white shadow rounded text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Skills;