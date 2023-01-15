interface IComponentLoader {
    loading: boolean
    children: any
}
export default function ComponentLoader(
    props: React.PropsWithChildren<IComponentLoader>,
) {
    if (props.loading) {
        return null // TODO: return loading component
    }

    return <>{props.children}</>
}
