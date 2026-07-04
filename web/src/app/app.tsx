import {
 Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import CreateMeeting from "./pages/createMeeting";
import MeetingDetails from "./pages/meetingDetails";

export function App() {
  return (

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/create"
          element={<CreateMeeting />}
        />

        <Route
          path="/meeting/:id"
          element={<MeetingDetails />}
        />

      </Routes>

  );
}

export default App;