export function Card({ name, description, interests }) {
  return (
    <div style={style.card}>
      <div>
        <h1>{name}</h1>
        <div style={style.description}>{description}</div>
        <h2>Interests</h2>
        <div>
          {interests.map((el, idx) => (
            <li
              key={idx}
              style={{
                listStyleType: "none",
              }}
            >
              {el}
            </li>
          ))}
        </div>
        <div style={style.linkDiv}>
          <a style={style.link}>LinkedIn</a>
          <a style={style.link}>Twitter</a>
        </div>
      </div>
    </div>
  );
}

const style = {
  card: {
    border: "2px solid #ddd",
    borderRadius: "10px",
    marginLeft: "200px",
    padding: "20px",
    width: "400px",
    marginTop: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  },
  link: {
    backgroundColor: "#007FFF",
    padding: "0.6rem",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
  },
  linkDiv: {
    width: "200px",
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "space-around",
  },
  description: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
};