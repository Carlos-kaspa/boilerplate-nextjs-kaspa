import dynamic from 'next/dynamic'

const DynamicCircularProgress = dynamic(() => import('@mui/material/CircularProgress'), {
    suspense: true,
})
interface IComponentLoader {loading:boolean, children: any}
export default function ComponentLoader (props: React.PropsWithChildren<IComponentLoader>) {

    if(props.loading){
        return <DynamicCircularProgress />
    }

    return <>{props.children}</>
}