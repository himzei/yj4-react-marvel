import Button from "./Button";

export default function InsiderSection() {
  return (
    <section className="w-full bg-black flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-2 gap-x-32">
        {/* 1 */}
        <div className="relative w-full h-80 bg-red-500">
          <img
            className="h-full w-full object-cover"
            src="https://images.bauerhosting.com/legacy/media/61f3/e8d0/05e8/5530/559b/af43/infinity-war-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
            alt="marvel_insider"
          />
          <div className="absolute inset-0 w-full h-full bg-black/80 flex justify-center items-center">
            <img
              className="w-1/2"
              src="https://cdn.marvel.com/content/u/open-html-assets/insider-sellpage/insider-logo.87df956b.png"
              alt="marvel_insider"
            />
          </div>
        </div>
        {/* 2 */}
        <div className="w-full h-80 flex flex-col justify-center items-center text-white space-y-8">
          <div className="text-center space-y-2">
            <h4 className="uppercase text-red-600">marvel insider</h4>
            <h2 className="text-white text-2xl">Watch, Earn, Redeem!</h2>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <Button type="Join now" />
        </div>
      </div>
    </section>
  );
}
