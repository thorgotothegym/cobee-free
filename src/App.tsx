import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ListCourses } from "./view/ListCourses";
import { Register } from "./view/Register";

import Layout from "./view/Layout";

import { URL } from "./constants/URL";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={URL.register} element={<Register />} />
          <Route path={URL.courses} element={<ListCourses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
