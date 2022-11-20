import { Container } from "@mui/material"
import { useParams } from "react-router-dom"

const SinglePage = () =>{

    let params = useParams()
    console.log(params.title)

    return(
        <Container>
            <h1>SinglePage</h1>
        </Container>
    )
}

export default SinglePage