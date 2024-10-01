import React from 'react'

import AnimatedCursor from 'react-animated-cursor'

export const SectionCursor = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={20}
                outerSize={20}
                color='196, 218, 210'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                  ]}

            />
        </div>
    )
}
