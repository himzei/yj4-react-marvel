import Layout from "../components/Layout";
import NotImage from "../assets/png/404.png";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-end md:h-[calc(100vh-420px)] px-4">
          {/* left */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center space-y-8">
            <h1 className="uppercase text-4xl font-bold">404 PAGE not found</h1>
            <h2 className=" text-lg font-semibold">
              HYDRA has stolen this page from the S.H.I.E.L.D database!
            </h2>
            <p>
              Check that you typed the address correctly, go back to your
              previous page or try using our site search to find something
              specific.
            </p>
          </div>
          {/* right */}
          <div className="w-full md:w-1/2 h-[95%] flex justify-center items-end overflow-hidden">
            <img
              className="h-full object-cover animate-scaling"
              src={NotImage}
              alt="scaredimage"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
