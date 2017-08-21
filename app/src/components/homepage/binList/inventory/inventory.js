import React, { Component } from 'react';
import { getBin, editBin, deleteBin } from '../../../../services/inventoryService';
import './inventory.css';

export default class Inventory extends Component {
    constructor(){
        super();

        this.state = {
            item: [],
            editedItem: '',
            editedPrice: '',
            toEdit: false
        }
        
        this.turnOnEdit = this.turnOnEdit.bind(this)
        this.saveUpdatedItem = this.saveUpdatedItem.bind(this)
        this.saveEditedItem = this.saveEditedItem.bind(this)
        this.saveEditedPrice = this.saveEditedPrice.bind(this)
        this.deleteBin = this.deleteBin.bind(this)
    }

    componentDidMount() {
        var id = this.props.match.params.id
        getBin(id).then(res => {
            this.setState({
                item: res[0]
            })
        })
    }

    turnOnEdit() {
        this.setState({ 
            toEdit: true 
        }) 
    }

    saveEditedItem(e) {
        this.setState({ 
            editedItem: e.target.value 
        }) 
    }

    saveEditedPrice(e) {
        this.setState({ 
            editedPrice: e.target.value 
        }) 
    }

    saveUpdatedItem() {
        var id = this.props.match.params.id
        var edited = {
            item: this.state.editedItem,
            price: this.state.editedPrice
        }
        editBin(id, edited).then(res => {
            this.setState({ 
                toEdit: false
            })
            getBin(id).then(res => {
                this.setState({
                    item: res[0]
                })
            })
        })
    }

    deleteBin() {
        deleteBin(this.props.match.params.id).then(res => {
            console.log('Deleted!')
        })
    }

    render() {

        let item = this.state.item

    return(
        <div>
            <nav className='navContainer'>
                <div className='inventoryListNav'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAABKJJREFUeAHVnLtPFFEUxncNARsfnRU24INKpaKg0UILNBT8JVQkVms0hlhb+C/QGBIwGE20UwsjHY8EQ4JGLEgELYBEXb9vmQvj7MzO3Jlz7r1zkm/v7My995zz23nceew0G46s3W5fgatRaCTSEMpz0NlIKBo/I+2h/AytQivQcrPZXEepbk0tDwBwGn3fg+5At6FBqIp9QeNX0EtoEYAOqnTmrC1A3ICeQj8gLWPf9HHdWWK2jhDcGPQacm30OWYbr1p9BHMVeuGaQoq/Rcailmhex3DeB92HDqBQjLEwpr68+EWXw+FlaBkK1T4hMB7V9A2OJqDdUEnE4mKME6pE4GAG+hNzGvokY51RgYKOH4aefY/4HolCgaPZHs7qsuhxESinilRCnaL1Cnbnpdo1/HJyRx909qQuq0JKnBwnDYj/DDWFogPD0K0ZFF0YNYPiBkZNoLiFETgUPzACheIXRmBQwoARCJSwYHiGEiYMT1DChuEYSj1gOIKiCwPD8ZsmEclSaZivAgOxXurkjolB6BBSudyGfiXPkrVgjCDO79DFBj4mIVroULRhkMEkgTzgVGShQnEBgwhaBDIfwTBFaFBcwWD+8wTyzpCIlaFAcQmD6b8nkJUYiPikbyiuYTD3VQLZjlNITPuC4gMGU98mkP0EhORX11B8wWDe+wTChPPMFRSfMMjgkEB28mhEy7Wh+IbBNHcIZJNTBU0TitxNpOj8AzmZEWjB9NqbvCO3a3H+0o+6z9G7+DAfz4z9togjtyphoNJb6EJu5ZMKuwSycfK90JQalELeC1QqCYM9bxBImccdg4VSAQaBrBHIGqdKWHBQKsIggnXuVIehKqa2o7X5kZCA7Q40Lefhjk8s2UpbajHPKxTEKQFjizC4ydDeHBWlP71tPoSBqG2PJmmJdhgYIItpNSznOYciCIOpLhzni44HID4uLWFONh8EKrGZmHyZe+eBms4agkHRIejMHROqNqG+phAGQpTYTEymcxED873Bo82owSVUqqwpiI1HxW9CMZpu+LeVbsPSJVNDqBSFgpgI46tQbKabpW4S0RzUGDe1BEsRKIhHAwbTHM8EwgWoIL2W0GklKGivBSN77TCUIuca/3AoBUURBnM8Gpma5LNKVGxBGmYFBQForRnMrZWVf9d8VO6HPrKVghWCAr+aMJgbhwfFDQ2GoD1Iw3pCgUNNGMyJ/wi1NzScgv5CGpYKBY40YTCXKXsSsRboYFqDRtTnf1AwTxMGXU7HUis/iY40/x7SgeIAxmx5AiktHUDpdQcR7iuZLAzDByFx89Hap1TKOKMxY5XZTAyEZAkH3NFqHX0y8io1mzFW24Emk8/6Dkc8JGuNU0pln2jE2ModWrOSzpsPhxy8cUSrMcxHt6WMsTAmu0FXXrI2y+Gch0qNE0J0a2WModi5iU2CZesiGF468AGGPnufwpdNSqIdguOVt2eQ1DVadNVl7Js+0q90VUhE84UqvGjLF6rchW5BEi9U4a0C3iFY6LoGipkSpgYkGRx+TW7ffM8HX2nBFxXw+3noTCQUjV+R+EQCb8LzvjNvtX4AANub8mhmb/8Asov1hwQSlWQAAAAASUVORK5CYII="/>
                </div>
                <div className='inventoryShelfNav'>
                    <h1>Shelf A</h1>
                </div>
                <div className='inventoryBinNav'>
                    <h1>Bin { this.props.match.params.id[1] }</h1>
                </div>
            </nav>
            <section className='itemContainer'>
                <div className='itemImage'>
                <img src={ item.image }/>
                </div>
                <div className='itemInformationContainer'>
                    <h3>Name</h3>
                    <input disabled={!this.state.toEdit} placeholder={ item.item } value={ this.state.editedItem } onChange={ this.saveEditedItem }/>
                    <h3>Price</h3>
                    <input disabled={!this.state.toEdit}  placeholder={ item.price } value={ this.state.editedPrice } onChange={ this.saveEditedPrice }/>
                    <div className='buttonContainer'>
                        { !this.state.toEdit ?<button onClick={ this.turnOnEdit }>Edit</button>
                        : <button id='saveButton' onClick={ this.saveUpdatedItem }>Save</button> }
                        <button onClick={ this.deleteBin }>Delete</button>
                    </div>
                </div>

            </section>
        </div>
        )
    }
}