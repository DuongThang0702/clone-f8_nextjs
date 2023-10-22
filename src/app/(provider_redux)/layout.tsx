import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ReduxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>{children}</Providers>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
