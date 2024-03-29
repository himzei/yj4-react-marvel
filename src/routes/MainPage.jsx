import { useInfiniteQuery, useQuery } from "react-query";
import Button from "../components/Button";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import { apiGetCharacters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import InsiderSection from "../components/InsiderSection";
import { PropagateLoader } from "react-spinners";
import HypeImg from "../assets/svg/titleHype.svg";
import TitleImage from "../components/TitleImage";
import Layout7 from "../components/Layout7";
import { Link } from "react-router-dom";

export default function MainPage() {
  let comics;
  const { data, isLoading } = useQuery(
    ["getComics", { limit: 100 }],
    apiGetComics
  );
  if (!isLoading) {
    comics = data?.data?.results;
  }

  const {
    data: dataEvents,
    isLoading: isLoadingEvents,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery(
    "getEvents",
    ({ pageParam = 0 }) => apiGetEvents({ pageParam }),
    {
      staleTime: Infinity,
      getNextPageParam: (lastPage, pages) => {
        const limit = lastPage.data.limit;
        const count = lastPage.data.count;
        if (count === limit) {
          const nextPage = pages.length;
          return nextPage;
        } else {
          return null;
        }
      },
    }
  );

  const { data: dataCharacters, isLoading: isLoadingCharacters } = useQuery(
    ["getCharacters", { limit: 30 }],
    apiGetCharacters
  );

  return (
    <Layout>
      <section className="w-full flex justify-center">
        <MainSlide />
      </section>

      {/* 코믹스 */}
      <section className="w-full bg-white">
        {/* 이미지 타이틀 */}
        <div className="relative w-full h-[500px] flex justify-end bg-main-dark  b">
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
              <TitleRotate text="on sale 1/17" color="dark" />
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

        <ListCarousel lists={comics} isLoading={isLoading} />
      </section>

      {/* 이벤트 */}
      <section className="w-full flex justify-center bg-white">
        <div className="max-w-7xl w-full px-4 grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-x-16">
          {/* 왼쪽 : the latest */}
          <div className="w-full">
            <TitleRotate text="the latest" />
            {isLoadingEvents ? (
              <div className="w-full py-32 flex justify-center">
                <PropagateLoader />
              </div>
            ) : (
              <div className="gap-8">
                {dataEvents?.pages.map((page) =>
                  page?.data?.results?.map((item, index) => (
                    <Link to={`/events/${item.id}`} key={index}>
                      <div className="w-full h-64 border-b-2 pb-4 mb-4 flex space-x-8 group cursor-pointer">
                        {/* image */}
                        <div className="w-1/2 h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                            alt="event_image"
                          />
                        </div>
                        {/* description */}
                        <div className="w-1/2 h-full">
                          <h2 className="uppercase font-semibold group-hover:text-red-600 duration-500">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                          <h3 className="italic text-sm">
                            {item.start?.substr(0, 10)}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
            {hasNextPage && (
              <div className="pb-4 flex justify-center">
                <Button
                  isFetching={isFetching}
                  type="load more"
                  outline="outline"
                  onClick={() => fetchNextPage()}
                />
              </div>
            )}
          </div>
          {/* 오른쪽 : the Hype box */}
          <div className="w-full py-16">
            {/* top svg 이미지 */}
            <div className="relative w-full mb-8">
              <img src={HypeImg} alt="hype_image" />
              <div className="h-20 text-center w-full flex flex-col items-center">
                <h2 className="text-2xl font-semibold uppercase -translate-y-2">
                  The Hype box
                </h2>
                <p className="w-2/3 text-xs">
                  Can’t-miss news and updates from across the Marvel Universe!
                </p>
              </div>
            </div>
            {/* 작은 아이텐 */}
            <div className="w-full flex flex-col px-4 divide-y ">
              {/* 아이템 */}
              {dataEvents?.pages[0]?.data?.results
                ?.slice(5, 10)
                .map((item, index) => (
                  <div
                    key={index}
                    className="w-full py-8 flex group cursor-pointer "
                  >
                    <div className="w-[40%] aspect-auto">
                      <img
                        src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                        alt="event_image"
                        className="w-[90%] aspect-video object-cover"
                      />
                    </div>
                    <div className="w-[60%] px-4 space-y-2">
                      <h2 className="font-semibold uppercase group-hover:text-red-600 duration-500">
                        {item.title}
                      </h2>
                      <p className="text-xs">
                        {item.description.substr(0, 80)}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            {/* bottom svg 이미지 */}
            <div className="w-full flex justify-end">
              <img src={HypeImg} className=" rotate-180" alt="hype_image" />
            </div>
          </div>
        </div>
      </section>

      {/* 캐릭터스 */}
      <TitleImage
        title="new comics this week"
        description="
				Check out the newest Marvel comics coming out this week!"
        imgUrl="https://wallpapers.com/images/hd/marvel-pictures-s9dmy7uuerr2xi7o.jpg"
      />
      <Layout7>
        <ListCarousel
          lists={dataCharacters?.data?.results}
          isLoading={isLoadingCharacters}
          characters="characters"
        />
      </Layout7>

      {/* 마블 인사이더 */}
      <InsiderSection />
    </Layout>
  );
}
