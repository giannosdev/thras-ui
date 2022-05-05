
export const styles = (): any => ({


    flipBox: {
        margin: 0,
        padding: 0,
        border: '1px solid #ccc',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        '&:hover': {
            '& $flipBoxFront': {
                transform: 'rotateY(-180deg)',
                transformStyle: 'preserve-3d',
            },
            '& $flipBoxBack': {
                transform: 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
            },
        },
    },
    flipBoxFront: {
        transition: 'transform 0.5s cubic-bezier(.4,.2,.2,1)',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(0deg)',
        transformStyle: 'preserve-3d',
    },

    flipBoxBack: {
        transition: 'transform 0.5s cubic-bezier(.4,.2,.2,1)',
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        transform: 'rotateY(180deg)',
        transformStyle: 'preserve-3d',
    },
})