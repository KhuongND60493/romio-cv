const fs = require('fs');
const path = require('path');

const expEnPath = path.join(__dirname, 'src/data/en/experiences.json');
const expViPath = path.join(__dirname, 'src/data/vi/experiences.json');

const expEn = JSON.parse(fs.readFileSync(expEnPath, 'utf8'));
const expVi = JSON.parse(fs.readFileSync(expViPath, 'utf8'));

// Dcorp is at index 0
if (expEn[0] && expEn[0].company === "Dcorp Vietnam") {
  expEn[0].summary = "Leading a cross-functional team to architect and scale a hybrid (On-premise & Cloud Microservices) enterprise management ecosystem serving major F&B chains like Highland Coffee and Golden Gate.";
  expEn[0].responsibilities = [
    "Architect robust backend services using .NET Core and Java, capable of handling massive daily transaction volumes and high-throughput POS requests.",
    "Oversee the fullstack development of supplementary web portals and mobile applications to provide a seamless operational experience.",
    "Solve complex Big Data challenges, optimizing databases and query performance to process and aggregate large-scale enterprise data efficiently.",
    "Bridge on-premise POS deployments with scalable cloud-native microservices, ensuring continuous data synchronization and high availability."
  ];
  expEn[0].achievements = [
    "Successfully maintained system stability and fast response times under extreme peak loads for nationwide restaurant chains.",
    "Streamlined data synchronization between offline terminals and centralized cloud services to support real-time big data analytics."
  ];
  expEn[0].techStack = [".NET Core", "Java", "Spring Boot", "ReactJS", "React-Native", "MS SQL", "Redis", "Kafka"];
}

if (expVi[0] && expVi[0].company === "Dcorp Vietnam") {
  expVi[0].summary = "Dẫn dắt đội ngũ kỹ sư phát triển hệ sinh thái phần mềm quản lý doanh nghiệp theo mô hình lai (On-premise kết hợp Cloud Microservices), phục vụ các chuỗi F&B lớn như Highland Coffee, Golden Gate.";
  expVi[0].responsibilities = [
    "Thiết kế kiến trúc backend mạnh mẽ bằng .NET Core và Java, đảm bảo khả năng xử lý lượng request khổng lồ và giao dịch POS liên tục mỗi ngày.",
    "Quản lý phát triển các ứng dụng Web và Mobile đi kèm, mang lại trải nghiệm vận hành liền mạch cho khách hàng.",
    "Giải quyết các bài toán về dữ liệu lớn (Big Data), tối ưu hóa cơ sở dữ liệu và truy vấn để tổng hợp và xử lý dữ liệu doanh nghiệp một cách nhanh chóng.",
    "Đưa ra các quyết định kiến trúc để kết nối đồng bộ giữa các trạm On-premise và hệ thống Cloud Microservices, đảm bảo tính nhất quán và tính sẵn sàng cao."
  ];
  expVi[0].achievements = [
    "Đảm bảo hệ thống vận hành ổn định và giữ nguyên tốc độ phản hồi ngay cả trong những khung giờ cao điểm với lượng tải cực lớn từ các chuỗi nhà hàng toàn quốc.",
    "Chuẩn hóa luồng đồng bộ dữ liệu giữa máy POS offline và hệ thống đám mây, làm nền tảng vững chắc cho việc phân tích dữ liệu lớn."
  ];
  expVi[0].techStack = [".NET Core", "Java", "Spring Boot", "ReactJS", "React-Native", "MS SQL", "Redis", "Kafka"];
}

fs.writeFileSync(expEnPath, JSON.stringify(expEn, null, 2));
fs.writeFileSync(expViPath, JSON.stringify(expVi, null, 2));

console.log("Successfully refined Dcorp Vietnam experience.");
