import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import Login from "./login/Login";
import Register from "./register/Register";
import Expert from "./expert/Expert";
import SearchResults from "./search/SearchResults";
import CourseExpert from "./course/CourseExpert";
import SearchResultClient from "./search/SearchResultClient";
import Client from "./client/Client";
import CourseClient from "./course/CourseClient";
import CourseForm from "./course/CourseForm";
import Afiliate from "./course/Afiliate";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SelectRole from "./select_role/SelectRole";
import LandingPageT from "./landing/teacherlanding"
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/T" element={<LandingPageT />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/search-expert" element={<SearchResults />} />
          <Route path="/course-expert" element={<CourseExpert />} />
          <Route path="/course-expert/afiliate-example" element={<Afiliate />} />
          <Route path="/client" element={<Client />} />
          <Route path="/search-client" element={<SearchResultClient />} />
          <Route path="/course-client" element={<CourseClient />} />
          <Route path="/course-client/:id" element={<CourseClient />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route
            path="/course-client/course-example/form-example"
            element={<CourseForm />}
          />
          <Route
            path="*"
            element={
              <h1 className="h-screen w-full flex flex-col items-center justify-center text-3xl text-red-500 font-bold">
                Not Found !
              </h1>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>

  );
}

export default App;
