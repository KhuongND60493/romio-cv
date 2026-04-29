const fs = require('fs');

const projEnPath = 'src/data/en/projects.json';
const projViPath = 'src/data/vi/projects.json';

const projectsEn = [
  {
    "name": "Go Food and Beverage Ecosystem (GoF&B)",
    "description": "A comprehensive strategic technical solution for the F&B industry, managing orders, POS, and operations.",
    "role": "Technical Architecture Lead",
    "architectureHighlights": [
      "Led R&D for exploring and applying new technologies",
      "Designed highly scalable backend architecture",
      "Managed a cross-functional team of 40+ members"
    ],
    "businessImpact": "Boosted system performance and enhanced reliability for high-volume transactions.",
    "techStack": ["Golang", "Reactjs", "React-Native", ".NET Core", "Node.js", "Android", "iOS"],
    "links": []
  },
  {
    "name": "Brighter Path",
    "description": "An educational teaching system designed to empower and educate ethnic women.",
    "role": "Senior Fullstack Developer",
    "architectureHighlights": [
      "Developed a responsive learning portal",
      "Integrated secure user management and progress tracking"
    ],
    "businessImpact": "Successfully delivered an accessible platform facilitating education in remote areas.",
    "techStack": ["VueX", ".NET Core", "Golang", "MS SQL", "Azure"],
    "links": []
  },
  {
    "name": "Hanbiro CRM & HR",
    "description": "Enterprise-level supply chain management and human resources applications (Web/App) for managing timekeeping, salary calculation, and sales.",
    "role": "Team Leader / Senior Fullstack",
    "architectureHighlights": [
      "Migrated legacy systems to modern SPA architecture",
      "Built a unified GraphQL API layer",
      "Developed cross-platform mobile apps for HR"
    ],
    "businessImpact": "Improved operational efficiency for enterprise clients managing large workforces.",
    "techStack": ["Golang", "Reactjs", "GraphQL", "React-Native", "Laravel", "MySQL"],
    "links": []
  },
  {
    "name": "Trimet Subway Camera Surveillance",
    "description": "An upgrade and publishing system for subway camera surveillance.",
    "role": "Senior Fullstack Developer",
    "architectureHighlights": [
      "Optimized video streaming and data publishing pipelines",
      "Enhanced system security and monitoring capabilities"
    ],
    "businessImpact": "Delivered a reliable, real-time surveillance management tool for subway operations.",
    "techStack": [".NET Core", "Golang", "MS SQL"],
    "links": []
  },
  {
    "name": "Riolish Mobile App",
    "description": "An administrative web and mobile application serving the teaching and learning of English for Vietnamese people.",
    "role": "Team Leader",
    "architectureHighlights": [
      "Developed a robust API for content delivery",
      "Built cross-platform mobile learning experiences"
    ],
    "businessImpact": "Helped users master English through an intuitive and accessible mobile platform.",
    "techStack": ["React-Native", ".NET Core", "ASP.NET MVC"],
    "links": []
  }
];

const projectsVi = [
  {
    "name": "Hệ sinh thái Go Food and Beverage (GoF&B)",
    "description": "Giải pháp kỹ thuật chiến lược toàn diện cho ngành F&B, quản lý đơn hàng, POS và vận hành cửa hàng.",
    "role": "Trưởng nhóm Kiến trúc Kỹ thuật",
    "architectureHighlights": [
      "Dẫn dắt R&D khám phá và ứng dụng công nghệ mới",
      "Thiết kế kiến trúc backend mở rộng cao",
      "Quản lý đội ngũ phát triển hơn 40 thành viên"
    ],
    "businessImpact": "Tăng cường hiệu suất hệ thống và độ tin cậy khi xử lý khối lượng giao dịch lớn.",
    "techStack": ["Golang", "Reactjs", "React-Native", ".NET Core", "Node.js", "Android", "iOS"],
    "links": []
  },
  {
    "name": "Brighter Path",
    "description": "Hệ thống giáo dục được thiết kế để giảng dạy và hỗ trợ phụ nữ dân tộc thiểu số.",
    "role": "Kỹ sư Fullstack Senior",
    "architectureHighlights": [
      "Phát triển cổng thông tin học tập đáp ứng đa thiết bị",
      "Tích hợp quản lý người dùng và theo dõi tiến độ học tập bảo mật"
    ],
    "businessImpact": "Bàn giao thành công nền tảng giáo dục dễ tiếp cận cho các khu vực vùng sâu vùng xa.",
    "techStack": ["VueX", ".NET Core", "Golang", "MS SQL", "Azure"],
    "links": []
  },
  {
    "name": "Hanbiro CRM & HR",
    "description": "Các ứng dụng quản lý nhân sự và chuỗi cung ứng cấp doanh nghiệp (Web/App) để quản lý chấm công, tính lương và bán hàng.",
    "role": "Team Leader / Kỹ sư Fullstack",
    "architectureHighlights": [
      "Chuyển đổi hệ thống cũ sang kiến trúc SPA hiện đại",
      "Xây dựng lớp API GraphQL thống nhất",
      "Phát triển ứng dụng di động đa nền tảng cho hệ thống Nhân sự"
    ],
    "businessImpact": "Cải thiện hiệu quả vận hành cho các khách hàng doanh nghiệp quản lý lực lượng lao động lớn.",
    "techStack": ["Golang", "Reactjs", "GraphQL", "React-Native", "Laravel", "MySQL"],
    "links": []
  },
  {
    "name": "Hệ thống Camera Giám sát Tàu điện ngầm Trimet",
    "description": "Nâng cấp và phát hành hệ thống quản lý camera giám sát cho tàu điện ngầm.",
    "role": "Kỹ sư Fullstack Senior",
    "architectureHighlights": [
      "Tối ưu hóa pipeline phát trực tuyến video và xuất bản dữ liệu",
      "Tăng cường khả năng bảo mật và giám sát hệ thống"
    ],
    "businessImpact": "Cung cấp một công cụ quản lý giám sát thời gian thực đáng tin cậy cho hoạt động của tàu điện ngầm.",
    "techStack": [".NET Core", "Golang", "MS SQL"],
    "links": []
  },
  {
    "name": "Ứng dụng di động Riolish",
    "description": "Ứng dụng quản trị web và di động phục vụ việc giảng dạy và học tiếng Anh cho người Việt.",
    "role": "Trưởng nhóm",
    "architectureHighlights": [
      "Phát triển API mạnh mẽ để phân phối nội dung",
      "Xây dựng trải nghiệm học tập di động đa nền tảng"
    ],
    "businessImpact": "Hỗ trợ người dùng thành thạo tiếng Anh thông qua nền tảng di động trực quan và dễ tiếp cận.",
    "techStack": ["React-Native", ".NET Core", "ASP.NET MVC"],
    "links": []
  }
];

fs.writeFileSync(projEnPath, JSON.stringify(projectsEn, null, 2));
fs.writeFileSync(projViPath, JSON.stringify(projectsVi, null, 2));

console.log("Projects updated.");
