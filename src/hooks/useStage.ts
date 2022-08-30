import React from "react";
import { createStage } from "../gameHelpers";
// Types
import type { PLAYER } from "./usePlayer";

export type STAGECELL = [string | number, string];
export type STAGE = STAGECELL[][];

export const useStage = (player: PLAYER, resetPlayer: () => void) => {
    const [stage, setStage] = React.useState(createStage());

    React.useEffect(() => {
        if (!player.pos) return;

        const updateStage = (prevStage: STAGE): STAGE => {
            // First, flush the stage.
            // If it says "clear" but doesn't have a 0, it means that it's the player's move and should be cleared.
            const newStage = prevStage.map(
                row => row.map(cell => cell[1] === "clear" ? [0, 'clear'] : cell) as STAGECELL[]
            );

            //Then draw the tetromino.
            player.tetromino.forEach((row, y) => {
                row.forEach((cell, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`];
                    }
                });
            });
            return newStage;

            setStage(prev => updateStage(prev));
        };
    }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino]);

    return { stage, setStage };
};