import React, {Component} from  'react';
import axios from 'axios';
import Banner from './Banner';
import ArtistList from './ArtistList';

const url_artists = 'http://localhost:3004/artists';

class Home extends Component {

    state = {
        artists: []
    }

    componentDidMount(){
        axios.get(url_artists)
            .then( response => {
                this.setState({artists: response.data })
            })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Banner />
                <ArtistList allArtists={this.state.artists} />
            </>
        )
    }
}

export default Home;