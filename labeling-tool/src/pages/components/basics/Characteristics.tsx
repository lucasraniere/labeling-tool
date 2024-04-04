export default function Characteristics(props: any) {
    return (
        <div className="columns-3">
            <input type="checkbox" name="highlight" value="Destaque" />
            <label for="Destaque"> {props.children} </label>
            <textarea name="highlight-comment" rows={1} cols={40}></textarea>
        </div>
    )
}