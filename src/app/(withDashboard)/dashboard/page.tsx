import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      {
        session?.user && (
          <>
          <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
          <h1 className="text-4xl text-center mt-10">User Email: {session?.user?.email}</h1>
          {
            session?.user?.image && (
              <Image
            src={session?.user?.image}
           width={100}
           height={100}
           alt="user image"
           className="text-4xl text-center mt-10 mx-auto"
          />
            )
          }
          </>
        )
      }
    </div>
  );
};

export default DashboardPage;
