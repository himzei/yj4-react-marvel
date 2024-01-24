import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { apiGetCharacters, apiGetComics, apiGetCreators } from "../api";
import { ClipLoader } from "react-spinners";
import Button from "../components/Button";
import Layout7 from "../components/Layout7";
import TitleRotate from "../components/TitleRotate";
import CharacterItem from "../components/CharacterItem";
import CreatorItem from "../components/CreatorItem";
import PrevNext from "../components/PrevNext";

export default function Detail() {
  let item;
  let characters;
  let creators;
  let comics;

  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ["getComics", { limit: 100 }],
    apiGetComics
  );

  if (!isLoading) {
    comics = data?.data?.results;
  }

  item = comics?.find((comic) => comic.id === parseInt(id));

  const index = comics?.indexOf(item);
  const next = index > 0 ? comics[index - 1] : null;
  const prev = index < comics?.length - 1 ? comics[index + 1] : null;

  const { data: dataCharacters, isLoading: isLoadingCharacters } = useQuery(
    ["getCharacters", { limit: 6 }],
    apiGetCharacters
  );
  if (!isLoadingCharacters) {
    characters = dataCharacters?.data?.results;
  }

  const { data: dataCreators, isLoading: isLoadingCreators } = useQuery(
    ["getCreators"],
    () => apiGetCreators({ limit: 6 })
  );

  if (!isLoadingCreators) {
    creators = dataCreators?.data?.results;
  }

  return (
    <Layout>
      <PrevNext prev={prev} next={next} />
      <div
        className="relative w-full h-[800px] bg-main-dark flex justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            !isLoading &&
            `url('${item?.thumbnail?.path}.${item?.thumbnail?.extension}')`,
        }}
      >
        {isLoading ? (
          <div className="w-full flex items-center justify-center">
            <ClipLoader color="gray" />
          </div>
        ) : (
          <>
            <div className=" z-10 max-w-7xl w-full h-full grid grid-cols-[1fr_2fr] gap-16">
              <div className="w-full h-full flex items-start ">
                <img
                  className="w-[90%] aspect-[4/6] pt-8 object-cover"
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt="comics_detail_image"
                />
              </div>
              <div className="w-full h-full py-16 flex flex-col  text-white space-y-8 ">
                <h1 className="text-2xl font-bold w-[80%]">{item.title}</h1>
                <div>
                  <h2 className="text-xl font-semibold">Published</h2>
                  <p>{item.modified.substr(0, 10)}</p>
                </div>
                <div className="w-full flex">
                  {/* 1 */}
                  <div className="w-1/2">
                    <h2 className="text-xl font-semibold">Writer</h2>
                    <p>{item.creators?.items[0]?.name || "Annonymous"}</p>
                  </div>
                  {/* 2 */}
                  <div className="w-1/2">
                    <h2 className="text-xl font-semibold">Penciler:</h2>
                    <p>{item.creators?.items[1]?.name || "Annonymous"}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Cover Artists</h2>
                  <ul className="flex flex-wrap space-x-4 ">
                    {item.creators?.items.length
                      ? item.creators?.items?.map((creator, index) => (
                          <li key={index}>{creator.name}</li>
                        ))
                      : "Annonymous"}
                  </ul>
                </div>
                <p className="w-2/3">
                  {item.description ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illo laborum officiis voluptate minus at voluptates deleniti, fugit enim nesciunt?"}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full bg-main-dark/90" />
          </>
        )}
      </div>
      <div className="relative w-full h-[400px] bg-main-dark flex justify-center">
        <div className="absolute left-0 -top-64 w-full h-full flex justify-center items-center">
          <div className="max-w-7xl w-full h-72 bg-white grid grid-cols-[1fr_2fr] p-8 gap-16">
            {/* 왼쪽 */}
            <div className="flex flex-col justify-start space-y-8">
              <div className="w-full space-y-0">
                <h2 className="uppercase text-2xl font-bold ">Print issue</h2>
                <p className="text-xs">in Stores Now</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-400 py-2 px-2"
                  placeholder="Ener Zip Code"
                />
              </div>
              <Button type="find a store" outline="outline" />
            </div>
            {/* 오른쪽 */}
            <div>
              <div className="w-full space-y-0">
                <h2 className="uppercase text-2xl font-bold ">Detail issue</h2>
                <p className="text-xs">in Stores Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl text-white w-full flex flex-col justify-end py-16">
          <h2 className=" font-bold text-3xl uppercase mb-8">More Details</h2>
          <div className="w-full grid grid-cols-3">
            {Array(3)
              .fill("")
              .map((_, i) => (
                <div key={i} className="text-sm">
                  <h3 className="font-semibold text-base uppercase py-4">
                    EXTENDED CREDITS AND INFO
                  </h3>
                  <div className="space-y-1">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* character */}
      <Layout7>
        <TitleRotate text="characters" />
        <div className="grid grid-cols-6 gap-4">
          {characters?.map((item, index) => (
            <CharacterItem item={item} key={index} />
          ))}
        </div>
      </Layout7>
      {/* creator */}
      <Layout7>
        <TitleRotate text="creators" />
        <div className="grid grid-cols-6 gap-4">
          {creators?.map((item, index) => (
            <CreatorItem key={index} item={item} />
          ))}
        </div>
      </Layout7>
    </Layout>
  );
}
