function Eventos(){
    
    function meuEvento(){
        console.log('Opa, fui ativado!')
    }
    
    return(
        <div>
            <p>Clique para disparar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos