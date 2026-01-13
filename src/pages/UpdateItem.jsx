import { useState, useEffect } from "react";
import supabase from "../config/SupabaseClient"
import { useNavigate, useParams } from 'react-router-dom';


function UpdateItem() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [image, setImage] = useState('')
  const [formError, setFormError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(!id){
      return
    }
    const fetchItem = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select("title,method,rating,image")
        .eq('id', Number(id))
        .single()

      if (error) {
        navigate("/", { replace: true })
      }
      if (data) {
        console.log(data)

        setTitle(data.title)
        setImage(data.image)
        setMethod(data.method)
        setRating(data.rating)
      }
    }
    fetchItem();

  }, [id, navigate])

  const handleUpdate = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating) {
      setFormError('Please Update the required fields.')
      return
    }

    const { data, error } = await supabase
      .from('smoothies')
      .update([{ title, method, rating, image }])
      .eq('id', Number(id))
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
    <div className="update-wrapper">
      <div className="page create update-page">
        <h2 className="update-title">Update Smoothie</h2>

        <form onSubmit={handleUpdate}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="method">Method</label>
          <textarea
            id="method"
            rows="4"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          />

          <label htmlFor="rating">Rating (1–5)</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            id="img"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {image && (
            <div className="image-preview">
              <img src={image} alt="Preview" />
            </div>
          )}

          <button className="btn">Update Smoothie Recipe</button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  )

}

export default UpdateItem