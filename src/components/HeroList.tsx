import React from 'react'

export type HeroListProps = {
  data: {
    heroName: string;
    id: number;
  }[];
  handleHeroRemove: (id: number) => void;
}

class HeroList extends React.Component<HeroListProps> {
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
    