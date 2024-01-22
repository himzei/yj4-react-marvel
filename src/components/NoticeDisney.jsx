import Disney from "../assets/png/disney-logo-white.png";

export default function NoticeDisney() {
  return (
    <div className="w-full h-10 bg-main-dark border-t border-gray-700 flex justify-center items-center uppercase text-gray-300 text-sm space-x-2">
      <span>Stream echo on</span>{" "}
      <img src={Disney} alt="disney" className="h-6" />
    </div>
  );
}
