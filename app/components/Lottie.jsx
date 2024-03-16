'use client'

import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Lottie({image}) {
  return (
    <div>
        <Player
            autoplay
            loop
            src={image}
            style={{ maxHeight: '400px', maxWidth: '400px' }}
        >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </div>
  )
}
