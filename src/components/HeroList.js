import React from 'react'
class HeroList extends React.Component {
  render() {
    const { data, handleHeroRemove } = this.props;
    
    return (
        data.map(({heroName, id}) => (
            <p key={id} onClick={() => handleHeroRemove(id)}>{heroName}</p>
          ))
    );
  }
}

export default HeroList;
    