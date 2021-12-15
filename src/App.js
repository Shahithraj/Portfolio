import React from "react";
import Header from "./components/Header/Header.js";
import SkillContainer from "./components/SkillContainer/SkillContainer.js";
import TopContent from "./components/TopContent/TopContent.js";
import Contact from "./components/Contact/Contact.js";
import ProjectContainer from "./components/Projects/ProjectContainer.js";

const App = () => {
  return (
    <div>
      <Header />
      <TopContent />
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
};

export default App;
