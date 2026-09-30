"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Game, GameStatus } from "@/types/game";

export type GameDraft = {
  name: string;
  platform: string;
  hours: string;
  status: GameStatus;
};

const emptyDraft: GameDraft = {
  name: "",
  platform: "",
  hours: "",
  status: "ยังไม่เริ่ม",
};

type FormErrors = Partial<Record<keyof GameDraft, string>>;

type GameFormProps = {
  initialGame?: Game;
  onSave: (draft: GameDraft) => void;
  onCancel: () => void;
};

function toDraft(game?: Game): GameDraft {
  if (!game) {
    return emptyDraft;
  }

  return {
    name: game.name,
    platform: game.platform,
    hours: String(game.hours),
    status: game.status,
  };
}

export default function GameForm({
  initialGame,
  onSave,
  onCancel,
}: GameFormProps) {
  const [draft, setDraft] = useState<GameDraft>(() => toDraft(initialGame));
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setDraft((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (draft.name.trim() === "") {
      nextErrors.name = "กรุณาระบุชื่อเกม";
    }

    if (draft.platform === "") {
      nextErrors.platform = "กรุณาเลือกแพลตฟอร์ม";
    }

    const hours = Number(draft.hours);

    if (!Number.isInteger(hours) || hours <= 0) {
      nextErrors.hours = "จำนวนชั่วโมงต้องเป็นจำนวนเต็มบวก";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onSave(draft);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">ชื่อเกม</label>
        <input
          id="name"
          name="name"
          value={draft.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="platform">แพลตฟอร์ม</label>
        <select
          id="platform"
          name="platform"
          value={draft.platform}
          onChange={handleChange}
          aria-invalid={Boolean(errors.platform)}
          aria-describedby={
            errors.platform ? "platform-error" : undefined
          }
        >
          <option value="">-- เลือกแพลตฟอร์ม --</option>
          <option value="PC">PC</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="PlayStation 4">PlayStation 4</option>
          <option value="Xbox Series X/S">Xbox Series X/S</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="Mobile">Mobile</option>
        </select>
        {errors.platform && (
          <p id="platform-error">{errors.platform}</p>
        )}
      </div>

      <div>
        <label htmlFor="hours">จำนวนชั่วโมงที่คาดว่าจะเล่น</label>
        <input
          id="hours"
          name="hours"
          type="number"
          value={draft.hours}
          onChange={handleChange}
          aria-invalid={Boolean(errors.hours)}
          aria-describedby={errors.hours ? "hours-error" : undefined}
        />
        {errors.hours && <p id="hours-error">{errors.hours}</p>}
      </div>

      <div>
        <label htmlFor="status">สถานะ</label>
        <select
          id="status"
          name="status"
          value={draft.status}
          onChange={handleChange}
        >
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>
      </div>

      <button type="submit">บันทึก</button>

      {initialGame && (
        <button type="button" onClick={onCancel}>
          ยกเลิก
        </button>
      )}
    </form>
  );
}