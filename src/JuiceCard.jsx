import { useState } from "react"

function JuiceCards() {
  const [juiceName, setJuiceName] = useState("")
  const [juices, setJuices] = useState([])

  const addJuice = () => {
    if (juiceName.trim() === "") return

    setJuices([...juices, juiceName])
    setJuiceName("")
  }

  return (
    <div className="juice-container">
      <h2>🍹 Add Your Favorite Juice</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter juice name"
          value={juiceName}
          onChange={(e) => setJuiceName(e.target.value)}
        />
        <button onClick={addJuice}>Add</button>
      </div>

      <div className="card-grid">
        {juices.map((juice, index) => (
          <div className="juice-card" key={index}>
            {juice}
          </div>
        ))}
      </div>
    </div>
  )
}

export default JuiceCards
