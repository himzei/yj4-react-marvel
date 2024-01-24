import { useQuery } from "react-query";
import { apiGetCharacters } from "../api";
import Layout from "../components/Layout";
import NoticeDisney from "../components/NoticeDisney";
import SubPageMain from "../components/SubPageMain";
import TitleRotate from "../components/TitleRotate";
import InsiderSection from "../components/InsiderSection";
import CharacterItem from "../components/CharacterItem";

export default function Characters() {
  const { data } = useQuery(["getCharacters", { limit: 36 }], apiGetCharacters);

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
              <CharacterItem item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      {/* 마블인사이더 */}
      <InsiderSection />
    </Layout>
  );
}
