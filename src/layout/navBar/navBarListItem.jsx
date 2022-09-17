

const NavBarListItem = ({items}) => {
  return (
    <ul>
        {items.map(items=>{
                return <li>{items.name}</li>
        })}
    </ul>
  )
}

export default NavBarListItem