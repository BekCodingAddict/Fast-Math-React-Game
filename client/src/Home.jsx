import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-start bg-[#ede7e9]">
      <div className="justify-star relativet xsm:mt-[14rem] mt-[8rem] flex h-full flex-col items-center">
        <div className="bg-bg-math xsm:h-[300px] xsm:w-[350px] h-[250px] w-[250px] bg-contain bg-no-repeat md:h-[400px] md:w-[450px] lg:h-[600px] lg:w-[650px]"></div>
        <p className="bottom-[25rem] font-semibold text-green-900 sm:absolute sm:bottom-[25rem] sm:text-xl md:absolute md:bottom-[28rem] lg:text-[1.6rem]">
          Improve your math speed!
        </p>
        <h1 className="mb-4 mt-4 text-[4rem] font-medium text-green-900 md:absolute md:bottom-[20rem]">
          Fast Math
        </h1>
        <Link
          to="start"
          className="mt-4 rounded-full bg-green-700 px-28 py-4 text-xl font-semibold uppercase text-stone-200 md:absolute md:bottom-[15rem]"
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Home;
