import React from 'react'
class HeroList extends React.Component {
  render() {
    const { data, handleHeroRemove } = this.props;
    
    return (
        data.map((hero, id) => (
            <p onClick={handleHeroRemove(id)}>{hero}</p>
          ))
    );
  }
}

export default HeroList;
