import React from 'react';
import wallA from 'assets/images/A.png';
import wallB from 'assets/images/B.png';
import wallC from 'assets/images/C.png';
import wallD from 'assets/images/D.png';
import wallE from 'assets/images/E.png';
import wallF from 'assets/images/F.png';

const roomConfig = {
  ceiling: wallD,
  floor: wallB,
  back: wallA,
  front: wallF,
  left: wallE,
  right: wallC,
}

enum Side {
  CEILING = 'CEILING',
  FLOOR = 'FLOOR',
  BACK = 'BACK',
  FRONT = 'FRONT',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const Wall = ({ image, side }: { image: string, side: Side }) => (
  <img src={image} className={side} alt={side} />
)

function Room() {
  return (
    <div className="Room">
      <Wall image={wallA} side={Side.BACK} />
      <Wall image={wallB} side={Side.FLOOR} />
      <Wall image={wallC} side={Side.RIGHT} />
      <Wall image={wallD} side={Side.CEILING} />
      <Wall image={wallE} side={Side.LEFT} />
    </div>
  );
}

export default Room;
