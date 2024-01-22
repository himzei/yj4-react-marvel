import { useQuery } from "react-query";
import { apiGetCharacters } from "../api";
import Layout from "../components/Layout";
import NoticeDisney from "../components/NoticeDisney";
import SubPageMain from "../components/SubPageMain";
import TitleRotate from "../components/TitleRotate";
import InsiderSection from "../components/InsiderSection";

export default function Characters() {
  const { data, isLoading } = useQuery(
    ["getCharacters", { limit: 36 }],
    apiGetCharacters
  );
  console.log(data, isLoading);

  return (
    <Layout>
      <NoticeDisney />
      <SubPageMain
        imgUrl="https://images.bauerhosting.com/legacy/media/61f3/e8d0/05e8/5530/559b/af43/infinity-war-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
        title="marvel characters"
        description="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
      <section className="w-full flex justify-center py-4">
        <div className="max-w-7xl w-full">
          <div className="px-4">
            <TitleRotate text="featured characters" />
          </div>
          {/* list 36 */}
          <div className="w-full grid grid-cols-6 grid-rows-6 gap-4 px-4 my-2">
            {data?.data?.results.map((item, index) => (
              <div className="h-[340px]" key={index}>
                <div
                  className="w-full h-full flex flex-col group cursor-pointer"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)",
                  }}
                >
                  <div className="w-full h-[60%] overflow-hidden">
                    <img
                      className="w-full h-full duration-500 object-cover group-hover:scale-110"
                      src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                      alt="character_image"
                    />
                  </div>
                  <div className="relative w-full h-[40%] bg-red-500 flex items-end">
                    <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 text-white">
                      <h2>{item?.name}</h2>
                      <p className="text-xs text-gray-300 duration-500 group-hover:text-gray-100">
                        {item?.description.substr(0, 46)}
                      </p>
                    </div>
                    <div className="w-full h-[95%] duration-500 group-hover:h-0 bg-main-dark"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 마블인사이더 */}
      <InsiderSection />
    </Layout>
  );
}
