import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const AuthGuard = ({ children }: any) => {
  //const cookie = Cookies.get("token");
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    if (pathname === "/") router.push("/afiliate");

  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
