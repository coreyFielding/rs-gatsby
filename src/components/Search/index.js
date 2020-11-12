import React from 'react'
import {Wrapper, Search} from './styles'

import {
    DataSearch,
  } from "@appbaseio/reactivesearch"

const ReactiveSearch = (config) => {
    return (
        <Wrapper className="row p-2">
            <Search
                {...config}
            className="col-lg-6"/>
        </Wrapper>
    )
}

export default ReactiveSearch