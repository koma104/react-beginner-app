import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <Link to='/'>Home</Link>
            <Link to='/page1'>Page1</Link>
            <Link to='/page2'>Page2</Link>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 16px 0;
    background-color: #333;
`
