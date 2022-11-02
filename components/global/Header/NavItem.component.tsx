import { ListItemButton, Typography } from '@mui/material'

interface INavItemProps {
    key: string
    name: string
    path: string
}

export const NavItem = ({key, name, path}: INavItemProps) => {
    return (
        <ListItemButton
            key={name}
            href={path}
        >
            <Typography textAlign="center">{name}</Typography>
        </ListItemButton>
    )
}
