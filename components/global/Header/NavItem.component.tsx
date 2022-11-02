import { ListItemButton, Typography } from '@mui/material'

interface INavItemProps {
    name: string
    path: string
}

export const NavItem = ({ name, path }: INavItemProps) => {
    return (
        <ListItemButton href={path}>
            <Typography textAlign="center">{name}</Typography>
        </ListItemButton>
    )
}
