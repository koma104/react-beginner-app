import styled from 'styled-components';

export const Input = (props: { children: React.ReactNode }) => {
    const { placeholder = '' } = props;

    return (
        <StyledInput type='text' placeholder={placeholder} />
    )
}

const StyledInput = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px 16px;
    outline: none;

    &:focus {
        border-color: #405dff;
    }
`