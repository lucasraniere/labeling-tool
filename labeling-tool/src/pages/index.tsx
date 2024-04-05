import LabelingArea from "./components/LabelingArea";
import TweetDisplayer from "./components/TweetDisplayer";


export default function Home() {
    return (
      <div>
        {/* <h1 className="font-bold text-xl text-center m-1 p-2">Tweet Polarization Labeling Tool</h1> */}
        <TweetDisplayer />
        <LabelingArea />
      </div>
    )
}
