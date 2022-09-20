import Header from "./components/header/header";

import Footer from "./components/footer/footer";
import Container from "./layout/container/container";
import Section from "./layout/section/section";
import Section2 from "./layout/section/section";
import MovieList from "./components/muvies/movieList";
import { useState } from "react";
import TrailerScroller from "./components/trailer/Trailer_scroller";
import TrendList from "./components/muvies/TrendList";

function App() {
  const [sectiontoggle, setSectionToggle] = useState({
    first: "По ТВ",
    second: "По ТВ",
    third: "На Сегодня",
  });

  const handleToggledValue = (section, selectedValue) => {
    setSectionToggle((prev) => {
      return {
        ...prev,
        [section]: selectedValue,
      };
    });
  };

  console.log(sectiontoggle.third);

  return (
    <>
      <Container>
        <Header />
        <Section
          title="Что популярно"
          items={["По ТВ", "В кинотеатрах"]}
          onToggle={handleToggledValue.bind(null, "first")}
          isToggled={
            sectiontoggle.first === "По ТВ" && "В кинотеатрах" ? false : true
          }
        >
          <MovieList fetch={sectiontoggle.first} />
        </Section>
        <TrailerScroller />
        <Section2
          title="В тренде"
          items={["На Сегодня", "На этой неделе"]}
          onToggle={handleToggledValue.bind(null, "third")}
          isToggled={sectiontoggle.third === "На Сегодня" ? false : true}
        >
          <TrendList fetch={sectiontoggle.third} />
        </Section2>
      </Container>

      <Footer />
    </>
  );
}

export default App;
