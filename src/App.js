import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "views/HomeView";
import ProjectView from "views/ProjectsView";
import ResumeView from "./views/ResumeView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/projects" element={<ProjectView />} />
        <Route path="/resume" element={<ResumeView />} />
      </Routes>
    </>
  );
}

export default App;
