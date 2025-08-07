"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterInputs>();
  const router = useRouter();

  const onSubmit = async (data: RegisterInputs) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Registration successful");
      router.push("/login");
    } else {
      const err = await res.json();
      alert(err.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <input {...register("username")} placeholder="Username" required />
      <input type="email" {...register("email")} placeholder="Email" required />
      <input type="password" {...register("password")} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}
