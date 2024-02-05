import { useState } from "react";
import Layout from "../components/Layout";
import { useMutation } from "react-query";
import { apiPostGoogleEmail } from "../api";
import { useForm } from "react-hook-form";

export default function Email() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isLoading, mutate, data } = useMutation(apiPostGoogleEmail, {
    onSuccess: () => {
      if (data?.result === "success") {
        setSubmitted(true);
        reset();
      }
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full py-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-80"
          >
            <input
              type="text"
              placeholder="name"
              {...register("name", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "최소 3글자",
                },
              })}
              className="border py-2 px-2"
            />
            <span className="text-red-500 text-sm">
              {errors?.name?.message}
            </span>

            <input
              type="text"
              placeholder="email"
              {...register("email", {
                required: "이메일을 입력해 주세요",
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "올바른 이에일을 입력해 줏요 ",
                },
              })}
              className="border py-2 px-2"
            />
            <span className="text-red-500 text-sm">
              {errors?.email?.message}
            </span>
            <input
              type="text"
              placeholder="message"
              {...register("message")}
              className="border py-2 px-2"
            />
            <button
              disabled={isLoading ? true : false}
              className="bg-red-500 text-white py-2"
              type="submit"
            >
              {isLoading ? "로딩중..." : "전송"}
            </button>
            {submitted && <div className="text-red-500">성공</div>}
          </form>
        </div>
      </div>
    </Layout>
  );
}
