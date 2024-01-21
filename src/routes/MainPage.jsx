import { useQuery } from "react-query";
import Button from "../components/Button";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import { apiGetComics } from "../api";
import ListCarousel from "../components/ListCarousel";

export default function MainPage() {
  const { data, isLoading } = useQuery("getComics", apiGetComics);

  return (
    <Layout>
      <section className="w-full flex justify-center">
        <MainSlide />
      </section>
      <section className="w-full">
        {/* 이미지 타이틀 */}
        <div className="relative w-full h-[500px] flex justify-end bg-main-dark">
          <div
            className="w-[55%] h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
            }}
          >
            <img
              src="https://wallpapers.com/images/high/marvel-pictures-2jubj1we7xoo8b6g.webp"
              className="w-full h-full object-cover"
              alt="title-img"
            />
          </div>

          <div className="absolute left-[50%] -translate-x-[50%] px-4 max-w-7xl w-full h-full flex flex-col justify-center space-y-8">
            <div>
              <div className="relative flex items-center uppercase w-80 h-20 text-white text-xl tracking-widest">
                <span className=" bg-main-dark">on sale 1/17</span>
                <div className="absolute -z-10 top-20 left-0 w-28 origin-bottom-left h-[1px] -rotate-[45deg] bg-[#c6a972]"></div>
              </div>
              <h2 className="text-4xl font-bold text-white uppercase py-2">
                New on Marvel Unlimited
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <Button type="print subscriptions" outline="outline" />
          </div>
        </div>
        {/* 리스트 */}
        <ListCarousel lists={data?.data?.results} isLoading={isLoading} />
      </section>
    </Layout>
  );
}
