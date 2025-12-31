import "./HeroBg.css";
import ProgressBarDistance from "../../../features/filters/components/progressdistanceFilter/ProgressBarDistance";
import CategoryFilter from "../../../features/filters/components/categoryfilter/CategoryFilter";
import Rateminimal from "../../../features/filters/components/rate/Rateminimal";
import SerchTag from "../../../features/filters/searchTag/SerchTag";
import ResetBtn from "../../../features/filters/components/resetbtn/ResetBtn";
import Btmviewonmap from "../../../features/filters/components/Btmviewonmap/Btmviewonmap";
function HeroBg() {
  return (
    <section className="home">
      <div className="home-overlay">
        <div className="home-form">
          <h1>Find the best places around you</h1>
          <p>
            Discover cafés, restaurants, parks, hotels, and attractions tailored
            to your preferences
          </p>
          <form>
            <SerchTag />
            <div className="filters">
              <CategoryFilter />
              <Rateminimal />
            </div>
            <ProgressBarDistance />
            <div className="actions">
              <Btmviewonmap/>
              <ResetBtn/>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
export default HeroBg;
