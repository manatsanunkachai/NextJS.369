import type { Metadata } from "next";
import { games } from "@/data/games";
import GameExplorer from "@/components/GameExplorer";

export const metadata: Metadata = {
  title: "Game Backlog",
};

export default function GamesPage() {
  return (
    <main>
  <p>🍵 Cozy Game Collection</p>

  <h1>My Cozy Game Backlog</h1>

  <p>
    รวมเกมสร้างบ้าน แต่งห้อง และบริหารร้านอาหารที่อยากเล่น
  </p>

  <GameExplorer initialGames={games} />
</main>
  );
}