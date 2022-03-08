import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { api } from "./api";
import { Employee } from "./interfaces";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { SearchResults } from "./pages/SearchResults";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/api/employees?page=${page}`);
        setPrevPage(data.prev);
        setNextPage(data.next);
        setEmployees(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [page]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              employees={employees}
              loading={loading}
              error={error}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          }
        />
        <Route
          path="/employee/:id"
          element={
            <Details employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/add-employee"
          element={<Add employees={employees} setEmployees={setEmployees} />}
        />
        <Route
          path="/edit-employee/:id"
          element={<Edit employees={employees} setEmployees={setEmployees} />}
        />
        <Route path="/results/:searchValue" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};
