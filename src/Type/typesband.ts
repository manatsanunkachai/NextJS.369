// 1. สร้าง Type สำหรับ "สมาชิกในวงดนตรี"
export type BandMember = {
  name: string; // ชื่อสมาชิก
  role: string; // ตำแหน่งหรือหน้าที่ในวง
};

// 2. สร้าง Type สำหรับ "วงดนตรี"
export type Band = {
  id: string; // รหัสอ้างอิง (เพื่อใช้เป็น key ตอนวนลูป map)
  name: string; // ชื่อวงดนตรี
  imagePath: string; // เส้นทางไฟล์รูปภาพที่จะใช้ดึงมาแสดง
  members: BandMember[]; // รายชื่อสมาชิก (เป็น Array ของ BandMember ด้านบน)
};