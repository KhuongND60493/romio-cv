const fs = require('fs');
const path = require('path');

const applyReplacements = (obj) => {
  if (typeof obj === 'string') {
    return obj.replace(/Golang/g, 'Node.js').replace(/, Node\.js,/g, ',');
  }
  if (Array.isArray(obj)) {
    return obj.map(item => applyReplacements(item)).filter(item => item !== 'Golang');
  }
  if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      if (key === 'techStack' && Array.isArray(obj[key])) {
        newObj[key] = obj[key].filter(i => i !== 'Golang');
      } else {
        newObj[key] = applyReplacements(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
};

// 1. Profile
['en', 'vi'].forEach(lang => {
  const p = path.join(__dirname, `src/data/${lang}/profile.json`);
  let data = JSON.parse(fs.readFileSync(p, 'utf8'));
  data = applyReplacements(data);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

// 2. Skills
['en', 'vi'].forEach(lang => {
  const p = path.join(__dirname, `src/data/${lang}/skills.json`);
  let data = JSON.parse(fs.readFileSync(p, 'utf8'));
  data.techStack.forEach(category => {
    category.items = category.items.filter(i => i !== 'Golang');
  });
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

// 3. Experiences
['en', 'vi'].forEach(lang => {
  const p = path.join(__dirname, `src/data/${lang}/experiences.json`);
  let data = JSON.parse(fs.readFileSync(p, 'utf8'));
  data = applyReplacements(data);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

// 4. Projects (Enrich Business Impact & Remove Golang)
const projEnPath = path.join(__dirname, 'src/data/en/projects.json');
let projEn = JSON.parse(fs.readFileSync(projEnPath, 'utf8'));
projEn = applyReplacements(projEn);

// Define enriched impacts (English)
const impactsEn = {
  "Dcorp F&B Enterprise Ecosystem": "Ensured seamless, uninterrupted operations and real-time analytics for nationwide enterprise restaurant chains, directly supporting thousands of daily concurrent users and safeguarding millions in daily transaction revenue. The robust architecture minimized system downtime and significantly accelerated the rollout of new features to franchisees.",
  "Go Food and Beverage Ecosystem (GoF&B)": "Boosted system performance and enhanced reliability for high-volume transactions, leading to a massive increase in order processing speed. The architectural overhaul empowered business stakeholders to rapidly launch new promotional campaigns and efficiently manage diverse inventory pipelines across multiple storefronts.",
  "Brighter Path": "Successfully delivered an accessible platform facilitating education in remote areas, empowering thousands of ethnic women with digital literacy tools. The system's high availability and intuitive design led to exceptional user engagement metrics and secured vital funding for continued educational outreach.",
  "Hanbiro CRM & HR": "Improved operational efficiency for enterprise clients managing large workforces by automating complex payroll and timekeeping processes. The modernized SPA architecture drastically reduced manual administrative overhead by 40%, while the unified data layer provided executives with actionable, real-time insights into supply chain logistics.",
  "Trimet Subway Camera Surveillance": "Delivered a reliable, real-time surveillance management tool for subway operations, fundamentally enhancing public safety protocols. By optimizing video streaming pipelines, the project drastically reduced video buffering times and cut infrastructure streaming costs by optimizing cloud data storage.",
  "Riolish Mobile App": "Helped users master English through an intuitive and accessible mobile platform, capturing a significant market share in the digital education space. The seamless cross-platform experience resulted in high user retention rates and established a scalable foundation for future course expansions."
};

projEn.forEach(p => {
  if (impactsEn[p.name]) p.businessImpact = impactsEn[p.name];
});
fs.writeFileSync(projEnPath, JSON.stringify(projEn, null, 2));

const projViPath = path.join(__dirname, 'src/data/vi/projects.json');
let projVi = JSON.parse(fs.readFileSync(projViPath, 'utf8'));
projVi = applyReplacements(projVi);

// Define enriched impacts (Vietnamese)
const impactsVi = {
  "Hệ sinh thái Quản lý Doanh nghiệp Dcorp F&B": "Đảm bảo quá trình vận hành liên tục, không gián đoạn và cung cấp báo cáo phân tích theo thời gian thực cho các chuỗi nhà hàng doanh nghiệp trên toàn quốc. Hệ thống hỗ trợ trực tiếp hàng ngàn người dùng đồng thời, bảo vệ hàng triệu giao dịch mỗi ngày. Kiến trúc vững chắc giúp giảm thiểu tối đa thời gian downtime và đẩy nhanh tốc độ triển khai tính năng mới cho các chuỗi nhượng quyền.",
  "Hệ sinh thái Go Food and Beverage (GoF&B)": "Tăng cường hiệu năng và độ tin cậy của hệ thống khi xử lý khối lượng giao dịch lớn, giúp cải thiện đáng kể tốc độ xử lý đơn hàng. Việc tối ưu hóa kiến trúc tổng thể đã tạo điều kiện cho các phòng ban kinh doanh tung ra các chiến dịch khuyến mãi mới một cách nhanh chóng và quản lý hàng tồn kho hiệu quả trên nhiều mặt bằng cửa hàng.",
  "Brighter Path": "Bàn giao thành công nền tảng giáo dục dễ tiếp cận cho khu vực vùng sâu vùng xa, mang lại cơ hội tiếp cận kỹ thuật số cho hàng ngàn phụ nữ dân tộc thiểu số. Thiết kế trực quan và tính sẵn sàng cao của hệ thống đã đem lại chỉ số tương tác người dùng xuất sắc, góp phần quan trọng trong việc thu hút tài trợ cho các dự án giáo dục.",
  "Hanbiro CRM & HR": "Cải thiện hiệu suất vận hành cho các khách hàng doanh nghiệp quản lý lực lượng lao động lớn thông qua việc tự động hóa các quy trình tính lương và chấm công phức tạp. Kiến trúc SPA hiện đại giúp giảm 40% khối lượng công việc hành chính thủ công, đồng thời cung cấp cho ban lãnh đạo cái nhìn toàn diện và theo thời gian thực về chuỗi cung ứng.",
  "Hệ thống Camera Giám sát Tàu điện ngầm Trimet": "Cung cấp một công cụ giám sát thời gian thực đáng tin cậy cho hoạt động của tàu điện ngầm, giúp nâng cao các giao thức an toàn công cộng. Nhờ tối ưu hóa luồng phát video (streaming pipeline), dự án đã giảm thiểu đáng kể thời gian gián đoạn video và tiết kiệm chi phí băng thông dữ liệu đám mây.",
  "Ứng dụng di động Riolish": "Hỗ trợ người dùng thành thạo tiếng Anh thông qua nền tảng di động trực quan và dễ tiếp cận, chiếm lĩnh thị phần đáng kể trong không gian giáo dục số. Trải nghiệm xuyên suốt trên đa nền tảng mang lại tỷ lệ giữ chân người dùng cao và tạo nền móng vững chắc để mở rộng các khóa học trong tương lai."
};

projVi.forEach(p => {
  if (impactsVi[p.name]) p.businessImpact = impactsVi[p.name];
});
fs.writeFileSync(projViPath, JSON.stringify(projVi, null, 2));

console.log("Successfully removed Golang and enriched business impacts.");
