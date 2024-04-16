import { useState } from "react"

export default function TweetNavigation() {
    const [tweetId, setTweetId] = useState<number>();
    return (
        <div>
            <div>
                <span>Id: </span>
                <textarea value={tweetId} id='id-to-go' name='to-go-id' rows='1' cols='6'/>
                <button>Ir</button>
                <button>Ir para próximo</button>
            </div>
            <div>
                <button> &lt; Anterior </button>
                <button> Próximo &gt; </button>
            </div>
        </div>
    )
}