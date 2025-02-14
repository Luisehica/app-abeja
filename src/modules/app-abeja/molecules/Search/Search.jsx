import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const getResults = () =>
    _.times(5, () => ({
        title: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        image: faker.internet.avatar(),
        price: faker.finance.amount(0, 100, 2, '$'),
    }))

const source = _.range(0, 3).reduce((memo) => {
    const name = faker.hacker.noun()

    // eslint-disable-next-line no-param-reassign
    memo[name] = {
        name,
        results: getResults(),
    }

    return memo
}, {})

export default class SearchCat extends Component {
    state = initialState

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            const filteredResults = _.reduce(
                source,
                (memo, data, name) => {
                    const results = _.filter(data.results, isMatch)
                    if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

                    return memo
                },
                {},
            )

            this.setState({
                isLoading: false,
                results: filteredResults,
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Grid>
                <Grid.Column width={8}>
                    <Search
                        category
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
                        results={results}
                        value={value}
                        fluid
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment>
                        <Header>State</Header>
                        <pre style={{ overflowX: 'auto' }}>
                            {JSON.stringify(this.state, null, 2)}
                        </pre>
                        <Header>Options</Header>
                        <pre style={{ overflowX: 'auto' }}>
                            {JSON.stringify(source, null, 2)}
                        </pre>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}