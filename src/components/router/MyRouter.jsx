import { Profile } from "../Profile";
import { Tools } from "../Tools";
import { Works } from "../Works";
import { Route, Routes } from "react-router-dom";

export const MyRouter = () => {
  return (
    <Routes>
      <Route index element={<Profile />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
};
