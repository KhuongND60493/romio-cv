const fs = require('fs');
const path = require('path');

const eduEnPath = path.join(__dirname, 'src/data/en/education.json');
const eduViPath = path.join(__dirname, 'src/data/vi/education.json');

const eduEn = [
  {
    "degree": "Master of Information Technology (Planned)",
    "institution": "University of Information Technology, VNU-HCM (UIT)",
    "duration": "2026 - Expected 2028",
    "note": "Planning to pursue a Master's degree focusing on advanced distributed systems, cloud computing architectures, and software engineering management to further deepen technical leadership capabilities.",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Logo_UIT_updated.svg"
  },
  {
    "degree": "Bachelor of Information Technology (Honors)",
    "institution": "University of Science, VNU-HCM (HCMUS)",
    "note": "Graduated with Honors from the Faculty of Information Technology, one of the most prestigious computer science programs in Vietnam. The rigorous curriculum provided a deep theoretical foundation in Data Structures, Advanced Algorithms, and Systems Architecture. Specialized coursework included Enterprise Software Development, Distributed Databases, and Artificial Intelligence, cultivating a strong engineering mindset for building scalable, high-performance applications.",
    "logoUrl": "khtn.png"
  }
];

const eduVi = [
  {
    "degree": "Thạc sĩ Công nghệ Thông tin (Kế hoạch)",
    "institution": "Đại học Công nghệ Thông tin, ĐHQG-HCM (UIT)",
    "duration": "2026 - Dự kiến 2028",
    "note": "Kế hoạch theo học chương trình Thạc sĩ tập trung vào các hệ thống phân tán nâng cao, kiến trúc điện toán đám mây và quản trị kỹ thuật phần mềm nhằm làm sâu sắc thêm năng lực lãnh đạo công nghệ.",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Logo_UIT_updated.svg"
  },
  {
    "degree": "Cử nhân Công nghệ Thông tin (Loại Giỏi)",
    "institution": "Đại học Khoa học Tự nhiên, ĐHQG-HCM (HCMUS)",
    "note": "Tốt nghiệp loại Giỏi tại Khoa Công nghệ Thông tin - một trong những chương trình đào tạo Khoa học Máy tính danh giá và khắt khe nhất Việt Nam. Chương trình học cung cấp nền tảng lý thuyết vững chắc về Cấu trúc Dữ liệu, Thuật toán Nâng cao và Kiến trúc Hệ thống. Các môn chuyên ngành tập trung vào Phát triển Phần mềm Doanh nghiệp, Cơ sở Dữ liệu Phân tán và Trí tuệ Nhân tạo, rèn luyện tư duy kỹ sư nhạy bén để thiết kế và xây dựng các hệ thống mở rộng, hiệu suất cao.",
    "logoUrl": "khtn.png"
  }
];

fs.writeFileSync(eduEnPath, JSON.stringify(eduEn, null, 2));
fs.writeFileSync(eduViPath, JSON.stringify(eduVi, null, 2));

console.log("Successfully updated education.");
