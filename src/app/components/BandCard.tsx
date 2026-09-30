import Image from 'next/image';
import { Band } from "@/Type/typesband";

export default function BandCard({ band }: { band: Band }) {
  return (
    <div style={{ border: '1px solid #eaeaea', borderRadius: '12px', padding: '16px', overflow: 'hidden' }}>
      <h2 style={{ marginBottom: '12px', fontSize: '1.5rem' }}>{band.name}</h2>
      
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        <Image
          src={band.imagePath}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      
      <h3 style={{ marginTop: '16px', fontSize: '1.2rem' }}>สมาชิก (Members):</h3>
      <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
        {band.members.map((member, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}