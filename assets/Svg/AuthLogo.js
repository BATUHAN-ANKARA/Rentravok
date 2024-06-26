import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const AuthLogo = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={169}
    height={79}
    fill="none"
    {...props}>
    <Path
      fill="#C80000"
      fillRule="evenodd"
      d="M0 39.445v39.446l.873-.809c.48-.445 3.715-3.467 7.188-6.716 10.44-9.766 37.824-35.317 40.29-37.593a534.577 534.577 0 0 0 4.183-3.907c1.84-1.742 4.205-3.95 21.766-20.313 4.73-4.406 8.96-8.359 9.4-8.782L84.501 0H0v39.445Zm84.646.082v39.258h41.763c22.97 0 41.955.074 42.188.163.234.09.415.06.402-.067-.013-.127-3.731-3.672-8.263-7.878-8.475-7.867-34.771-32.404-45.987-42.91C99.341 13.659 84.924.269 84.79.269c-.08 0-.144 17.666-.144 39.258Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default AuthLogo;
