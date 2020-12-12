import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

const db = [
  {
    name: 'Anhbren',
    url: './img/anhbren.jpg'
  },
  {
    name: 'oooo',
    url: './img/yy.png'
  },
  {
    name: 'uuu',
    url: './img/kk.png'
  },
  {
    name: 'ppp',
    url: './img/ll.jpg'
  },
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  }

]


function Simple() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Ulance</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <p>{character.name}</p>
              <h3>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon color="secondary" size="medium" />
                </IconButton>
                <IconButton aria-label="like">
                  <ThumbUpSharpIcon color="primary" />
                </IconButton>

              </h3>


            </div>

          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
