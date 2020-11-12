import styled from 'styled-components'
import "../../styles/custom/_variables.scss"
import {
    ResultList,
} from "@appbaseio/reactivesearch"

export const Content = styled(ResultList.Content)`
    display: flex;
`

export const Title = styled(ResultList.Title)`
    font-size: 12px;
`

export const Description = styled(ResultList.Description)`
    font-size: 12px;
    color: red;
`

export const Link = styled.a`
    color: #d26c6c;
`