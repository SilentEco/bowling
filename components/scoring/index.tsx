import React, { useEffect, useState } from "react";

const Scoring = () => {
  const [score, setScore] = useState(0);
  const [firstThrow, setFirstThrow] = useState(0);
  const [secondThrow, setSecondThrow] = useState(0);
  const [thirdThrow, setThirdThrow] = useState(0);
  const [currentThrow, setCurrentThrow] = useState(1);
  const [round, setRound] = useState(1);
  const [spare, setSpare] = useState(false);
  const [sparePoint, setSparePoint] = useState(0);
  const [strike, setStrike] = useState(false);
  const [strikeScore1, setStrikeScore1] = useState(0);
  const [strikeScore2, setStrikeScore2] = useState(0);

  interface throws {
    frame: {
      t1: number;
      t2: number;
    };
  }

  let arr: throws[] = [];
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (round <= 10) {
    console.log(score);
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
                    // setStrike(true);
                    // setScore(score + point);
                    // setCurrentThrow(1);
                    // setRound(round + 1);
                    setScore(10 + score);
                    setStrike(true);
                    setRound(round + 1);
                    break;
                  default:
                    setFirstThrow(point);
                    setSparePoint(point);
                    setScore(score + point);
                    setCurrentThrow(2);
                    console.log("kast score 1", score);
                  // arr.push({ frame: { t1: firstThrow, t2: secondThrow } });
                  // console.log(arr);
                }
              }
              if (currentThrow === 2) {
                setSecondThrow(point);
                if (firstThrow + point === 10) {
                  setScore(score + 10);
                  setSpare(true);
                } else {
                  setScore(point + score);
                  console.log("kast score 2", score);
                }
                setCurrentThrow(1);
                // arr.push({ frame: { t1: firstThrow, t2: secondThrow } });
                setRound(round + 1);
              }
            };
            const spareFrame = () => {
              if (currentThrow === 1) {
                switch (point) {
                  case 10:
                    // setStrike(true);
                    // setFirstThrow(point);
                    // setScore(score + point + point);
                    setScore(10 + score);
                    setStrike(true);
                    setRound(round + 1);

                    break;
                  default:
                    setFirstThrow(point);
                    setScore(score + point + point);
                    setCurrentThrow(2);
                    console.log("stroke 1", score);
                  // arr.push({ frame: { t1: firstThrow, t2: secondThrow } });
                  // console.log(arr);
                }
              }
              if (currentThrow === 2) {
                setSecondThrow(point);
                if (firstThrow + point === 10) {
                  setSpare(true);

                  setScore(score + point);
                } else {
                  setScore(point + score);
                  setSpare(false);
                }
                setCurrentThrow(1);
                // arr.push({ frame: { t1: firstThrow, t2: secondThrow } });
                setRound(round + 1);
              }
            };
            const strikeFrame = () => {
              if (currentThrow === 1) {
                switch (point) {
                  case 10:
                    // setStrike(true);
                    // setStrikeScore1(10);
                    // setFirstThrow(point);
                    // setScore(point + score);
                    // setRound(round + 1);
                    setScore(10 + score);
                    setStrike(true);
                    setRound(round + 1);
                    setStrikeScore1(point);
                    break;
                  default:
                    setFirstThrow(point);
                    setStrikeScore1(point);
                    setCurrentThrow(2);
                    setScore(point + score + 10);
                  // arr.push({ frame: { t1: firstThrow, t2: secondThrow } });
                  // console.log(arr);
                }
              }
              if (currentThrow === 2) {
                setSecondThrow(point);
                setStrikeScore2(point);

                if (firstThrow + point === 10) {
                  setSpare(true);
                  setScore(10 + score);
                } else {
                  setScore(score + point + strikeScore1 + strikeScore2);
                  setStrike(false);
                }
                setCurrentThrow(1);

                // arr.push({ frame: { t1: firstThrow, t2: secondThrow } });
                setRound(round + 1);
              }
            };

            const finalFrame = () => {
              if (currentThrow === 1) {
                switch (point) {
                  case 10:
                    setStrike(true);
                    setStrikeScore1(10);
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
                    setStrike(false);
                    setRound(round + 1);
                }
              }
            };

            return (
              <div key={index}>
                <button
                  onClick={() => {
                    strike
                      ? strikeFrame()
                      : spare
                      ? spareFrame()
                      : round !== 10
                      ? normalFrame()
                      : finalFrame();
                  }}
                >
                  {point}
                </button>
              </div>
            );
          })}
        </div>
        {/* {arr.map(({ frame }, index) => {
          return (
            <div key={index}>
              <p>Round: {index + 1}</p>
              <hr />
              <p>t1 {frame.t1}</p>
              <br />
              <p>t2 {frame.t2}</p>
            </div>
          );
        })} */}
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
