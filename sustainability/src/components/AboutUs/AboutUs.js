import './AboutUs.css'
import React from "react";



function AboutUs() {
  return (
        <div className="about">
          <div class="container">
            <div class="row align-items-center my-5">

              <div class="col-lg-5">
                <h1 class="abt">About Us!</h1>
                <p class="mission">
                  With SusFood our mission is to provide an easy way for an individual to keep track of their perishable food items. We hope this app can help eliminate food waste as well as costs for every user. 
                </p>
              </div>
              <div class="col-lg-7">

                <div class="Ayon">
                  
                  <img
                    class="img"
                    src="ayon.png"
                    alt="A photo of Ayon, a Lehigh CS student participating in HackHolyoke 2021"
                    height = "300"
                  />
                  <h2>Ayon Bhowmick</h2>
                    <p class="paragraph">
                     dkjafhksjdfh lkdjf l;kasjdf ;lkasjf;lkas jfl;as f;las jf;lka sjf;lka sjdfl;k jf;lka sjdf;lk asj;dfl jasj;l 
                    </p>
                </div>
        
                <div class="Josh">
                  <img
                    class="img"
                    src="Josh.JPG"
                    alt="A photo of Josh, a Lehigh CS student participating in HackHolyoke 2021"
                    height ="300"
                  />
                  <h2>Josh Tripoli</h2>
                  <p class="paragraph">
                     dkjafhksjdfh lkdjf l;kasjdf ;lkasjf;lkas jfl;as f;las jf;lka sjf;lka sjdfl;k jf;lka sjdf;lk asj;dfl jasj;l 
                    </p>
                </div>
               
                <div class="Tiana">
                  
                    <img
                      class="img"
                      src="IMG_4368.jpg"
                      alt="A photo of Tiana, a Lehigh CS student participating in HackHolyoke 2021"
                      height = "300"
                    />
                  <h2>Tiana Aldroubi
                    <b class="pronouns">(she/her)</b>
                  </h2>
                  <p class="paragraph">
                      I am a sophmore at Lehigh University studying computer science and graphic design. I am interested in working in game development someday. In my free time I enjoy painting and doing arts and crafts. This is my first hackathon and the experience has been lots of fun :)
                    </p>
                </div>
                <div class="Erick">
                  <img
                      class="img"
                      src="erick.jpeg"
                      alt="A photo of Erick, a Lehigh CS student participating in HackHolyoke 2021"
                      height = "300"
                    />
                  <h2>Erick Tepen</h2>
                  <p class="paragraph">
                     dkjafhksjdfh lkdjf l;kasjdf ;lkasjf;lkas jfl;as f;las jf;lka sjf;lka sjdfl;k jf;lka sjdf;lk asj;dfl jasj;l 
                    </p>
                </div>
              </div>

            </div>
          </div>
        </div>
    
  )
}
 
export default AboutUs;
