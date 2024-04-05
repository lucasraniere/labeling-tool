import ExportFile from "./basics/ExportFile";
import TextDisplay from "./basics/TextDisplay";
import TweetNavigation from "./basics/TweetNavigation";

export default function TweetDisplayer() {
    return (
        <div className={`flex flex-col bg-red-500
                        w-1/2 float-left p-2 h-screen
                        justify-around items
                        `}>
            <TextDisplay />
            <TweetNavigation />
            <ExportFile />
        </div>
    )
}