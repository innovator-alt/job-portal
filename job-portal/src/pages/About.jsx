import {
  Briefcase,
  Building2,
  Users,
  Award,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

const stats = [
  {
    icon: <Briefcase size={32} />,
    title: "Jobs Posted",
    value: "10,000+",
  },
  {
    icon: <Building2 size={32} />,
    title: "Companies",
    value: "500+",
  },
  {
    icon: <Users size={32} />,
    title: "Candidates",
    value: "25,000+",
  },
  {
    icon: <Award size={32} />,
    title: "Placements",
    value: "15,000+",
  },
];

const features = [
  "Verified Companies",
  "Easy Job Search",
  "Resume Upload",
  "Application Tracking",
  "Recruiter Dashboard",
  "Real-Time Notifications",
];

const team = [
  {
    id: 1,
    name: "John Anderson",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    id: 2,
    name: "Sophia Wilson",
    role: "HR Director",
    image: "https://i.pravatar.cc/200?img=32",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/200?img=15",
  },
];

function About() {
  return (
    <MainLayout>
      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            About JobPortal
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Connecting talented professionals with
            world-class companies through a modern,
            intelligent recruitment platform.
          </p>
        </div>
      </section>

      {/* About */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              About Our Platform
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              JobPortal is designed to simplify hiring
              for recruiters while helping candidates
              discover opportunities that match their
              skills and career goals.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our mission is to make recruitment faster,
              smarter, and more transparent using modern
              technology and user-friendly design.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl bg-white p-6 shadow">
              <Target className="text-blue-600" />

              <h3 className="mt-4 text-2xl font-semibold">
                Mission
              </h3>

              <p className="mt-3 text-slate-600">
                Empower job seekers and recruiters by
                providing a secure and intelligent hiring
                platform.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <Eye className="text-green-600" />

              <h3 className="mt-4 text-2xl font-semibold">
                Vision
              </h3>

              <p className="mt-3 text-slate-600">
                Become the most trusted recruitment
                platform for professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Why Choose Us
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border bg-slate-50 p-6"
              >
                <CheckCircle className="text-green-600" />

                <h3 className="mt-4 text-xl font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Growth
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 text-center shadow"
              >
                <div className="flex justify-center text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-500">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Meet Our Team
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="rounded-xl p-6 text-center shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-36 w-36 rounded-full object-cover"
                />

                <h3 className="mt-5 text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-slate-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Career Journey?
          </h2>

          <p className="mt-6 text-blue-100">
            Join thousands of professionals who found
            their dream job using JobPortal.
          </p>

          <a
            href="/jobs"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600"
          >
            Explore Jobs
          </a>
        </div>
      </section>
    </MainLayout>
  );
}

export default About;