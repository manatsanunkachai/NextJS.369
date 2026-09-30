"use client";

import { useEffect, useState } from "react";
import type { Game, GameStatus } from "@/types/game";
import type { GameDraft } from "@/components/GameForm";
import GameForm from "@/components/GameForm";
import GameCard from "@/components/GameCard";
import {
  created,
  deleted,
  initialized,
  statusChanged,
  updated,
} from "@/lib/gamesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

type GameExplorerProps = {
  initialGames: Game[];
};

export default function GameExplorer({
  initialGames,
}: GameExplorerProps) {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.games);

  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (games.length === 0) {
      dispatch(initialized(initialGames));
    }
  }, [dispatch, initialGames, games.length]);

  const displayGames =
    games.length > 0 ? games : initialGames;

  function toGame(id: string, draft: GameDraft): Game {
    return {
      id,
      name: draft.name.trim(),
      platform: draft.platform,
      hours: Number(draft.hours),
      status: draft.status,
    };
  }

  function handleSave(draft: GameDraft) {
    if (editingId === null) {
      dispatch(
        created(
          toGame(`game-${Date.now()}`, draft)
        )
      );
    } else {
      dispatch(
        updated(
          toGame(editingId, draft)
        )
      );
    }

    setEditingId(null);
  }

  function handleDelete(id: string) {
    dispatch(deleted(id));

    if (editingId === id) {
      setEditingId(null);
    }
  }

  function handleStatusChange(
    id: string,
    status: GameStatus
  ) {
    dispatch(
      statusChanged({
        id,
        status,
      })
    );
  }

  function handleSearch() {
    setSearchKeyword(keyword);
  }

  const editingGame = displayGames.find(
    (game) => game.id === editingId
  );

  const visibleGames = displayGames.filter((game) =>
    game.name
      .toLowerCase()
      .includes(searchKeyword.trim().toLowerCase())
  );

  const unstartedHours = displayGames
    .filter(
      (game) => game.status === "ยังไม่เริ่ม"
    )
    .reduce(
      (total, game) => total + game.hours,
      0
    );

  return (
    <section>
      <div>
        <label htmlFor="search">
          ค้นหาเกม
        </label>

        <div className="search-box">
          <input
            id="search"
            value={keyword}
            onChange={(event) =>
              setKeyword(event.target.value)
            }
            placeholder="ค้นหาจากชื่อเกม"
          />

          <button
            type="button"
            onClick={handleSearch}
            aria-label="ค้นหาเกม"
          >
            🔍
          </button>
        </div>
      </div>

      <p>
        ชั่วโมงของเกมที่ยังไม่เริ่ม:{" "}
        {unstartedHours} ชั่วโมง
      </p>

      <hr />

      <h2>
        {editingGame
          ? "แก้ไขเกม"
          : "เพิ่มเกม"}
      </h2>

      <GameForm
        key={editingId ?? "new"}
        initialGame={editingGame}
        onSave={handleSave}
        onCancel={() =>
          setEditingId(null)
        }
      />

      <hr />

      <h2>รายการเกม</h2>

      {visibleGames.length === 0 ? (
        <p>ไม่พบเกมที่ค้นหา</p>
      ) : (
        visibleGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onEdit={() =>
              setEditingId(game.id)
            }
            onDelete={() =>
              handleDelete(game.id)
            }
            onStatusChange={(status) =>
              handleStatusChange(
                game.id,
                status
              )
            }
          />
        ))
      )}
    </section>
  );
}