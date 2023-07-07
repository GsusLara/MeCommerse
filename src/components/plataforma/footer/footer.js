export default function Footer() {
    return (
        <footer id="contacto" className=" py-5">
            <div className="container">
                <h2 className="text-center mb-5">Contáctanos</h2>
                <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Tu correo electrónico"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Tu mensaje"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </footer>
    )
}
