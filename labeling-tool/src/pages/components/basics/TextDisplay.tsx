export default function TextDisplay() {
    return (
        <div>
        <p>Tweet:</p>
        <textarea readonly id='current-tweet' name='tweet-displayer' rows='10' cols='60'></textarea>
        </div>
    )
}