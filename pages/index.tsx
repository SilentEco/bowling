import type { NextPage } from "next";
import Scoring from "../components/scoring";

const Home: NextPage = () => {
  return (
    <div>
      Bowling
      <Scoring />
    </div>
  );
};

export default Home;
