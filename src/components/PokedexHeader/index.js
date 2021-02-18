import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 5vh;

    background-color: #555555;
`

function PokedexHeader({listToggle}) {
    return (
        <Header>
            <button
                onClick={(() => listToggle())}
            >
                Toggle
            </button>
        </Header>
    )
}

export default PokedexHeader;