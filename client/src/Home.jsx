import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-start bg-[#ede7e9]">
      <div className="justify-star relativet xsm:mt-[14rem] mt-[8rem] flex h-full flex-col items-center">
        <div className="bg-bg-math xsm:h-[300px] xsm:w-[350px] h-[250px] w-[250px] bg-contain bg-no-repeat md:h-[450px] md:w-[500px] lg:h-[700px] lg:w-[750px]"></div>
        <p className="text-[16px] font-semibold text-green-900 md:text-[20px]">
          Improve your math speed!
        </p>
        <h1 className="mb-4 mt-4 text-[4rem] font-medium text-green-900">
          Fast Math
        </h1>
        <Link
          to="start"
          className="mt-4 rounded-full bg-green-700 px-28 py-4 text-xl font-semibold uppercase text-stone-200 md:text-[1.50rem]"
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Home;
