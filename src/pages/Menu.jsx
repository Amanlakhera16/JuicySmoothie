import supabase from "../config/SupabaseClient"
import { useState } from "react"
import Smoothies from "../components/Smoothies"
import { useEffect } from "react"
function Menu() {
  const [fethError, setFethError] = useState(null)
  const [smoothies, setSmoothies] = useState([])
  const [orderBy, setOrderBy] = useState('created_at')

  useEffect(() => {
    const fetchSmothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .order('rating',{ascending:false})

      if (error) {
        setFethError("Could Not Fetch Smothies")
        setSmoothies(null)
        console.log(error)
      }
      if (data) {
        setSmoothies(data)
        setFethError(null)
      }
    }
    fetchSmothies()
  }, [])

  const onDelete = (id) => {
    setSmoothies((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }


  return (
    <div className="menu">
      <h1>Our Menu</h1>
      {fethError && (<p>Unable to fetch Smothies</p>)}
      {smoothies && (
        <div className="smoothies">
          {smoothies.map(smoothie => (
            <Smoothies key={smoothie.id} smoothie={smoothie}
              onDelete={onDelete}
            />
          ))
          }
        </div>)}
    </div>
  )
}

export default Menu
