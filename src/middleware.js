import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token?.user,
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
