// 1. นำ type Course ย้ายมาไว้ที่นี่
type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

// 2. นำข้อมูลรายวิชาที่สร้างไว้ย้ายมาใส่ที่นี่
const courses: Course[] = [
  { id: 1, code: "10301231", title: "Web Technology", credits: 3, isOpen: true },
  { id: 2, code: "10301232", title: "Database Systems", credits: 3, isOpen: false },
  { id: 3, code: "10301233", title: "System Analysis and Design", credits: 3, isOpen: true },
  { id: 4, code: "10301234", title: "Computer Networks", credits: 3, isOpen: true },
  { id: 5, code: "10301235", title: "Operating Systems", credits: 3, isOpen: false }
];

// 3. ตั้งชื่อ Component ว่า CoursesPage
export default function CoursesPage() {
  return (
    <main className="page">
      <h1>รายวิชาทั้งหมด</h1>
      
      <section className="courseGrid">
        {/* 4. นำส่วน map() ที่ทำสำเร็จแล้วมาใส่ที่นี่ */}
        {courses.map((course) => (
          <article key={course.id} className="courseCard">
            <h2>{course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p>
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}