import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
const BestOffer = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={364}
    height={198}
    fill="none"
    {...props}>
    <Path fill="url(#a)" d="M0 0h364v198H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="matrix(.00047 0 0 .00086 0 -.001)" />
      </Pattern>
      <Image
        id="b"
        width={2128}
        height={1160}
      />
    </Defs>
  </Svg>
);
export default BestOffer;