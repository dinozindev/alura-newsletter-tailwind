
const Form = ({onSubmit}) => {
    const safeSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        const name = e.target[0].value;
        const email = e.target[1].value;
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full gap-10 -mt-20 mx-5">
        <input required className="alura-input" type="text" placeholder="Insira seu nome..." />
        <input required className="alura-input" type="text" placeholder="Insira seu email..." />
        <button type="submit" className="alura-button">Seguir</button>
    </form>
}

export default Form;