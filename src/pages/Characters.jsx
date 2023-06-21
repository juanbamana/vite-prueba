import { useEffect, useState } from "react"
import { fetchCharacters } from "../api/fetchCharacters"
export const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        const getCharacters = async () => {
            const data = await fetchCharacters()
            setCharacters(data)

        }
        getCharacters()

    }, [])



    return (
        <div>

            {characters ? (

<ul>
    {characters.map((char) =>(

<li key={char.id}>


<img src={char.image} alt={char.name} height='200px' width='200'/>
<div>{char.firstName}{char.year}{" "}</div>


</li>
    ))}
</ul>

            ) : (<p>Cargando Personajes</p>)}


        </div>
    )
}
