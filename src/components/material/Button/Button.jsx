import React from 'react'

export const Button = ({
    children,
    classes = {
        root: "button",
        label: "button__label"
    },
    className,
    ...other
}) => (
        <button className={classes.root + (className ? " " + className : "")} {...other} >
            <span className={classes.label}>{children}</span>
        </button >
    )

export default Button;