import './AboutUs.css'
import React from "react";



function AboutUs() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">

          <div class="col-lg-5">
            <h1 class="abt">Meet <em>The Green Seg Faults</em>!</h1>
            <p class="mission">
              We are a team of CS students from Lehigh University participating in HackHolyoke 2021. With this webApp, our mission with SusFood is to provide an easy way for an individuals to keep track of their perishable food items. We hope this app can help eliminate food waste as well as costs for every user.

            </p>
          </div>
          <div class="col-lg-7">

            <div class="Ayon">

              <img
                class="img"
                src="ayon.png"
                alt="A photo of Ayon, a Lehigh CS student participating in HackHolyoke 2021"
                height="300"
              />
              <h2>Ayon Bhowmick
                <b class="pronouns"> (he/him)</b>
              </h2>
              <p class="paragraph">
                I am a sophomore at Lehigh University where I am studing Computer Science. I am interested in front-end development and would like to explore this field further.
              </p>
            </div>

            <div class="Josh">
              <img
                class="img"
                src="Josh.JPG"
                alt="A photo of Josh, a Lehigh CS student participating in HackHolyoke 2021"
                height="300"
              />
              <h2>Josh Tripoli
                <b class="pronouns"> (they/them)</b>
              </h2>
              <p class="paragraph">
                I'm a second year student studying Computer Science and Japanese. In addition to my studies, I work as a costume shop assistant for the theatre and as a peer writing tutor. This is my first hackathon, and I'm having a great time! My instagram is @josh__tripoliii. And, you can now also find me on LinkedIn at www.linkedin.com/in/josh-tripoli  ٩(^ᴗ^)۶

              </p>
            </div>

            <div class="Tiana">

              <img
                class="img"
                src="IMG_4368.jpg"
                alt="A photo of Tiana, a Lehigh CS student participating in HackHolyoke 2021"
                height="300"
              />

              <h2>Tiana Aldroubi
                <b class="pronouns"> (she/her)</b>
              </h2>
              <p class="paragraph">
                I am a sophomore at Lehigh University studying Computer Science and Graphic Design. I am interested in working in game development. In my free time I enjoy painting and doing arts and crafts. This is my first hackathon and the experience has been lots of fun :)
              </p>
            </div>
            <div class="Erick">
              <img
                class="img"
                src="erick.jpeg"
                alt="A photo of Erick, a Lehigh CS student participating in HackHolyoke 2021"
                height="300"
              />
              <h2>Erick Tepan
                <b class="pronouns"> (he/him)</b>
              </h2>
              <p class="paragraph">
                Greetings! My name is Erick Tepan. I am currently a sophomore majoring in Computer and Business at Lehigh University. It’s been a pleasure to have HackHolyoke as my first Hackathon experience. I’m interested in front-end development, game development, and data analytics. Email: erick.tepan2001@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutUs;
