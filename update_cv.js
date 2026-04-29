const fs = require('fs');

const profileEnPath = 'src/data/en/profile.json';
const profileViPath = 'src/data/vi/profile.json';
const expEnPath = 'src/data/en/experiences.json';
const expViPath = 'src/data/vi/experiences.json';

const profileEn = JSON.parse(fs.readFileSync(profileEnPath, 'utf8'));
const profileVi = JSON.parse(fs.readFileSync(profileViPath, 'utf8'));

// Update EN Profile
profileEn.hero.fullName = "Nguyen Duy Khuong";
profileEn.hero.title = "Technical Architect / Technical Leader";
profileEn.hero.email = "nguyenromio@gmail.com";
profileEn.hero.phone = "0902637745";
profileEn.hero.location = "502/13/2 Thong Nhat, Ward 16, Go Vap, HCM";
profileEn.hero.summary = "As a dedicated Technical Architect with experience in building and optimizing software solutions, I am eager to bring my technical expertise and collaborative approach to a forward-thinking organization. My goal is to drive robust, scalable solutions that adapt to future industry trends.";

profileEn.about.headline = "Over 12 years of experience in fullstack development, technical leadership, and system architecture.";
profileEn.about.description = "From early e-commerce platforms to enterprise-scale microservices, I have consistently led technical teams to deliver high-performance applications. I specialize in backend architecture (Golang, .NET Core), frontend/mobile development (React, React Native), and orchestrating complex deployments across diverse technology stacks.";

// Update VI Profile
profileVi.hero.fullName = "Nguyễn Duy Khương";
profileVi.hero.title = "Kiến trúc sư Kỹ thuật / Technical Leader";
profileVi.hero.email = "nguyenromio@gmail.com";
profileVi.hero.phone = "0902637745";
profileVi.hero.location = "502/13/2 Thống Nhất, Phường 16, Gò Vấp, HCM";
profileVi.hero.summary = "Là một Kiến trúc sư Kỹ thuật với nhiều kinh nghiệm trong việc xây dựng và tối ưu hóa các giải pháp phần mềm, tôi luôn mong muốn mang chuyên môn kỹ thuật và tinh thần hợp tác của mình đến với các tổ chức tiên phong. Mục tiêu của tôi là thúc đẩy những hệ thống mạnh mẽ, có khả năng mở rộng và thích ứng với xu hướng tương lai của ngành công nghiệp.";

profileVi.about.headline = "Hơn 12 năm kinh nghiệm trong phát triển Fullstack, quản lý nhóm kỹ thuật và kiến trúc hệ thống.";
profileVi.about.description = "Từ các nền tảng thương mại điện tử sơ khai cho đến các hệ thống microservices quy mô doanh nghiệp, tôi đã liên tục dẫn dắt các nhóm kỹ thuật mang lại những ứng dụng có hiệu suất cao. Tôi chuyên sâu về kiến trúc backend (Golang, .NET Core), phát triển frontend/mobile (React, React Native) và điều phối việc triển khai phức tạp trên nhiều nền tảng công nghệ đa dạng.";

fs.writeFileSync(profileEnPath, JSON.stringify(profileEn, null, 2));
fs.writeFileSync(profileViPath, JSON.stringify(profileVi, null, 2));

