import {MoonIcon, SunIcon} from "@heroicons/react/24/solid"

const ToggleTheme = () => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const pageClass = document.documentElement.classList

    useEffect(() => {
        systemPreference && pageClass.add('dark');
    })
    const toggle = () => {
        pageClass.toggle('dark');
    }
    return <div className="hidden sm:block">
        <MoonIcon className="block h-8 text-gray-100 dark:hidden cursor-pointer" onClick={toggle} />
        <SunIcon className="hidden h-8 text-gray-100 dark:block cursor-pointer"  onClick={toggle} />
    </div>
}

export default ToggleTheme;