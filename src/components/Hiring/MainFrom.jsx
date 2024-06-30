import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RotatingLines } from "react-loader-spinner";
import toast from "react-hot-toast";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .matches(/@kiit\.ac\.in$/, "Email must be from the domain @kiit.ac.in")
    .required("Email is required"),
  roll: yup.string().required("Roll No. is required"),
  branch: yup.string().required("Branch is required"),
  year: yup
    .mixed()
    .oneOf(
      ["1st", "2nd", "3rd", "4th"],
      "Year must be one of 1st, 2nd, 3rd, or 4th"
    )
    .required("Year is required"),
  course: yup.string().required("Course is required"),
  cvLink: yup.string().url("Invalid URL").required("Resume link is required"),
  mobile: yup.string().required("Mobile No. is required"),
  domain: yup.string().required("Domain is required"),
  bio: yup.string().required("Description is required"),
});
export default function MainFrom({ type }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const techApi = "https://sheetdb.io/api/v1/ag4s93gg59qsb";
  const NonTechApi = "https://sheetdb.io/api/v1/f4lb5t6zo49na";
  let api;
  if (type == "tech") {
    api = techApi;
  } else {
    api = NonTechApi;
  }
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await fetch(`${api}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { data },
      }),
    });
    const info = await res.json();
    if (info.created) {
      setLoading(false);
      reset({
        bio: "",
        course: "",
        branch: "",
        cvLink: "",
        domain: "",
        email: "",
        roll: "",
        mobile: "",
        name: "",
      });
      toast.success("Regeneration Success !");
    } else {
      setLoading(false);
      setError(info.error);
      toast.error("This is an error!");
    }
  };

  const NonTechDomains = [
    {
      key: 1,
      name: "Photography",
    },
    {
      key: 2,
      name: "Content Writing",
    },
    {
      key: 3,
      name: "Social Media Marketing",
    },
    {
      key: 4,
      name: "Video Editing",
    },
    {
      key: 5,
      name: "Graphics Design",
    },
  ];
  const TechDomains = [
    {
      key: 1,
      name: "Cloud Automation",
    },
    {
      key: 2,
      name: "Core ML",
    },
    {
      key: 3,
      name: "RPA & AI",
    },
    {
      key: 4,
      name: "UI/UX Design",
    },
  ];
  let domains;
  if (type == "tech") {
    domains = TechDomains;
  } else {
    domains = NonTechDomains;
  }
  return (
    <div className="dark text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 mt-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Name
          </label>
          <input
            {...register("name")}
            disabled={loading}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // required
            name="name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="wrapper flex gap-2 justify-between">
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Email
              </label>
              <input
                {...register("email")}
                disabled={loading}
                type="mobile"
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Roll No.
              </label>
              <input
                {...register("roll")}
                type="mobile"
                disabled={loading}
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="roll"
              />
              {errors.roll && (
                <p className="text-red-500 text-sm">{errors.roll.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="wrapper flex gap-2 justify-between items-center">
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white "
              >
                Your Branch
              </label>
              <input
                {...register("branch")}
                disabled={loading}
                type="mobile"
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="branch"
              />
              {errors.branch && (
                <p className="text-red-500 text-sm">{errors.branch.message}</p>
              )}
            </div>
          </div>
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Year (1st/2nd/3rd/4th)
              </label>
              <input
                disabled={loading}
                {...register("year")}
                // type="mobile"
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="year"
              />
              {errors.year && (
                <p className="text-red-500 text-sm">{errors.year.message}</p>
              )}
            </div>
          </div>
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Course
              </label>
              <input
                disabled={loading}
                {...register("course")}
                type="mobile"
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="course"
              />
              {errors.course && (
                <p className="text-red-500 text-sm">{errors.course.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6 mt-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Your Resume Link (Google Drive)
          </label>
          <input
            {...register("cvLink")}
            type="cv"
            disabled={loading}
            id="cv"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            // name="cv"
          />
          {errors.cvLink && (
            <p className="text-red-500 text-sm">{errors.cvLink.message}</p>
          )}
        </div>

        <div className="wrapper flex gap-2 justify-between">
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Mobile No.
              </label>
              <input
                {...register("mobile")}
                type="mobile"
                disabled={loading}
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="mobile"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>
          </div>
          <div className="w-5/12">
            <div className="mb-6 mt-5">
              <label
                htmlFor="domain"
                disabled={loading}
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Select Your Domain
              </label>
              <select
                {...register("domain")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="domain"
                id=""
              >
                {domains.map((domain) => (
                  <option value={domain.name} className={domain.id}>
                    {domain.name}
                  </option>
                ))}
              </select>
              {errors.domain && (
                <p className="text-red-500 text-sm">{errors.domain.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6 mt-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Your Description and knowledge about the applied domain
          </label>
          <textarea
            {...register("bio")}
            disabled={loading}
            type="bio"
            id="bio"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="bio"
          />
          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="text-white disabled:bg-blue-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? (
            <RotatingLines
              visible={true}
              height="16"
              width="16"
              color="#ecf0f1"
              strokeColor="#ecf0f1"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Submit"
          )}
        </button>
        {/* {error && error} */}
      </form>
    </div>
  );
}
