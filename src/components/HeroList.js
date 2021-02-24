class HeroList extends React.Component {

    render() {
        const {data, handleHeroRemove} = this.props
        const heros = data.map(hero => <p>hero</p>)

        return (heros)
    }
}
    