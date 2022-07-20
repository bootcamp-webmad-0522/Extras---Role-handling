import './CoasterCard.css'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const CoasterCard = ({ imageUrl, title, _id, owner }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className="CoasterCard mb-4">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <hr />
                <div className="d-grid">
                    <ButtonGroup>
                        <Link to={`/detalles/${_id}`}>
                            <Button size="sm" variant="dark">Ver detalles</Button>
                        </Link>
                        {owner === user?._id && <Button size="sm" variant="warning" onClick={() => alert('TE LO CURRAS')}>Editar</Button>}
                        {user?.role === 'ADMIN' && <Button size="sm" variant="danger" onClick={() => alert('TE LO CURRAS')}>Eliminar</Button>}
                    </ButtonGroup>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CoasterCard