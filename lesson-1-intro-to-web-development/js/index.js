/*
Exercise I - Reflection
Time: 20 minutes

Please spend at least three minutes reflecting and writing about the following questions.

1) What does it mean to be a software engineer? Which of those qualities do you already have?

A software engineer is somebody that can give helpful feedback and listen to feedback from others. It is somebody who likes to keep learning and is resourceful. You should have the willingness to be a teacher and a student. I feel I have experience with giving feedback from Art School. I taught myself how to do web design and I do enjoy keeping up with technology.

2) What do you hope to get out of the Lambda School Mini Bootcamp?

Besides a better understanding of what the Lambda program will be like, I hope to learn something new. I do have experience with HTML and CSS but from the first lesson I did learn a couple of things not only from the teacher but from others in the chat. I tried to share my knowledge with them as well.

3) What are your long term programming goals?

I want to see how far I can go. This is an industry that is always changing and I really don't know where I will end up or who I will end up working for. I know right now this is a difficult field for women to get into. I want to get into coding so that I can make it easier and more comfortable for other women. Also while keeping a high standard and work ethic. I like coding because it's frustrating and sometimes it makes me cry but that's what makes it so rewarding because after all the blood, sweat, and tears when you get your code to finally work you've accomplished something not everybody can do. And at some point you didn't think you could do it either.

4) What parts of programming do you think you'll be good at?

I think I will be really good at teaching others what I learn. 

5) What part of programming do you think will be a challenge?

I know already syntax is my problem. Sometimes I will spend an hour on trying to figure out my code doesn't work when all I need is a semi-colon. I also have to learn not to be so hard on myself and ask for help when I need it.

6) Explain something that you didn't know about programming or web development before tonight.

I didn't even know that Codebase was a thing. I guess there's a name for everything.

7) Pick a web app or web site you frequently use. What is an specific example of how that app or site uses HTML? CSS? Javascript? Example: If you picked lambdaschool.com you might say the "See How It Works" button text is an example of HTML. The red color of the button is an example of CSS. The way the color slightly changes when you hover the mouse is an example of JS.  

I chose the Google fonts website. An example of HTML and CSS combo on Google Fonts is in the header google fonts is using a background-image for the word Google and html text for Fonts. Honestly didn't even know you could do that. Another example of HTML on this site is the list for the navigation bar. An example of CSS is the color and fonts that the navigation bar is using. And an example of JS the area where you can type in sample text under each font.

8) Using the same app or site from question 7, what were some challenges the programmers may have faced when developing it? 

How do you show an area where you can actively type in a preview of each font? How to categorize each font and be able filter according to the type of font? How do you create embed and css links for the font families chosen?

Exercise II - Inspect a Website. 
Time: 20 minutes

Pick a website you frequently use and open it the broswer. Right click anywhere on the page and select "Inspect". A side bar will appear that says "Elements". This is all the HTML that went into that specific webpage. 

1) Can you find a header, div, and p somewhere on the webpage?

I chose my personal website I do happen to frequent it a lot. https://christinaharris.design/ 

This was the header:
<!-- Header -->
<div id="header" style="background-position: 50% 0%; height:100%;" data-stellar-background-ratio="0.5">
             <div id="social" class="visible-lg">
            <ul class="social-icons pull-right hidden-xs">
                <li class="social-linkedin">
                    <a href="https://www.linkedin.com/in/christina-harris-6b229a3/" target="_blank" title="RSS"></a>
                
                </li><li class="social-facebook">
                    <a href="https://www.facebook.com/christinathedesigner/" target="_blank" title="Facebook"></a>
                </li>
                <li class="social-googleplus">
                    <a href="https://plus.google.com/116945614072675932886" target="_blank" title="GooglePlus"></a>
                </li>
            </ul>
        </div>
            <div class="container">
                <div class="row">
                    <!-- Logo -->
                    <div class="logo">
                        <a href="index.html" title="">
                            <img src="img/logo.png" alt="Logo">
                        </a>
                        <br>
                        <p><strong>Web Designer.   Print Designer.   Gamer Girl</strong></p>
                    </div>
                    <!-- End Logo -->
                </div>
                <!-- Top Menu -->
                <div id="hornav" class="row text-light">
                    <div class="col-md-12">
                        <div class="text-center visible-lg">
                            <ul id="hornavmenu" class="nav navbar-nav">
                                <li>
                                    <a href="index.html" class="fa-home active">Home</a>
                                </li>
                                <li>
                                    <a href="#icons" class="fa-briefcase active">Services</a>
                                </li>
                               
                                <li>
                                   <a href="#content" class="fa-book">Portfolio</a>
                                </li>
                                
                                <li>
                                   <a href="https://christinaharris.design/blog.html" target="_blank" class="fa-pencil-square-o">Blog</a>
                                   
                                </li>
                                <li>
                                    <a href="contact.html" class="fa-comment ">Contact</a>
                                    
                                </li>
                                
                                  <li>
                                      <a href="http://christinaharris.design/weddings" target="_blank" class="fa-bell-o">Weddings</a>
                                  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Top Menu -->
            </div>
        </div>
        
<!-- End Header -->

An example of a div:

<div id="welcome" class="background-white">
            <div class="container">
                <div class="row margin-vert-40">
                    <!-- Main Text -->
                    <div class="col-md-12">
                        <h2 class="text-center article-title">What I'm working with.</h2>
                        <p class="text-center">Adobe Suite (Photoshop, Indesign, AfterEffects, Illustrator) • HTML5 / CSS3 • Wordpress • Web Design • Print Design • Bootstrap • Proficiency on cross platforms both Mac and PC • GitBash, GitHub, BitBucket • Keeping up with current technology and in process of learning coding such as Javascript, Python and Ruby.</p>
                  
                    </div>
                    <!-- End Main Text -->
                </div>
            </div>
        </div>
        

An example of p:

<p class="text-center">Adobe Suite (Photoshop, Indesign, AfterEffects, Illustrator) • HTML5 / CSS3 • Wordpress • Web Design • Print Design • Bootstrap • Proficiency on cross platforms both Mac and PC • GitBash, GitHub, BitBucket • Keeping up with current technology and in process of learning coding such as Javascript, Python and Ruby.</p>



2) Find an HTML element you have not learned about yet. Explain what it is and how it's used. Use Google to help answer this question.  

We didnt learn about the head tag in class. It is usally the bit at the beginning that contains information to help the page format correctly. It usually houses links, styles and sometimes script.

3) If you double click an element you can edit it. Change the tag on a few different elements on the screen. What happens? Note: Some element cannot be edited, so try sticking with a div, p, or header if you're having trouble with this question.

I changed the p to an H1 element and the text got bigger. I used em and strong to italize and bold text.

4) How does this exercise either support or change the ways you were thinking about HTML?

Html is very flexible. I've used html a very long time and it's very easy to learn and understand. 

Once you are done with these exercises, drag open the HTML screen to the left, and drag up the screen below this and complete Exercise III.

*/