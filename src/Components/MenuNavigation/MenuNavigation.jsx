// import React from 'react'

// function MenuNavigation() {
//     return (
//         <div className="menu-navigation">
//             <ul>
//                 <li>Acne</li>
//                 <li>Ointment</li>
//                 <li>Spot Treatment</li>
//                 <li>Lotion</li>
//                 <li>Cream</li>
//             </ul>
//         </div>
//     )
// }

// export default MenuNavigation


//STYLED COMPONENT

import styled from "styled-components";

const Container = styled.div`
  width: 245px;
  /* padding-top: 30px; */
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.primaryFont};
  color: ${props => props.navigationColor || props.theme.fontcolor3};
`;

const List = styled.ul`
  list-style: none;
  width: 100px;
  height: 121px;
`;

const ListItem = styled.li`
  /* display: flex;
  flex-direction: column; */
  font-size: 1.2rem;
  margin-left: 10px;
  margin-top: 10px;
  :hover{
    background-color: ${props => props.theme.bgc2};
    cursor: pointer;
  }
  :first-of-type {
    border-top: none;
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 0;
    margin-top: 0;
  }
`;

const MenuNavigation = ({category, menuNavigationList}) => (
    <Container>
      {menuNavigationList.map((menuNavigationItem) => {
        if(menuNavigationItem.category === category){
          return(
            <List>
            <ListItem>{menuNavigationItem.category}</ListItem>
            {
              menuNavigationItem.subcategories.map(subcategoryItem => {
                return <ListItem>{subcategoryItem}</ListItem>
              })
            }
            </List>
          )
        }
      })}
    </Container>
);

export default MenuNavigation;