const experiencesEn = [
  {
    company: "MEDIASTEP",
    role: "Technical Architecture / Technical Leader",
    duration: "03/2023 - Current",
    location: "Ho Chi Minh City",
    summary: "Led technical architecture and R&D for the Go Food and Beverage ecosystem (GoF&B).",
    responsibilities: [
      "Developed strategic technical solutions for F&B, aligning with Product Owner and client needs.",
      "Led R&D team of 6 to explore and apply new technologies.",
      "Managed 40+ members to hit milestones and ensured quality for smooth releases.",
      "Conducted training sessions to raise team skills and led code reviews."
    ],
    achievements: [
      "Successfully implemented new technologies to boost performance and reliability.",
      "Offered technical solutions in grooming and oversaw team progress."
    ],
    techStack: ["Golang", "Reactjs", "React-Native", ".NET Core", "Nodejs", "Android (Java)", "IOS (Swift)"]
  },
  {
    company: "ALTSOURCE VIETNAM",
    role: "Senior Fullstack Developer / Leader",
    duration: "10/2021 - 03/2023",
    location: "Ho Chi Minh City",
    summary: "Led and developed various enterprise systems including teaching platforms, clinic management, and process management systems.",
    responsibilities: [
      "Acted as Team Leader and Senior Fullstack Developer across multiple client projects (Brighter Path, My Fertility Health, Arcadia Drilling, Trimet, Pacific Architectural Wood Products).",
      "Designed and implemented fullstack solutions using .NET Core, Golang, and React/Vue."
    ],
    achievements: [
      "Delivered Brighter Path teaching system for ethnic women.",
      "Successfully delivered the subway camera surveillance system upgrade.",
      "Built and scaled door production process management."
    ],
    techStack: [".NET Core", "Golang", "Reactjs", "VueX", "MS SQL", "Azure", "Angular"]
  },
  {
    company: "HANBIRO VIETNAM",
    role: "Senior Fullstack Developer / Team Leader",
    duration: "09/2018 - 10/2021",
    location: "Ho Chi Minh City",
    summary: "Developed business management websites, HR tools, and CRM systems.",
    responsibilities: [
      "Led development teams ranging from 2 to 7 members across multiple projects.",
      "Managed the migration of company website from Java (jsp-servlet) to Vuex.",
      "Built Hanbiro HR, Groupware, and CRM Supply Chain Management systems."
    ],
    achievements: [
      "Built Hanbiro CRM Call, a call management center using Electron and Reactjs."
    ],
    techStack: ["Golang", "Reactjs", "Vuex", "Angularjs", "React-Native", "PHP", "Laravel", "MySQL", "GraphQL", "Electron", "Linux"]
  },
  {
    company: "FPT SOFTWARE",
    role: "Middle Fullstack Developer",
    duration: "01/2018 - 09/2018",
    location: "Ho Chi Minh City",
    summary: "Developed mobile applications for learning and medical information management.",
    responsibilities: [
      "Built 'Learning Chinese for Japanese' mobile project.",
      "Developed a medical app for booking appointments and reminding prescriptions."
    ],
    achievements: [],
    techStack: ["Angular", "React-Native", ".NET Core", "Microsoft SQL", "Figma", "XD", "Cordova"]
  },
  {
    company: "VINHDANH COMPANY",
    role: "Middle Fullstack Developer / Team Leader",
    duration: "02/2015 - 12/2017",
    location: "Ho Chi Minh City",
    summary: "Led the development of Riolish, an English teaching admin web and mobile app.",
    responsibilities: [
      "Led a team of 10 to serve the teaching and learning of English for Vietnamese people."
    ],
    achievements: [],
    techStack: ["React-Native", ".NET Core", "ASP.NET MVC", "Microsoft SQL"]
  },
  {
    company: "FPT SOFTWARE",
    role: "Internship Fullstack Developer",
    duration: "02/2014 - 02/2015",
    location: "Ho Chi Minh City",
    summary: "Collaborated on Toshiba's book reading app.",
    responsibilities: ["Collaborator in programming the reading software."],
    achievements: [],
    techStack: ["Word", "Excel", "StartUML"]
  },
  {
    company: "DATASA.NET",
    role: "Fullstack Developer",
    duration: "03/2012 - 02/2014",
    location: "Ho Chi Minh City",
    summary: "Built e-commerce websites.",
    responsibilities: ["Built an e-commerce website for computer and mobile products including purchase and admin pages."],
    achievements: [],
    techStack: ["ASP.NET MVC", "Microsoft SQL"]
  }
];

