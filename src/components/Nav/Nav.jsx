// import React, { useState } from "react";
// import * as S from "./Nav.styles";
// import PropTyes from "prop-types";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";

// const Nav = ({ links }) => {
//   const [active, setActive] = useState(false);
//   return (
//     <S.Nav className="navbar">
//       <S.MenuIcon active={active} onClick={() => setActive(!active)}>
//         <div />
//         <div />
//         <div />
//       </S.MenuIcon>
//       {links && (
//         <div>
//           <div>
//             {links.map((link) => (
//               <Link
//                 to={link.url}
//                 className="navbarItem"
//                 onClick={() => setActive(!active)}
//               >
//                 {link.title}
//               </Link>
//             ))}
//             <Button type="submit">Logout</Button>
//           </div>
//         </div>
//       )}
//     </S.Nav>
//   );
// };

// Nav.propTyes = {
//   links: PropTyes.arrayOf(
//     PropTyes.shape({
//       url: PropTyes.string.isRequired,
//       title: PropTyes.string.isRequired,
//       active: PropTyes.func,
//     })
//   ),
// };

// export default Nav;
