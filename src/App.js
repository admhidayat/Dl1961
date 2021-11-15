import UserForm from "./components/UserForm";
import Intro from "./components/Intro";
import SwipeableViews from "react-swipeable-views";
import "./components/banner.css";
import "./App.css";
import Title from "./components/Title";
import Banner from "./components/Banner";
import FitSelection from "./components/FitSelection";
import InseameSelection from "./components/InseameSelection";
import Wash from "./components/Wash";
import Fabric from "./components/Fabric";
import Hardware from "./components/Hardware";
import Stitching from "./components/Stitching";
import AdditionalNotes from "./components/AdditionalNotes";
import SubmitForm from "./components/SubmitForm";
import HemSelection from "./components/Hem";
const styles = {
 
  slide1: {
    height: "100vh",
  },
  slide2: {
    height: "100vh",
  },
  slide3: {
    height: "100vh",
    width: "100vw"
  },
};

function App() {
  return (
    <div>
      <SwipeableViews
        interval={100}
        axis="y"
        enableMouseEvents
        containerStyle={{
          width: "100%",
          height: "100vh",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div style={Object.assign({}, styles.slide3)}>
          <Intro />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <Title />
        </div>
        {/* <div style={Object.assign({}, styles.slide3)}>
          <Banner />
        </div> */}
        <div style={Object.assign({}, styles.slide3)}>
          <UserForm />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <FitSelection />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <InseameSelection />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <Wash />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <Fabric />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <Hardware />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <Stitching />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <HemSelection />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <AdditionalNotes />
        </div>
        <div style={Object.assign({}, styles.slide3)}>
          <SubmitForm />
        </div>
      </SwipeableViews>
    </div>
  );
}

export default App;
