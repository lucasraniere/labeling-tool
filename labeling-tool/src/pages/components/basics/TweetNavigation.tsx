export default function TweetNavigation() {
    return (
        <div>
            <div>
                <span>Id: </span>
                <textarea id='id-to-go' name='to-go-id' rows='1' cols='6'></textarea>
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