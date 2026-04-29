const fs = require('fs');
const path = require('path');

const expEnPath = path.join(__dirname, 'src/data/en/experiences.json');
const expViPath = path.join(__dirname, 'src/data/vi/experiences.json');

const expEn = JSON.parse(fs.readFileSync(expEnPath, 'utf8'));
const expVi = JSON.parse(fs.readFileSync(expViPath, 'utf8'));

// Update MEDIASTEP duration
if (expEn[0] && expEn[0].company === 'MEDIASTEP') {
  expEn[0].duration = '03/2023 - 04/2025';
}
if (expVi[0] && expVi[0].company === 'MEDIASTEP') {
  expVi[0].duration = '03/2023 - 04/2025';
}

const dcorpEn = {
  company: "Dcorp Vietnam",
  role: "Team Leader / Senior Fullstack Developer",
  duration: "05/2025 - Current",
  location: "Ho Chi Minh City",
  summary: "Leading a cross-functional team to architect and scale the core POS and F&B enterprise management ecosystem using a microservices architecture.",
  responsibilities: [
    "Architect and maintain highly available microservices to process thousands of concurrent POS transactions and loyalty events across nationwide restaurant chains.",
    "Design and implement distributed tracing, centralized logging (ELK), and monitoring (Prometheus/Grafana) to quickly detect and resolve bottlenecks in a high-throughput environment.",
    "Solve complex distributed systems challenges including data consistency, message queue optimization (Kafka/RabbitMQ), and API Gateway rate-limiting.",
    "Lead code reviews, enforce strict engineering standards, and mentor engineers to build resilient, fault-tolerant fullstack solutions."
  ],
  achievements: [
    "Successfully optimized inter-service communication, reducing API latency under peak loads by 40%.",
    "Introduced end-to-end observability practices that reduced Mean Time To Resolution (MTTR) for production incidents."
  ],
  techStack: ["Golang", "Node.js", "ReactJS", ".NET Core", "Kafka", "Kubernetes", "Redis", "OpenTelemetry", "Grafana"]
};

const dcorpVi = {
  company: "Dcorp Vietnam",
  role: "Team Leader / Kỹ sư Fullstack Senior",
  duration: "05/2025 - Hiện tại",
  location: "Thành phố Hồ Chí Minh",
  summary: "Dẫn dắt đội ngũ kỹ sư thiết kế và mở rộng hệ sinh thái quản lý nhà hàng (POS & F&B) quy mô doanh nghiệp trên nền tảng kiến trúc Microservices.",
  responsibilities: [
    "Thiết kế và duy trì các microservices có tính sẵn sàng cao nhằm xử lý hàng ngàn giao dịch POS và sự kiện khách hàng đồng thời từ các chuỗi nhà hàng trên toàn quốc.",
    "Triển khai hệ thống distributed tracing, logging tập trung (ELK) và giám sát (Prometheus/Grafana) để nhanh chóng phát hiện và giải quyết điểm nghẽn cổ chai trong môi trường tải cao.",
    "Giải quyết các bài toán phức tạp của hệ thống phân tán như tính nhất quán dữ liệu, tối ưu hóa hàng đợi (Kafka/RabbitMQ) và giới hạn tải (rate-limiting) tại API Gateway.",
    "Dẫn dắt các buổi code review, thiết lập tiêu chuẩn kỹ thuật khắt khe và đào tạo kỹ sư nhằm xây dựng các giải pháp fullstack bền bỉ, chịu lỗi tốt."
  ],
  achievements: [
    "Tối ưu hóa giao tiếp giữa các services, giúp giảm 40% độ trễ API trong các khung giờ cao điểm.",
    "Áp dụng tiêu chuẩn quan sát toàn diện (observability), giúp giảm đáng kể thời gian trung bình để khắc phục sự cố (MTTR) trên môi trường production."
  ],
  techStack: ["Golang", "Node.js", "ReactJS", ".NET Core", "Kafka", "Kubernetes", "Redis", "OpenTelemetry", "Grafana"]
};

expEn.unshift(dcorpEn);
expVi.unshift(dcorpVi);

fs.writeFileSync(expEnPath, JSON.stringify(expEn, null, 2));
fs.writeFileSync(expViPath, JSON.stringify(expVi, null, 2));

console.log('Successfully added Dcorp Vietnam to experiences.');
