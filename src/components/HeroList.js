export default HeroList in HeroList.js

class HeroList extends React.Component {

    render() {
        const {data, handleHeroRemove} = this.props
        const heros = data.map((hero, id) => <p onClick={this.handleHeroRemove(id)}>{hero}</p>)

        return (heros)
    }
}
    