export default function CardPrecio(props) {
    const { titulo, descripcion, lista, items, precio } = props
    return (
        <div className="col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    <h2 className="card-title">{titulo}</h2>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">{lista}</p>
                    <ul className="card-text">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="mt-auto">
                        <p className="card-text text-end"> <strong className='fs-4'>{precio}</strong>(IVA incluido)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
