import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <ul className="navList">
        <li>
          {/* ลิงก์ไปหน้าแรก ใช้ path เป็น / */}
          <Link className="navLink" href="/">
            หน้าแรก
          </Link>
        </li>
        <li>
          {/* ลิงก์ไปหน้ารายวิชา */}
          <Link className="navLink" href="/courses">
            รายวิชา
          </Link>
        </li>
        <li>
          {/* ลิงก์ไปหน้าเกี่ยวกับ */}
          <Link className="navLink" href="/about">
            เกี่ยวกับ
          </Link>
        </li>
      </ul>
    </nav>
  );
}