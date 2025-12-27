import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <swiper-container
        effect="creative"
        creative-effect='{
          "prev": {
            "shadow": true,
            "translate": ["-120%", 0, -500]
          },
          "next": {
            "translate": ["120%", 0, -500]
          }
        }'
        grab-cursor="true"
      ></swiper-container>
    </div>
  )
}

export default AboutMe