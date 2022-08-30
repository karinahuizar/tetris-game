import React from 'react';
import { createStage } from './gameHelpers';

// Custom Hooks
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';

const { player, updatePlayerPos, resetPlayer } = usePlayer();
const { stage, setStage } = useStage(player, resetPlayer);

//Components
import Stage from './components/Stage/Stage';
import Display from './components/Display/Display';
import StartButton from './components/StartButton/StartButton';

// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);

  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>
        <div className='display'>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over!" />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}

        </div>
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
