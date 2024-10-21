import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMAteriaA] = useState(0);
    const [materiaB, setMAteriaB] = useState(0);
    const [materiaC, setMAteriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nomne mudou");
    }, [nome]);

    const alteraNome = (evento) => {       
            // setNome(evento.target.value);
            setNome(estadoAnterior => {
            //estadoAnterior = valornovo
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    } 

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key="teste">{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMAteriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMAteriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMAteriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;