const experiencesVi = [
  {
    company: "MEDIASTEP",
    role: "Kiến trúc sư Kỹ thuật / Technical Leader",
    duration: "03/2023 - Hiện tại",
    location: "Thành phố Hồ Chí Minh",
    summary: "Dẫn dắt kiến trúc kỹ thuật và bộ phận R&D cho hệ sinh thái Go Food and Beverage (GoF&B).",
    responsibilities: [
      "Phát triển các giải pháp kỹ thuật chiến lược cho F&B, đồng bộ với yêu cầu của Product Owner và khách hàng.",
      "Dẫn dắt nhóm R&D (6 thành viên) khám phá và ứng dụng các công nghệ mới.",
      "Quản lý hơn 40 thành viên để đạt được các cột mốc dự án và đảm bảo chất lượng phát hành.",
      "Thực hiện các buổi đào tạo nâng cao kỹ năng nhóm và dẫn dắt đánh giá mã nguồn (code review)."
    ],
    achievements: [
      "Ứng dụng thành công công nghệ mới giúp tăng cường hiệu suất và độ tin cậy.",
      "Cung cấp các giải pháp kỹ thuật xuất sắc trong các buổi grooming và giám sát tiến độ đội ngũ."
    ],
    techStack: ["Golang", "Reactjs", "React-Native", ".NET Core", "Nodejs", "Android (Java)", "IOS (Swift)"]
  },
  {
    company: "ALTSOURCE VIETNAM",
    role: "Kỹ sư Fullstack Senior / Leader",
    duration: "10/2021 - 03/2023",
    location: "Thành phố Hồ Chí Minh",
    summary: "Dẫn dắt và phát triển nhiều hệ thống doanh nghiệp bao gồm nền tảng giáo dục, quản lý phòng khám, và hệ thống quản lý quy trình.",
    responsibilities: [
      "Đóng vai trò Trưởng nhóm và Kỹ sư Fullstack Senior cho hàng loạt dự án khách hàng (Brighter Path, My Fertility Health, Arcadia Drilling, Trimet, Pacific Architectural Wood Products).",
      "Thiết kế và triển khai giải pháp Fullstack sử dụng .NET Core, Golang, và React/Vue."
    ],
    achievements: [
      "Xây dựng và bàn giao hệ thống giáo dục Brighter Path cho phụ nữ dân tộc thiểu số.",
      "Triển khai thành công bản nâng cấp hệ thống camera giám sát tàu điện ngầm (Trimet).",
      "Xây dựng và mở rộng hệ thống quản lý quy trình sản xuất cửa gỗ (Pacific)."
    ],
    techStack: [".NET Core", "Golang", "Reactjs", "VueX", "MS SQL", "Azure", "Angular"]
  },
  {
    company: "HANBIRO VIETNAM",
    role: "Kỹ sư Fullstack Senior / Team Leader",
    duration: "09/2018 - 10/2021",
    location: "Thành phố Hồ Chí Minh",
    summary: "Phát triển trang web quản lý doanh nghiệp, phần mềm nhân sự, và hệ thống CRM.",
    responsibilities: [
      "Lãnh đạo các nhóm phát triển từ 2 đến 7 thành viên thực hiện nhiều dự án khác nhau.",
      "Quản lý quá trình chuyển đổi website công ty từ Java (jsp-servlet) sang Vuex.",
      "Xây dựng các hệ thống Hanbiro HR, Groupware, và quản lý chuỗi cung ứng CRM."
    ],
    achievements: [
      "Xây dựng hệ thống Hanbiro CRM Call, trung tâm quản lý cuộc gọi sử dụng Electron và Reactjs."
    ],
    techStack: ["Golang", "Reactjs", "Vuex", "Angularjs", "React-Native", "PHP", "Laravel", "MySQL", "GraphQL", "Electron", "Linux"]
  },
  {
    company: "FPT SOFTWARE",
    role: "Kỹ sư Fullstack Middle",
    duration: "01/2018 - 09/2018",
    location: "Thành phố Hồ Chí Minh",
    summary: "Phát triển ứng dụng di động về học thuật và quản lý thông tin y tế.",
    responsibilities: [
      "Xây dựng dự án ứng dụng di động 'Học tiếng Trung cho người Nhật'.",
      "Phát triển ứng dụng y tế hỗ trợ đặt lịch hẹn và nhắc nhở uống thuốc."
    ],
    achievements: [],
    techStack: ["Angular", "React-Native", ".NET Core", "Microsoft SQL", "Figma", "XD", "Cordova"]
  },
  {
    company: "VINHDANH COMPANY",
    role: "Kỹ sư Fullstack Middle / Team Leader",
    duration: "02/2015 - 12/2017",
    location: "Thành phố Hồ Chí Minh",
    summary: "Dẫn dắt phát triển Riolish, ứng dụng di động và web quản trị hỗ trợ giảng dạy tiếng Anh.",
    responsibilities: [
      "Quản lý nhóm 10 thành viên phục vụ mục tiêu số hóa giảng dạy và học tập tiếng Anh cho người Việt."
    ],
    achievements: [],
    techStack: ["React-Native", ".NET Core", "ASP.NET MVC", "Microsoft SQL"]
  },
  {
    company: "FPT SOFTWARE",
    role: "Thực tập sinh Fullstack",
    duration: "02/2014 - 02/2015",
    location: "Thành phố Hồ Chí Minh",
    summary: "Cộng tác trong dự án ứng dụng đọc sách của Toshiba.",
    responsibilities: ["Đóng vai trò lập trình viên trong việc xây dựng phần mềm đọc sách."],
    achievements: [],
    techStack: ["Word", "Excel", "StartUML"]
  },
  {
    company: "DATASA.NET",
    role: "Kỹ sư Fullstack",
    duration: "03/2012 - 02/2014",
    location: "Thành phố Hồ Chí Minh",
    summary: "Thiết kế và xây dựng website thương mại điện tử.",
    responsibilities: ["Xây dựng website thương mại điện tử chuyên cung cấp thiết bị máy tính và di động, bao gồm cả trang mua hàng và trang quản trị."],
    achievements: [],
    techStack: ["ASP.NET MVC", "Microsoft SQL"]
  }
];

fs.writeFileSync(expEnPath, JSON.stringify(experiencesEn, null, 2));
fs.writeFileSync(expViPath, JSON.stringify(experiencesVi, null, 2));

console.log("Successfully updated JSON files.");
