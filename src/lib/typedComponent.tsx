import * as React from "react";

export interface Props {
    children?: string,
    name?: string
}

export default class TypedComponent extends React.Component<Props, {}> {
    render() {
        const {children} = this.props;
        return (
            <h2 style={{color:"red"}}>
                {children}
            </h2>
            
        )
    }
}