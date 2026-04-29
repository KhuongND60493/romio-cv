const fs = require('fs');
const path = require('path');

const projEnPath = path.join(__dirname, 'src/data/en/projects.json');
const projViPath = path.join(__dirname, 'src/data/vi/projects.json');

const projEn = JSON.parse(fs.readFileSync(projEnPath, 'utf8'));
const projVi = JSON.parse(fs.readFileSync(projViPath, 'utf8'));

const newEn = [
  {
    "name": "Learning Chinese for Japanese",
    "description": "A mobile application designed to assist Japanese speakers in learning and improving their Chinese language skills.",
    "role": "Fullstack Developer",
    "architectureHighlights": [
      "Developed cross-platform mobile views using React-Native",
      "Integrated interactive language exercises backed by a .NET Core API"
    ],
    "businessImpact": "Delivered a highly engaging educational tool that captured a niche market segment, boasting excellent daily active user retention through its interactive curriculum.",
    "techStack": ["Angular", "React-Native", ".NET Core", "MS SQL"],
    "links": []
  },
  {
    "name": "Medical Information Management",
    "description": "A healthcare mobile application that allows users to seamlessly book medical appointments and receive prescription reminders.",
    "role": "Fullstack Developer",
    "architectureHighlights": [
      "Architected a secure backend to manage sensitive user medical records",
      "Implemented real-time push notifications for patient scheduling"
    ],
    "businessImpact": "Streamlined the booking workflow for clinics, significantly reducing missed appointments and improving overall patient care compliance.",
    "techStack": ["Angular", "React-Native", ".NET Core", "MS SQL"],
    "links": []
  },
  {
    "name": "Toshiba's Book Reading App",
    "description": "Collaborated on the programming and design of a digital book reading software application for Toshiba.",
    "role": "Internship Fullstack Developer",
    "architectureHighlights": [
      "Contributed to software requirement analysis using StartUML",
      "Collaborated closely with cross-functional teams to design document rendering flows"
    ],
    "businessImpact": "Helped deliver a polished, user-friendly reading interface that met Toshiba's stringent quality standards for digital consumer products.",
    "techStack": ["StartUML", "Word", "Excel"],
    "links": []
  },
  {
    "name": "Datasa E-Commerce Platform",
    "description": "A complete e-commerce platform specializing in computer and mobile products, featuring both consumer storefronts and an administrative management portal.",
    "role": "Fullstack Developer",
    "architectureHighlights": [
      "Developed dynamic product catalogs and secure checkout flows using ASP.NET MVC",
      "Designed a comprehensive relational database schema in Microsoft SQL"
    ],
    "businessImpact": "Successfully launched an online sales channel that established a robust digital footprint for the business, driving online revenue and simplifying inventory management.",
    "techStack": ["ASP.NET MVC", "MS SQL", "HTML", "CSS", "JavaScript"],
    "links": []
  }
];

const newVi = [
  {
    "name": "Learning Chinese for Japanese",
    "description": "Dự án ứng dụng di động hỗ trợ người Nhật Bản cải thiện và học tiếng Trung Quốc một cách hiệu quả.",
    "role": "Kỹ sư Fullstack",
    "architectureHighlights": [
      "Phát triển giao diện di động đa nền tảng bằng React-Native",
      "Tích hợp các bài tập ngôn ngữ tương tác qua hệ thống API .NET Core"
    ],
    "businessImpact": "Mang đến một công cụ giáo dục mang tính tương tác cao, thu hút lượng lớn người dùng học ngoại ngữ mỗi ngày và giữ chân người dùng cực kỳ hiệu quả.",
    "techStack": ["Angular", "React-Native", ".NET Core", "MS SQL"],
    "links": []
  },
  {
    "name": "Medical Information Management",
    "description": "Ứng dụng y tế trên điện thoại cho phép người dùng đặt lịch khám bệnh trực tuyến và nhắc nhở uống thuốc/tái khám.",
    "role": "Kỹ sư Fullstack",
    "architectureHighlights": [
      "Thiết kế backend bảo mật cao để quản lý hồ sơ bệnh án nhạy cảm",
      "Triển khai hệ thống thông báo đẩy (push notifications) theo thời gian thực"
    ],
    "businessImpact": "Chuẩn hóa quy trình đặt lịch cho phòng khám, giảm thiểu đáng kể tình trạng bệnh nhân quên lịch hẹn và nâng cao chất lượng chăm sóc sức khỏe.",
    "techStack": ["Angular", "React-Native", ".NET Core", "MS SQL"],
    "links": []
  },
  {
    "name": "Ứng dụng Đọc sách Toshiba",
    "description": "Tham gia lập trình và phân tích thiết kế phần mềm đọc sách kỹ thuật số trực thuộc dự án của Toshiba.",
    "role": "Thực tập sinh Fullstack",
    "architectureHighlights": [
      "Phân tích yêu cầu và thiết kế phần mềm bằng StartUML",
      "Phối hợp với nhóm phát triển để tối ưu hóa luồng hiển thị tài liệu"
    ],
    "businessImpact": "Đóng góp vào việc hoàn thiện một sản phẩm phần mềm tiêu dùng đạt tiêu chuẩn khắt khe của Toshiba, đem lại trải nghiệm đọc mượt mà.",
    "techStack": ["StartUML", "Word", "Excel"],
    "links": []
  },
  {
    "name": "Nền tảng Thương mại Điện tử Datasa",
    "description": "Trang web thương mại điện tử chuyên bán các sản phẩm máy tính và di động, bao gồm trang mua hàng cho người dùng và hệ thống quản trị (admin).",
    "role": "Kỹ sư Fullstack",
    "architectureHighlights": [
      "Xây dựng giỏ hàng và quy trình thanh toán an toàn với ASP.NET MVC",
      "Thiết kế hệ thống cơ sở dữ liệu quan hệ tối ưu bằng Microsoft SQL"
    ],
    "businessImpact": "Mở ra kênh bán hàng trực tuyến mạnh mẽ, giúp doanh nghiệp tăng doanh thu đáng kể và tự động hóa quy trình quản lý kho hàng.",
    "techStack": ["ASP.NET MVC", "MS SQL", "HTML", "CSS", "JavaScript"],
    "links": []
  }
];

projEn.push(...newEn);
projVi.push(...newVi);

fs.writeFileSync(projEnPath, JSON.stringify(projEn, null, 2));
fs.writeFileSync(projViPath, JSON.stringify(projVi, null, 2));

console.log("Old projects added.");
