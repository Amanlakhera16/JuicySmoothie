import { Link } from "react-router-dom"
import Create from "./Create"
function Home() {




  return (
    <div className="home">
      <Create />
      <Link to="/menu">
        <button>View Menu</button>
      </Link>
    </div>
  )
}

export default Home
