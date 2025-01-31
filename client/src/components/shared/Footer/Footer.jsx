import { Link } from "react-router-dom";

const date = new Date()
export default function Footer() {
  return (
    <>
      <footer className="py-3 text-gray-400 bg-gray-800 font-poppins">
        <div className="container mx-auto px-4 flex items-center justify-between gap-1 flex-col md:flex-row">
          <p className="text-[14px]">All Right Reserved - {date.getFullYear()}</p>
          <div >
            <p className="text-[14px]">
              &copy;{" "}
              <Link
                target="_blank"
                to="https://towhidmorol.vercel.app"
                className=" hover:text-blue-300 duration-200 transition"
              >
                Towhid Morol
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
