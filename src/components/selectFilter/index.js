import React from 'react'
import {MultiList} from '@appbaseio/reactivesearch'
import {Wrapper} from './styles'

const SelectFilter = (config) => (
    <Wrapper>
        <MultiList {...config}/>
    </Wrapper>
)

export default SelectFilter