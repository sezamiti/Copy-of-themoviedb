import Header from "./components/header/header";

import Footer from "./components/footer/footer";
import Container from "./layout/container/container";
import Section from "./layout/section/section";
import MovieList from "./components/muvies/movieList";
import { useState } from "react";
import TrailerScroller from "./components/trailer/Trailer_scroller";

function App() {
  const [sectiontoggle, setSectionToggle] = useState({
    first: "По ТВ",
    second: "По ТВ",
    third: "Сегодня",
  });

  const handleToggledValue = (section, selectedValue) => {
    setSectionToggle((prev) => {
      return {
        ...prev,
        [section]: selectedValue,
      };
    });
  };

  console.log(sectiontoggle.first);

  return (
    <>
      <Container>
        <Header />
        <Section
          title="Что популярно"
          items={["По ТВ", "В кинотеатрах"]}
          onToggle={handleToggledValue.bind(null, "first")}
          isToggled={sectiontoggle.first === "По ТВ" ? false : true}
        >
          <MovieList fetch={sectiontoggle.first} />
        </Section>
      </Container>
      <TrailerScroller />
      <Footer />
    </>
  );
}

export default App;
