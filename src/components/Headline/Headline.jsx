

export default function Headline ({label, titulo, descricao}) {
    return (
        <div style={{ 
            textAlign: "center"
            }}>

            <p style={{ 
                fontSize: "13px", 
                color: "#f50c0c", 
                fontWeight: 600, 
                letterSpacing: "0.1em", 
                textTransform: "uppercase", 
                marginBottom: "0.5rem" 
                }}>

            {label}
            </p>
            <h2 style={{ 
                fontSize: "2rem", 
                fontWeight: 700, 
                color: "#ffffff", 
                margin: "0 0 0.5rem" 
                }}>

            {titulo}
            </h2>
            <p style={{ 
                fontSize: "15px", 
                color: "#888", 
                margin: 0 }}>
            {descricao}
            </p>
      </div>
    )
}


