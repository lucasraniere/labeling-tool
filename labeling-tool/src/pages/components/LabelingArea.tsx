import AnnotationButtons from "./basics/AnnotationButtons";
import Characteristics from "./basics/Characteristics";

export default function LabelingArea() {
    return (
        <div className={`flex flex-col bg-green-500
                        w-1/2 float-right p-2 h-screen
                        justify-around
                        `}>
            <Characteristics>Linguagem Tóxica</Characteristics>
            <Characteristics>Discurso de Ódio</Characteristics>
            <Characteristics>Linguagem Emotiva</Characteristics>
            <Characteristics>Conspiração</Characteristics>
            <Characteristics>Desumanização</Characteristics>
            <Characteristics>Imputação de crime</Characteristics>
            <Characteristics>Linguagem divisiva</Characteristics>
            <Characteristics>Outros</Characteristics>
            <AnnotationButtons />
        </div>
    )
}