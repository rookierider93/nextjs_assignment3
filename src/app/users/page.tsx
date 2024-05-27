import { addUser, getUsers } from "@/actions/serverActions";
export interface users {
  id?: number;
  name?: string;
  role?: string;
}

export default async function users() {
  const userslist: users[] = await getUsers();

  return (
    <>
      <h1>Add User</h1>
      <form
        action={addUser}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter User Name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          name="role"
          placeholder="Enter Role..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add User
        </button>
      </form>
      <h1 className="font-bold p-5">User List</h1>
      <div className="flex flex-wrap gap-5 min-w-7xl">
        {userslist.map((user) => (
          <div key={user.id} className="p-5 shadow">
            <p>Name : {user.name}</p>
            <p>Department : {user.role}</p>
          </div>
        ))}
      </div>
    </>
  );
}
