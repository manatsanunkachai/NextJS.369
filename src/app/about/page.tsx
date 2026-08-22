import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา (About Us) | Next Course Hub',
  description: 'ข้อมูลผู้พัฒนาและวัตถุประสงค์ของโครงการ Next Course Hub',
};

// --- ส่วนของสไตล์ CSS (CSS-in-JS) ---
const styles = {
  pageContainer: {
    fontFamily: "'Inter', 'Public Sans', sans-serif",
    backgroundColor: '#ebd5df', // สีพื้นหลังเทาอ่อนมากๆ
    minHeight: '100vh',
    color: '#1f2937',
  },
  contentWrapper: {
    maxWidth: '64rem', // ความกว้างสูงสุด 1024px
    margin: '0 auto', // จัดกึ่งกลางหน้า
    padding: '4rem 2rem', // เว้นระยะด้านบน/ล่าง 4rem ด้านซ้ำย/ขวา 2rem
    '@media (maxWidth: 768px)': {
      padding: '2rem 1rem', // ปรับระยะเมื่อหน้าจอเล็กลง
    },
  },
  mainTitle: {
    fontSize: '3rem', // หัวข้อใหญ่สุด
    fontWeight: 'bold',
    textAlign: 'center' as const,
    color: '#254344', // สีฟ้าสดใสเป็นสีเน้น (primary accent)
    marginBottom: '3rem',
    borderBottom: '4px solid #3b82f6', // เส้นขีดด้านล่างหัวข้อ
    display: 'inline-block',
    width: 'auto',
    left: '50%',
    position: 'relative' as const,
    transform: 'translateX(-50%)',
    paddingBottom: '0.5rem',
  },
  sectionCard: {
    backgroundColor: '#ffffff', // พื้นหลังการ์ดขาว
    borderRadius: '1rem', // มุมมน
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // เงาซอฟต์ๆ
    padding: '2rem',
    marginBottom: '2rem',
    border: '1px solid #e5e7eb', // เส้นขอบเทาอ่อนๆ
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827', // หัวข้อย่อยสีเข้มขึ้น
    marginBottom: '1.5rem',
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '0.75rem', // ระยะห่างระหว่างไอคอนและข้อความ
  },
  icon: {
    fontSize: '1.5rem',
    color: '#60a5fa', // สีฟ้าอ่อนสำหรับไอคอน
  },
  infoList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: '1rem', // ระยะห่างระหว่างรายการ
  },
  listItem: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    backgroundColor: '#eff6ff', // พื้นหลังรายการสีฟ้าอ่อน
    borderRadius: '0.5rem',
    padding: '1rem 1.5rem',
    border: '1px solid #bfdbfe',
  },
  listLabel: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
    color: '#3b82f6',
    flexShrink: 0,
  },
  listValue: {
    color: '#4b5563',
  },
  listIcon: {
    marginRight: '1rem',
    color: '#93c5fd',
  },
  purposeParagraph: {
    lineHeight: '1.8',
    fontSize: '1.125rem',
    color: '#4b5563',
  },
};

// --- ส่วนของ HTML (JSX) ---
export default function AboutPage() {
  return (
    <div style={styles.pageContainer}>
      {/* เพิ่ม Metadata เพื่อให้ SEO ดูดี */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Public+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={styles.contentWrapper}>
        {/* หัวข้อใหญ่ของหน้า */}
        <h1 style={styles.mainTitle}>เกี่ยวกับเรา (About Us)</h1>
        
        {/* การ์ดส่วนที่ 1: ข้อมูลผู้พัฒนา */}
        <section style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}>👤</span> ข้อมูลผู้พัฒนา
          </h2>
          
          <ul style={styles.infoList}>
            {/* รายการชื่อ */}
            <li style={styles.listItem}>
              <span style={styles.listIcon}>✓</span>
              <span style={styles.listLabel}>ชื่อ-นามสกุล:</span>
              <span style={styles.listValue}>[มนัสนันท์ กาชัย ]</span>
            </li>
            {/* รายการรหัสนักศึกษา */}
            <li style={styles.listItem}>
              <span style={styles.listIcon}>✓</span>
              <span style={styles.listLabel}>รหัสนักศึกษา:</span>
              <span style={styles.listValue}>[ 6804101369 ]</span>
            </li>
            {/* รายการอีเมล */}
            <li style={styles.listItem}>
              <span style={styles.listIcon}>✓</span>
              <span style={styles.listLabel}>อีเมลติดต่อ:</span>
              <span style={styles.listValue}>12346767.@gmail.com</span>
            </li>
          </ul>
        </section>

        {/* การ์ดส่วนที่ 2: วัตถุประสงค์ */}
        <section style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.icon}></span> วัตถุประสงค์
          </h2>
          <p style={styles.purposeParagraph}>
            เพื่อศึกษาและฝึกปฏิบัติการพัฒนาเว็บแอปพลิเคชันด้วย Next.js และ TypeScript เบื้องต้น 
            โดยเน้นการสร้างระบบที่มีประสิทธิภาพ ดูดี และใช้งานได้จริงสำหรับนักศึกษา
          </p>
        </section>
      </main>
    </div>
  );
}