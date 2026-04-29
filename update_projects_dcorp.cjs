const fs = require('fs');
const path = require('path');

const projEnPath = path.join(__dirname, 'src/data/en/projects.json');
const projViPath = path.join(__dirname, 'src/data/vi/projects.json');

const projEn = JSON.parse(fs.readFileSync(projEnPath, 'utf8'));
const projVi = JSON.parse(fs.readFileSync(projViPath, 'utf8'));

const dcorpProjEn = {
  "name": "Dcorp F&B Enterprise Ecosystem",
  "description": "A hybrid (On-premise & Cloud Microservices) POS and enterprise management ecosystem serving major F&B chains such as Highland Coffee and Golden Gate.",
  "role": "Team Leader / Senior Fullstack Developer",
  "architectureHighlights": [
    "Architected robust backend services in .NET Core and Java to process massive daily transaction volumes.",
    "Engineered reliable Big Data pipelines and synchronized data between offline POS terminals and the cloud.",
    "Designed highly available infrastructure utilizing Redis and Kafka for high-throughput queuing."
  ],
  "businessImpact": "Ensured seamless, uninterrupted operations and real-time analytics for nationwide enterprise restaurant chains.",
  "techStack": [".NET Core", "Java", "Spring Boot", "ReactJS", "React-Native", "MS SQL", "Redis", "Kafka"],
  "links": []
};

const dcorpProjVi = {
  "name": "Hệ sinh thái Quản lý Doanh nghiệp Dcorp F&B",
  "description": "Hệ sinh thái quản lý nhà hàng và POS theo mô hình lai (On-premise & Cloud Microservices) phục vụ các chuỗi F&B lớn như Highland Coffee, Golden Gate.",
  "role": "Team Leader / Kỹ sư Fullstack Senior",
  "architectureHighlights": [
    "Thiết kế kiến trúc backend mạnh mẽ bằng .NET Core và Java nhằm xử lý lượng lớn giao dịch mỗi ngày.",
    "Xây dựng pipeline xử lý dữ liệu lớn (Big Data) và đồng bộ hóa dữ liệu giữa hệ thống POS offline và Cloud.",
    "Thiết kế cơ sở hạ tầng có tính sẵn sàng cao, sử dụng Redis và Kafka để tối ưu hóa hàng đợi cho lượng request khổng lồ."
  ],
  "businessImpact": "Đảm bảo hệ thống vận hành trơn tru, không gián đoạn và cung cấp báo cáo phân tích theo thời gian thực cho các chuỗi nhà hàng trên toàn quốc.",
  "techStack": [".NET Core", "Java", "Spring Boot", "ReactJS", "React-Native", "MS SQL", "Redis", "Kafka"],
  "links": []
};

projEn.unshift(dcorpProjEn);
projVi.unshift(dcorpProjVi);

fs.writeFileSync(projEnPath, JSON.stringify(projEn, null, 2));
fs.writeFileSync(projViPath, JSON.stringify(projVi, null, 2));

console.log("Successfully added Dcorp project.");
