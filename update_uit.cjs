const fs = require('fs');
const path = require('path');

const eduEnPath = path.join(__dirname, 'src/data/en/education.json');
const eduViPath = path.join(__dirname, 'src/data/vi/education.json');

const eduEn = JSON.parse(fs.readFileSync(eduEnPath, 'utf8'));
const eduVi = JSON.parse(fs.readFileSync(eduViPath, 'utf8'));

if (eduEn[0] && eduEn[0].institution.includes('UIT')) {
  eduEn[0].note = "Planning to pursue a Master's degree in Information Technology. The rigorous program will focus on advanced algorithms, distributed systems, and particularly on Big Data processing to architect and scale enterprise data solutions.";
  eduEn[0].logoUrl = "uit.jpg";
}

if (eduVi[0] && eduVi[0].institution.includes('UIT')) {
  eduVi[0].note = "Kế hoạch theo học chương trình Thạc sĩ chuyên ngành Công nghệ Thông tin. Mục tiêu học tập sẽ tập trung chuyên sâu vào các thuật toán nâng cao, hệ thống phân tán và đặc biệt là xử lý dữ liệu lớn (Big Data) nhằm thiết kế và tối ưu hóa các kiến trúc dữ liệu quy mô doanh nghiệp.";
  eduVi[0].logoUrl = "uit.jpg";
}

fs.writeFileSync(eduEnPath, JSON.stringify(eduEn, null, 2));
fs.writeFileSync(eduViPath, JSON.stringify(eduVi, null, 2));

console.log("UIT education info updated.");
