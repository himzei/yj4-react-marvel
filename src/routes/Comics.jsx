import { useQuery } from "react-query";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import NoticeDisney from "../components/NoticeDisney";
import { apiGetComics } from "../api";

import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import TitleRotate from "../components/TitleRotate";
import InsiderSection from "../components/InsiderSection";
import SubPageMain from "../components/SubPageMain";
import TitleImage from "../components/TitleImage";

export default function Comics() {
  const CARD_WIDTH = 194;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;

  const { data } = useQuery(["getComics", { limit: 36 }], apiGetComics);

  return (
    <Layout>
      <NoticeDisney />
      {/* 타이틀 */}
      <SubPageMain
        imgUrl="https://assets-prd.ignimgs.com/2023/11/07/streamingwars-msmarvel-blogroll-1699390345828.jpg"
        title="Comics"
        description="Journey into the cosmic depths of the mighty Marvel Cinematic
          Universe!"
      />
      {/* 리스트 */}
      <section className="w-full flex justify-center">
        <div className="relative max-w-7xl w-full h-[350px]">
          <div className="w-full h-full absolute -top-8 left-0 right-0 bg-white flex p-2">
            {data?.data?.results?.slice(1, 7).map((item, index) => (
              <ListItem
                key={index}
                item={item}
                CARD_WIDTH={CARD_WIDTH}
                CARD_HEIGHT={CARD_HEIGHT}
                MARGIN={MARGIN}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 스트림 나우 */}
      <TitleImage
        Icon1={Facebook}
        Icon2={Instagram}
        Icon3={Twitter}
        title="a university of super heroes"
        description="All Your Favorite and More Start Streaming Now."
        imgUrl="https://wallpapers.com/images/hd/marvel-pictures-s9dmy7uuerr2xi7o.jpg"
      />
      {/* 리스트 36 */}
      <section className="w-full flex justify-center py-4">
        <div className="max-w-7xl w-full">
          <div className="px-4">
            <TitleRotate text="marvel movies" />
          </div>
          <div className="w-full p-2 flex flex-wrap gap-y-4">
            {data?.data?.results.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                CARD_WIDTH={CARD_WIDTH}
                CARD_HEIGHT={CARD_HEIGHT}
                MARGIN={MARGIN}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 마블인사이더 */}
      <InsiderSection />
    </Layout>
  );
}
