import { useState } from "react";

export default function TextDisplay() {
    const [tweet, setTweet] = useState<string>('Lorem ipsum dolor...');
    return (
        <div>
            <p>Tweet:</p>
            <textarea id='current-tweet' name='tweet-displayer' rows='10' cols='60' readOnly value={tweet} />
        </div>
    )
}