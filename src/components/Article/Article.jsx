const Article = ({ title, text, tags, image, alt }) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center gap-2 sm:hover:shadow-gray-500 sm:hover:dark:shadow-black sm:hover:shadow-lg">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full sm:flex justify-end gap-2 pr-5 hidden">
            {
                tags.map((tag) => <span className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 dark:text-gray-300 font-bold text-xs uppercase hover:bg-alura-200 hover:scale-110" key={tag}>{tag}</span> )
            }
        </div>
        <div className="gap-1 grid">
            {
                text.map((content, index) => <p className="text-alura-200 dark:text-gray-300" key={index}>{content}</p>)
            }
        </div>
        {image && <img className="sm:p-4" src={image}/> }
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>
    
}

export default Article;