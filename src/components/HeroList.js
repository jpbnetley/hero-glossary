import React from 'react'

class HeroList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const { data, handleHeroRemove} = this.props
        return(data?.map(({ id, heroName }) => (<div key={id} id={id} onClick={(e) => handleHeroRemove(e)}>{heroName}</div>)))
    }
}

export default HeroList
