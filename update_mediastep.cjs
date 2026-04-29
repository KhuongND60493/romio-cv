const fs = require('fs');
const path = require('path');

const expEnPath = path.join(__dirname, 'src/data/en/experiences.json');
const expViPath = path.join(__dirname, 'src/data/vi/experiences.json');

const expEn = JSON.parse(fs.readFileSync(expEnPath, 'utf8'));
const expVi = JSON.parse(fs.readFileSync(expViPath, 'utf8'));

// MEDIASTEP is at index 1
if (expEn[1] && expEn[1].company === "MEDIASTEP") {
  expEn[1].summary = "Led technical architecture and R&D for the Go Food and Beverage ecosystem (GoF&B), directing and managing a large-scale technical department of >40 engineers.";
  expEn[1].responsibilities = expEn[1].responsibilities.map(r => 
    r.includes('Managed 40+ members') ? "Managed a cross-functional team of >40 engineers to hit critical milestones and ensured high-quality, smooth releases." : r
  );
}

if (expVi[1] && expVi[1].company === "MEDIASTEP") {
  expVi[1].summary = "Dẫn dắt kiến trúc kỹ thuật và bộ phận R&D cho hệ sinh thái Go Food and Beverage (GoF&B), trực tiếp quản lý và điều hành đội ngũ kỹ thuật quy mô lớn >40 kỹ sư.";
  expVi[1].responsibilities = expVi[1].responsibilities.map(r => 
    r.includes('Quản lý hơn 40 thành viên') ? "Trực tiếp quản lý và điều phối đội ngũ >40 thành viên (kỹ sư, QA, BA) để đạt được các cột mốc dự án và đảm bảo chất lượng phát hành." : r
  );
}

fs.writeFileSync(expEnPath, JSON.stringify(expEn, null, 2));
fs.writeFileSync(expViPath, JSON.stringify(expVi, null, 2));

console.log("Successfully updated MEDIASTEP team size info.");
