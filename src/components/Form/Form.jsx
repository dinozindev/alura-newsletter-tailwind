import Input from "../Input/Input";

const Form = ({onSubmit}) => {
    const safeSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        const name = e.target[0].value;
        const email = e.target[1].value;
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full gap-10 -mt-20 mx-5">
        <Input required type="text" placeholder="Insira seu nome..." />
        <Input required type="text" placeholder="Insira seu email..." />
        <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none">Seguir</button>
    </form>
}

export default Form;