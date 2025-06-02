import styled from 'styled-components';

import { Input } from '../atoms/input';
import { PrimaryButton } from '../atoms/PrimaryButton';

export const SearchInput = () => {
    return (
        <StyledSearchInput>
            <Input placeholder='検索条件を入力' />
            <PrimaryButton>検索</PrimaryButton>
        </StyledSearchInput>
    )
}

const StyledSearchInput = styled.div`
    display: flex;
    gap: 8px;
`
