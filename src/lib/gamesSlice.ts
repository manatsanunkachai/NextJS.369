import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Game } from "@/types/game";

const gamesSlice = createSlice({
  name: "games",
  initialState: [] as Game[],

  reducers: {
    initialized(state, action: PayloadAction<Game[]>) {
      return action.payload;
    },

    created(state, action: PayloadAction<Game>) {
      state.push(action.payload);
    },

    deleted(state, action: PayloadAction<string>) {
      return state.filter((game) => game.id !== action.payload);
    },

    updated(state, action: PayloadAction<Game>) {
      const index = state.findIndex(
        (game) => game.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    statusChanged(
      state,
      action: PayloadAction<{
        id: string;
        status: Game["status"];
      }>
    ) {
      const game = state.find((item) => item.id === action.payload.id);

      if (game) {
        game.status = action.payload.status;
      }
    },
  },
});

export const {
  initialized,
  created,
  deleted,
  updated,
  statusChanged,
} = gamesSlice.actions;

export default gamesSlice.reducer;