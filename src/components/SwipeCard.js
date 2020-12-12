import React, { useState, useMemo } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


// const db = [
//     {
//         name: 'Anhbren',
//         url: './img/anhbren.jpg'
//     },
//     {
//         name: 'Anhbren2',
//         url: './img/yy.png'
//     },
//     {
//         name: 'Anhbren3',
//         url: './img/kk.png'
//     },
//     {
//         name: 'Anhbren4',
//         url: './img/ll.jpg'
//     }

// ]


// This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const SwipeCard = ({ db, alreadyRemovedArr, loadCards }) => {

    console.log(loadCards);
    <button onClick={() => loadCards()}>Add</button>
    const alreadyRemoved = alreadyRemovedArr
    let charactersState = db
    const classes = useStyles();
    const [characters, setCharacters] = useState(db)
    const [lastDirection, setLastDirection] = useState()

    const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + direction)
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
        alreadyRemoved.push(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        charactersState = charactersState.filter(character => character.name !== name)
        setCharacters(charactersState)
    }

    const swipe = (dir) => {
        const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
            const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <h1>Ulance</h1>
            <div className='cardContainer'>
                {characters.map((character, index) =>
                    <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <p>{character.name}</p>
                        </div>
                    </TinderCard>
                )}
            </div>
            <div>
                <IconButton aria-label="add to favorites" className={classes.margin} onClick={() => swipe('left')}>
                    <FavoriteIcon color="secondary" fontSize="large" />
                </IconButton>
                <IconButton aria-label="like" className={classes.margin} onClick={() => swipe('right')}>
                    <ThumbUpSharpIcon color="primary" fontSize="large" />
                </IconButton>
            </div>
            {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
        </div>
    )
}

export default SwipeCard
