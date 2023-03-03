import React from 'react'

type ProgressBarProps = {
    show: boolean
}

export const ProgressBar = ({show}: ProgressBarProps) => {
    return (
        <img style={{display: show?"block":"none", marginTop: 150, textAlign: "center", width:40}}
            id="spinner" src="https://www.joshwcomeau.com/images/keyframe-animations/loader.svg"
        />
    )
}
