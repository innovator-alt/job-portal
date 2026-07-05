import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    toast.success("Message sent successfully.");

    reset();
  }

  return (
    <MainLayout>
      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        {/* Contact Cards */}

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <Mail className="mx-auto text-blue-600" size={36} />

            <h3 className="mt-4 text-xl font-bold">
              Email
            </h3>

            <p className="mt-2 text-slate-500">
              support@jobportal.com
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <Phone className="mx-auto text-blue-600" size={36} />

            <h3 className="mt-4 text-xl font-bold">
              Phone
            </h3>

            <p className="mt-2 text-slate-500">
              +91 9876543210
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <MapPin className="mx-auto text-blue-600" size={36} />

            <h3 className="mt-4 text-xl font-bold">
              Address
            </h3>

            <p className="mt-2 text-slate-500">
              Bengaluru, Karnataka, India
            </p>
          </div>

        </div>

        {/* Contact Form */}

        <div className="mt-20 rounded-xl bg-white p-10 shadow">

          <h2 className="mb-8 text-3xl font-bold">
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Name"
              className="w-full rounded-lg border p-3"
            />

            {errors.name && (
              <p className="text-red-500">
                {errors.name.message}
              </p>
            )}

            <input
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email"
              className="w-full rounded-lg border p-3"
            />

            <input
              {...register("subject", {
                required: "Subject is required",
              })}
              placeholder="Subject"
              className="w-full rounded-lg border p-3"
            />

            <textarea
              rows="6"
              {...register("message", {
                required: "Message is required",
              })}
              placeholder="Message"
              className="w-full rounded-lg border p-3"
            />

            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              Send Message
            </button>

          </form>

        </div>

        {/* Map */}

        <div className="mt-20 rounded-xl bg-slate-200 p-24 text-center">
          <h3 className="text-2xl font-bold">
            Google Maps Placeholder
          </h3>
        </div>

        {/* Social */}

   <div className="mt-16 flex justify-center gap-8">

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="rounded-full bg-blue-100 p-4 text-blue-600 transition hover:scale-110"
  >
    <Globe size={24} />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
    className="rounded-full bg-slate-100 p-4 text-slate-700 transition hover:scale-110"
  >
    <Share2 size={24} />
  </a>

  <a
    href="mailto:support@jobportal.com"
    className="rounded-full bg-green-100 p-4 text-green-600 transition hover:scale-110"
  >
    <MessageCircle size={24} />
  </a>

</div>

      </section>
    </MainLayout>
  );
}

export default Contact;