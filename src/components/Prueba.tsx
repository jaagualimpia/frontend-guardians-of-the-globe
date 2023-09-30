import { useParams } from "react-router-dom"

export const Prueba = () => {
    const { id } = useParams()
    
    return (
        <div>
            <h3>{id}</h3>
        </div>
    )
} 