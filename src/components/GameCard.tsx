import Link from "next/link";
import type { Game, GameStatus } from "@/types/game";

type GameCardProps = {
  game: Game;
  onEdit: () => void;
  onDelete: () => void;
  onStatusChange: (status: GameStatus) => void;
};

export default function GameCard({
  game,
  onEdit,
  onDelete,
  onStatusChange,
}: GameCardProps) {
  return (
    <article>
      <h2>
        <Link href={`/games/${game.id}`}>{game.name}</Link>
      </h2>

      <p>แพลตฟอร์ม: {game.platform}</p>

      <p>จำนวนชั่วโมง: {game.hours} ชั่วโมง</p>

      <label htmlFor={`status-${game.id}`}>สถานะ: </label>

      <select
        id={`status-${game.id}`}
        value={game.status}
        onChange={(event) =>
          onStatusChange(event.target.value as GameStatus)
        }
      >
        <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
        <option value="กำลังเล่น">กำลังเล่น</option>
        <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
      </select>

      <div>
        <button type="button" onClick={onEdit}>
          แก้ไข
        </button>

        <button type="button" onClick={onDelete}>
          ลบ
        </button>
      </div>
    </article>
  );
}