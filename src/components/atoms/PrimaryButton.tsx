import styled from 'styled-components';

export const PrimaryButton = (props: { children: React.ReactNode }) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: #405dff;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 10px 20px;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`