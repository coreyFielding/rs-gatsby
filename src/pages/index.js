import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Wrapper, FilterContainer} from "./styles/pageStyles"
import ReactiveSearch from '../components/Search/index'
import {ReactiveBase} from '@appbaseio/reactivesearch'
import SelectFilter from '../components/selectFilter'
import Results from '../components/Results'
import 'bootstrap/dist/css/bootstrap.css';
import {SearchContainer} from "./styles/pageStyles";

const IndexPage = () => {
    const settings = {
        baseConfig: {
            app: "gcse_maths_topic_pages",
            url: "http://134.209.24.182:9200",
        },
        searchConfig: {
            componentId: "search-sensor",
            dataField: "topic_name",
            size: 10,
            showClear: true,
            highlight: true,
            fuzziness: 1,
            placeholder: "Search topic list",
            debounce: 100,
            iconPosition: "right",
            react: {
                and: ["tier-sensor", "level-sensor"]
            }
        }
    }
        const filterConfig = {
            showSearch: false,
            showCheckbox: true,
            showFilter: true,
            debounce: 100
        }

        const levelConfig = {
            ...filterConfig,
            componentId: "level-sensor",
            dataField: "level.keyword",
            title: "Filter by Level",
            react: {
                and: ["tier-sensor", "search-sensor"]
            },
            data: [
                {
                    label: "1-3",
                    value: "1-3"
                },
                {
                    label: "4-5",
                    value: "4-5"
                },
                {
                    label: "6-7",
                    value: "6-7"
                },
                {
                    label: "8-9",
                    value: "8-9"
                }
            ]
        }
        const tierConfig =  {
            ...filterConfig,
            componentId: "tier-sensor",
            dataField: "tier.keyword",
            title: "Filter by Tier",
            react: {
                and: ["level-sensor", "search-sensor"]
            },
            data: [
                    {
                        label: 'Foundation',
                        value: 'foundation'
                    },
                    {
                        label: 'Higher',
                        value: 'higher'
                    },
            ]
        }

    return (
        <Layout>
            <ReactiveBase {...settings.baseConfig}>
                <Wrapper className="row d-flex justify-content-center">
                    <FilterContainer className="col-lg-3">
                        <SelectFilter {...levelConfig}/>
                        <SelectFilter {...tierConfig}/>
                    </FilterContainer>
                    <SearchContainer className="col-lg-5">
                        <ReactiveSearch {...settings.searchConfig}/>
                        <Results />
                    </SearchContainer>
                </Wrapper>
            </ReactiveBase>

        </Layout>
    )
}

export default IndexPage
