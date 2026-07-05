import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/common/Loader";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));
const JobSearch = lazy(() => import("../pages/JobSearch"));
const JobDetails = lazy(() => import("../pages/JobDetails"));
const AppliedJobs = lazy(() => import("../pages/AppliedJobs"));
const SavedJobs = lazy(() => import("../pages/SavedJobs"));
const Profile = lazy(() => import("../pages/Profile"));
const EditProfile = lazy(() => import("../pages/EditProfile"));
const UploadResume = lazy(() => import("../pages/UploadResume"));
const ResumePreview = lazy(() => import("../pages/ResumePreview"));
const RecruiterDashboard = lazy(() =>
  import("../pages/RecruiterDashboard")
);

const CreateJob = lazy(() =>
  import("../pages/CreateJob")
);

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/applied-jobs"
  element={
    <ProtectedRoute>
      <AppliedJobs />
    </ProtectedRoute>
  }
/>
<Route
  path="/saved-jobs"
  element={
    <ProtectedRoute>
      <SavedJobs />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile/edit"
  element={
    <ProtectedRoute>
      <EditProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/upload-resume"
  element={
    <ProtectedRoute>
      <UploadResume />
    </ProtectedRoute>
  }
/>

<Route
  path="/resume-preview"
  element={
    <ProtectedRoute>
      <ResumePreview />
    </ProtectedRoute>
  }
/>

<Route
  path="/recruiter"
  element={
    <ProtectedRoute>
      <RecruiterDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/recruiter/create-job"
  element={
    <ProtectedRoute>
      <CreateJob />
    </ProtectedRoute>
  }
/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    
  );
}

export default AppRoutes;