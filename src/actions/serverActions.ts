"use server";
import { revalidateTag } from "next/cache";
import { users } from "../../typing";

export async function getUsers() {
    const result = await fetch(
      "https://66537da91c6af63f4674d529.mockapi.io/api/V1/usersData/users",
      {
        cache: "no-cache",
        next: {
          tags: ["user"],
        },
      }
    );

    return result.json();
}
export const addUser = async (e: FormData) => {
    
    const name = e.get("name")?.toString();
    const role = e.get("role")?.toString();

    if (!name || !role) return;

    const newuser: users = {
      name,
      role,
    };
    await fetch(
      "https://66537da91c6af63f4674d529.mockapi.io/api/V1/usersData/users",
      {
        method: "POST",
        body: JSON.stringify(newuser),
        headers: { "Content-Type": "application/json" },
      },
    );
    revalidateTag("user");
  };