import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PlayerList from "./PlayerList";
import Home from "./Home";

export default function ApplicationViews() {
  
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>} />

        <Route path="players">
          <Route index element={<PlayerList />} />
          {/* <Route path=":id" element={<PlayerDetails />} /> */}
          {/* <Route path="edit/:id" element={<PlayerEditForm />} /> */}
        </Route>
      
      </Route>
      <Route path="*" element={<p>nothing here...</p>} />
    </Routes>
  );
};
