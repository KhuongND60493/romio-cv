const fs = require('fs');

const skillsEnPath = 'src/data/en/skills.json';
const skillsViPath = 'src/data/vi/skills.json';

const updateSkills = (path) => {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  
  // Update Backend
  const backend = data.techStack.find(t => t.category === "Backend");
  if (backend && !backend.items.includes("Golang")) backend.items.unshift("Golang");
  
  // Update Frontend
  const frontend = data.techStack.find(t => t.category === "Frontend");
  if (frontend && !frontend.items.includes("Angular")) frontend.items.push("Angular");
  
  // Update Tools
  const tools = data.techStack.find(t => t.category === "Tools");
  if (tools && !tools.items.includes("Figma")) tools.items.push("Figma", "Photoshop", "XD");
  
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

updateSkills(skillsEnPath);
updateSkills(skillsViPath);
console.log("Skills updated.");
