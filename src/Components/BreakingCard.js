import React, { Component } from "react";
import style from "./BreakingCard.module.css";

class Details extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://www.breakingbadapi.com/api/characters";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false });
    
  }
  render() {
    return (
      <div className={style.containerWrap}>
        {this.state.loading || !this.state.people.length ? (
          <div>loading...</div>
        ) : (
          <div className={style.cards}>
            {this.state.people.map((person) => (
              <div className={style.container} key={person.char_id}>
                <img src={person.img} alt="img" />
                <div>
                  Name : &emsp;&emsp;<span>{person.name}</span>
                </div>
                <div>
                  Birthday : &emsp;<span>{person.birthday}</span>
                </div>
                <div>
                  Nickname : &nbsp;<span>{person.nickname}</span>
                </div>
                
                
              </div>
              
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Details;