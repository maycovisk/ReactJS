import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca}-{ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {  /*propTypes em minusculo aqui*/
    marca: PropTypes.string.isRequired, /* PropTypes(valida o tipo) isRequired(obrigatório) */
    ano_lancamento: PropTypes.number,
}

Item.defaultProps={
    marca:'Faltou a marca',
    ano_lancamento: 0,
}

export default Item