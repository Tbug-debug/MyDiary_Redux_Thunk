import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import WriteTodo from "../routes/WriteDiary";
import ModifyDiary from "../routes/ModifyDiary";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/WriteTodo" element={<WriteTodo />}></Route>
        <Route path="/:id" element={<ModifyDiary />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
