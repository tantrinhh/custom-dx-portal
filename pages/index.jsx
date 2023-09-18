import LayoutPage from "./Components/Layout/Layout";
import Support from "./Components/Home/Support";
import Digital_conversion from "./Components/Home/Digital_conversion";
import Story from "./Components/Home/Story";
import Problem from "./Components/Home/Problem";
import Arrays from "./Components/Home/Arrays";
import Welcome_wrapper from "./Components/Home/Welcome_wrapper";

export default function Home() {
  return (
    <>
      <LayoutPage>
        <div className="page-wraper">
          <div className="page-content">
            <Welcome_wrapper />
            <Support />
            <Digital_conversion />

            <Story />

            <Problem />

            <Arrays />
          </div>
          <button className="scroltop">
            <span className="fa fa-angle-up  relative" id="btn-vibrate" />
          </button>
        </div>
      </LayoutPage>
    </>
  );
}
