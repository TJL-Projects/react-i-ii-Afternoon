import React, {Component} from 'react'
import Buttons from './Buttons/Buttons'
import array from '../Data/array'

class Data extends Component{
    constructor(){
        super()
        this.state = {
            index: 0
        }
    }

    handleNext = () => {
        this.setState({
            index: this.state.index === 24 ? 0: this.state.index +1})
    }

    handlePrevious = () => {
        this.setState({
            index: this.state.index === 0? 24: this.state.index -1})
    }

    render(){
        return(
            <div>
                <div className='content-layout'>
                <div className='id' >
                        <h1 style={{float: 'right'}}>
                           {array[this.state.index].id}/25
                        </h1>
                    </div>
                    <h1 className='name'>
                        {array[this.state.index].name.first} {' '}
                        {array[this.state.index].name.last}
                    </h1>
                    <h1>
                        From: <span>{array[this.state.index].city}</span>
                    </h1>
                    <h1>
                        Job Title: <span>{array[this.state.index].title}</span>
                    </h1>
                    <h1>
                        Employer: <span>{array[this.state.index].employer}</span>
                    </h1>
                    <h1>
                        Favorite Movies: 
                    </h1>
                        <ol class='list'>
                            <li>{array[this.state.index].favoriteMovies[0]}</li>
                            <li>{array[this.state.index].favoriteMovies[1]}</li>
                            <li>{array[this.state.index].favoriteMovies[2]}</li>
                        </ol>
                </div>
                <div>
                    <Buttons 
                        next={this.handleNext}
                        previous={this.handlePrevious}
                    />
                </div>
            </div>
        )
    }
}

export default Data