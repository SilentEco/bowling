import React, { useState } from "react";

const Scoring = () => {
  const [score, setScore] = useState(0);
  const [firstThrow, setFirstThrow] = useState(0);
  const [secondThrow, setSecondThrow] = useState(0);
  const [thirdThrow, setThirdThrow] = useState(0);
  const [currentThrow, setCurrentThrow] = useState(1);
  const [round, setRound] = useState(1);
  const [spare, setSpare] = useState(false);
  const [strike, setStrike] = useState(false);
  //#region lite mycket kanske
  //   if (round <= 10) {
  //     return (
  //       <div>
  //         <h2>Score: {score}</h2>
  //         <h4>ONE: {firstThrow}</h4>
  //         <h4>TWO: {secondThrow}</h4>
  //         <h4>THREE: {thirdThrow}</h4>

  //         <h1>Current Round: {round}</h1>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(1);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 if (spare) {
  //                   setScore(score + 10);
  //                   setSecondThrow(10);

  //                   setCurrentThrow(1);
  //                 } else {
  //                   setScore(score + (firstThrow + 1));
  //                   setSecondThrow(1);
  //                   setCurrentThrow(1);
  //                 }
  //                 setSpare(false);
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(1);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(1);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 1));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           1
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(2);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(2);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 2));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(2);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(2);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 2));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           2
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(3);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(3);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 3));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(3);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(3);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 3));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           3
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(4);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(4);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 4));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(4);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(4);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 4));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           4
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(5);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(5);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 5));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(5);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(5);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 5));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           5
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(6);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(6);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 6));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(6);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(6);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 6));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           6
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(7);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(7);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 7));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(7);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(7);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 7));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           7
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(8);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(8);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 8));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(8);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(8);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 8));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           8
  //         </button>
  //         <button
  //           onClick={() => {
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(9);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(9);
  //                 setCurrentThrow(1);

  //                 setScore(score + (firstThrow + 9));
  //                 setRound(round + 1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(9);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(9);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 9));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           9
  //         </button>
  //         <button
  //           onClick={() => {
  //             alert("STRIKE");
  //             if (round !== 10) {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(10);
  //                 setCurrentThrow(1);
  //                 setScore(score + 10);
  //                 setRound(round + 1);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(10);
  //                 setCurrentThrow(1);
  //               }
  //             } else {
  //               if (currentThrow === 1) {
  //                 setFirstThrow(10);
  //                 setCurrentThrow(2);
  //               }
  //               if (currentThrow === 2) {
  //                 setSecondThrow(10);
  //                 setCurrentThrow(3);
  //               }
  //               if (currentThrow === 3) {
  //                 setScore(score + (firstThrow + secondThrow + 10));
  //                 setRound(round + 1);
  //               }
  //             }
  //           }}
  //         >
  //           10
  //         </button>
  //       </div>
  //     );
  //   } else
  //     return (
  //       <div>
  //         <h2>Final score: {score}</h2>
  //         <h1>GAME OVER</h1>
  //         <button
  //           onClick={() => {
  //             setScore(0);
  //             setFirstThrow(0);
  //             setSecondThrow(0);
  //             setCurrentThrow(1);
  //             setRound(1);
  //           }}
  //         >
  //           RESTART
  //         </button>
  //       </div>
  //     );
  // };
  //#endregion

  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (round <= 10) {
    return (
      <>
        <h1>Score: {score}</h1>
        {currentThrow === 3
          ? "Throw 3"
          : currentThrow === 1
          ? "Throw 1"
          : "Throw 2"}

        <h3>Round: {round}</h3>
        <h6>FIRST: {firstThrow}</h6>
        <h6>SECOND: {secondThrow}</h6>
        <h6>THIRD: {thirdThrow}</h6>

        <div style={{ display: "flex" }}>
          {points.map((point, index) => {
            const normalFrame = () => {
              if (currentThrow === 1) {
                switch (point) {
                  case 10:
                    setFirstThrow(10);
                    setScore(10 + score);
                    setCurrentThrow(1);
                    setRound(round + 1);
                    break;
                  default:
                    setFirstThrow(point);
                    setScore(point + score);
                    setCurrentThrow(2);
                }
              }
              if (currentThrow === 2) {
                setSecondThrow(point);

                setScore(point + score);
                setCurrentThrow(1);
                setRound(round + 1);
              }
              //#region lookback
              //   if (currentThrow === 1) {
              //     setFirstThrow(point);
              //     setCurrentThrow(2);
              //     setRound(round + 1);
              //   }
              //   if (currentThrow === 2) {
              //     setSecondThrow(point);
              //     setCurrentThrow(1);
              //     setRound(round + 1);
              //   }
              //#endregion
            };
            const finalFrame = () => {
              if (currentThrow === 1) {
                switch (point) {
                  case 10:
                    setFirstThrow(10);
                    setCurrentThrow(2);
                    break;
                  default:
                    setFirstThrow(point);
                    setCurrentThrow(2);
                }
              }
              if (currentThrow === 2) {
                switch (point) {
                  case 10:
                    setSecondThrow(10);
                    setCurrentThrow(3);
                    break;
                  default:
                    setSecondThrow(point);
                    setCurrentThrow(3);
                }
              }
              /// ENDAST OM DU FICK EN SPÄRR ELLER STRIKE///
              if (currentThrow === 3) {
                switch (point) {
                  case 10:
                    setScore(firstThrow + secondThrow + 10 + score);
                    setRound(round + 1);
                    setThirdThrow(10);
                    break;
                  default:
                    setThirdThrow(point);
                    setScore(firstThrow + secondThrow + point + score);
                    setRound(round + 1);
                }
              }
            };

            return (
              <div key={index}>
                <button
                  onClick={() => {
                    round !== 10 ? normalFrame() : finalFrame();
                  }}
                >
                  {point}
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  } else
    return (
      <>
        <h1>Game over!</h1>
        <h3>Round: {round}</h3>
        <h6>FIRST: {firstThrow}</h6>
        <h6>SECOND: {secondThrow}</h6>
        <h6>THIRD: {thirdThrow}</h6>
        <h2> Score {score}</h2>
        <button
          onClick={() => {
            setScore(0);
            setFirstThrow(0);
            setSecondThrow(0);
            setThirdThrow(0);
            setRound(1);
            setCurrentThrow(1);
          }}
        >
          Play again!
        </button>
      </>
    );
};
export default Scoring;
