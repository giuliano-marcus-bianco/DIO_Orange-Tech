import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const Home = () => {
    return (<>
        <Header />
        <Button title="Teste 1" />
        <Button title="Teste 2" variant='secondary' />
    </>)
}

export { Home }