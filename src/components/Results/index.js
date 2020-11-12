import React from 'react'
import {
    ReactiveList,
    ResultList,
  } from "@appbaseio/reactivesearch"
import {ResultsContainer} from "../Search/styles";
import {Content, Title, Description, Link} from './styles'
import "../../styles/custom/_variables.scss"

const { ResultListWrapper } = ReactiveList

const Results = () => {
    return (
        <ResultsContainer className="h-100">
            <ReactiveList
                react={{
                    and: ["search-sensor", "level-sensor", "tier-sensor"]
                }}
                componentId="SearchResult"
                size={100}
                onNoResults="No results found."
                dataField="topic_name"
            >
                {({ data, error, loading }) => {
                    return (
                        <ResultListWrapper>
                            {
                                data.map(item => (
                                    <ResultList key={item._id}>
                                        <Content className="row justify-content-around">
                                            <Title className="col-lg-6"
                                                dangerouslySetInnerHTML={{
                                                    __html: [item.level, item.topic_name].join(" ")
                                                }}
                                            />
                                            <Description className="col-lg-5">
                                                    <Link href={item.worksheet_question_url} className="mx-1 font-weight-bold">Worksheet Question</Link>
                                                    <Link href={item.worksheet_answer_url} className="mx-1">Worksheet Answer</Link>
                                            </Description>
                                        </Content>
                                    </ResultList>
                                ))
                            }
                        </ResultListWrapper>
                    )
                }
                }
            </ReactiveList>
        </ResultsContainer>
)}
            
export default Results