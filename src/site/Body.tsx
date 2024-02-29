
type BodyPropsType = {
    BodyTitle: string
}

export const Body = (props: BodyPropsType) => {
    return <div>
        {props.BodyTitle}
    </div>
}