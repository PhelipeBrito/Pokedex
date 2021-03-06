import styled from 'styled-components';
import { AiOutlineBars } from "react-icons/ai";

const Header = styled.header`
    width: 100%;
    height: 5vh;
    padding: 4px;

    display: flex;
    align-items: center;

    background-color: #555555;
`

Header.ButtonListToggle = styled.button`
    background: none;
    border: none;

    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
`

function PokedexHeader({listToggle}) {
    return (
        <Header>
            <Header.ButtonListToggle
                onClick={(() => listToggle())}
            >
                <AiOutlineBars />
            </Header.ButtonListToggle>
        </Header>
    )
}

export default PokedexHeader;