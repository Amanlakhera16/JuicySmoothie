
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/SupabaseClient"

const Create = (props) => {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [rating, setRating] = useState('')
    const [image, setImage] = useState('')
    const [formError, setFormError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !method || !rating) {
            setFormError('Please fill in all the fields correctly.')
            return
        }

        const { data, error } = await supabase
            .from('smoothies')
            .insert([{ title, method, rating:Number(rating), image:image||null }])
            .select()
            .single()

        if (error) {
            console.log(error)
            setFormError('Please fill in all the fields correctly.')
        }
        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/menu')
        }
    }



    return (
        <div className="page create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="method">Method:</label>
                <textarea
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                />

                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label htmlFor="img">Image of Recepie:</label>
                <input
                    type="text"
                    id="img"
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />

                <button className="btn">Create Smoothie Recipe</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default Create
