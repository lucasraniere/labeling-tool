export default function AnnotationButtons() {
    let contador = 0

    function incrementar() {
        console.log(contador++)
    }

    function decrementar() {
        console.log(contador--)
    }

    return(
        <div>
            <button onClick={incrementar}>Anotar</button>
            <button onClick={decrementar}>Anotar &gt;</button>
        </div>
    )
}