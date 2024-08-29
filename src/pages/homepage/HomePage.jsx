import React, { useEffect } from 'react'
import "../homepage/components/style.css"
import { Grid } from './components/grid'

const Image1 = "https://images.unsplash.com/photo-1633998979521-11ca9d0e6e38?q=80&w=3367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const HomePage = () => {

    useEffect(() => {
        new Grid(document.querySelector('.columns'));
    }, [])

    return (
        <div>
            <main>
                {/* <div className="frame">
                    <h1 className="frame__title">Alternate Column Scroll</h1>
                    <nav className="frame__links">
                        <a href="https://tympanus.net/codrops/2021/12/01/grid-zoom-layout/">Previous demo</a>
                        <a href="https://tympanus.net/codrops/?p=57959">Article</a>
                        <a href="https://github.com/codrops/ColumnScroll/">GitHub</a>
                    </nav>
                    <button className="unbutton button-menu" aria-label="Open the menu"><span></span></button>
                </div> */}

                <div className="columns" data-scroll-container>
                    <div className="column-wrap column-wrap--height">
                        <div className="column">
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="2">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Cyber Blue</span>
                                    <span>2011</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="5">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Gnostic Will</span>
                                    <span>2012</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="8">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>French Kiss</span>
                                    <span>2013</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="11">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Half Life</span>
                                    <span>2014</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="14">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Love Boat</span>
                                    <span>2015</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="17">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Golden Ray</span>
                                    <span>2016</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="20">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Blame Game</span>
                                    <span>2017</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="23">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Lone Dust</span>
                                    <span>2018</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="column-wrap">
                        <div className="column" data-scroll-section>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="1">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Lucky Wood</span>
                                    <span>2019</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="4">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Good Earth</span>
                                    <span>2020</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="7">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Empty Words</span>
                                    <span>2021</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="10">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Nonage Line</span>
                                    <span>2009</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="13">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Blue Hell</span>
                                    <span>2010</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="16">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Cold Blood</span>
                                    <span>2011</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="19">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Tulip Heat</span>
                                    <span>2012</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="22">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Red Wrath</span>
                                    <span>2013</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="column-wrap column-wrap--height">
                        <div className="column">
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="3">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Bold Human</span>
                                    <span>2014</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="6">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Loyal Royal</span>
                                    <span>2015</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="9">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Lone Cone</span>
                                    <span>2016</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="12">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Dutch Green</span>
                                    <span>2017</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="15">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Valley Hill</span>
                                    <span>2018</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="18">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Kale Hale</span>
                                    <span>2019</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="21">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Fake Cake</span>
                                    <span>2020</span>
                                </figcaption>
                            </figure>
                            <figure className="column__item">
                                <div className="column__item-imgwrap" data-pos="24">
                                    <div className="column__item-img" style={{ backgroundImage: `url(${Image1})` }}></div>
                                </div>
                                <figcaption className="column__item-caption">
                                    <span>Book Belly</span>
                                    <span>2021</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>





                <div className="content">
                    <div className="content__item">
                        <h2 className="content__item-title">Lucky Wood</h2>
                        <div className="content__item-text">
                            <span>Faith, you're driving me away
                                You do it every day
                                You don't mean it
                                But it hurts like hell</span>
                            <span>2019</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Cyber Blue</h2>
                        <div className="content__item-text">
                            <span>My brain says I'm receiving pain
                                A lack of oxygen
                                From my life support
                                My iron lung
                            </span>
                            <span>2011</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Bold Human</h2>
                        <div className="content__item-text">
                            <span>We're too young to fall asleep
                                Too cynical to speak
                                We are losing it
                                Can't you tell?</span>
                            <span>2014</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Good Earth</h2>
                        <div className="content__item-text">
                            <span>We scratch our eternal itch
                                A twentieth century bitch
                                And we are grateful for
                                Our iron lung</span>
                            <span>2020</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Gnostic Will</h2>
                        <div className="content__item-text">
                            <span>The head shrinkers
                                They want everything
                                My Uncle Bill
                                My Belisha beacon</span>
                            <span>2012</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Loyal Royal</h2>
                        <div className="content__item-text">
                            <span>The head shrinkers
                                They want everything
                                My Uncle Bill
                                My Belisha beacon</span>
                            <span>2015</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Empty Words</h2>
                        <div className="content__item-text">
                            <span>Suck, suck your teenage thumb
                                Toilet trained and dumb
                                When the power runs out
                                We'll just hum</span>
                            <span>2021</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">French Kiss</h2>
                        <div className="content__item-text">
                            <span>This, this is our new song
                                Just like the last one
                                A total waste of time
                                My iron lung</span>
                            <span>2013</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Lone Cone</h2>
                        <div className="content__item-text">
                            <span>And if you're frightened
                                You can be frightened
                                You can be, it's OK</span>
                            <span>2016</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Nonage Line</h2>
                        <div className="content__item-text">
                            <span>Lost in the mountain
                                Rust in my brain
                                The air is sacred here
                                In spite of your claim</span>
                            <span>2009</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Half Life</h2>
                        <div className="content__item-text">
                            <span>Up on the rooftops
                                Out of reach
                                Trickster is meaningless
                                Trickster is weak</span>
                            <span>2014</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Dutch Green</h2>
                        <div className="content__item-text">
                            <span>He's talking out the world
                                Talking out the world</span>
                            <span>2017</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Blue Hell</h2>
                        <div className="content__item-text">
                            <span>Hey, hey, hey
                                This is only halfway
                                Hey, hey, hey
                                This is only halfway</span>
                            <span>2010</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Love Boat</h2>
                        <div className="content__item-text">
                            <span>I wanted you so bad
                                That I couldn't say
                                All these things fall apart</span>
                            <span>2015</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Valley Hill</h2>
                        <div className="content__item-text">
                            <span>We wanted out so bad
                                We couldn't say
                                These things fall apart</span>
                            <span>2018</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Cold Blood</h2>
                        <div className="content__item-text">
                            <span>Truant kids
                                A can of brick dust worms
                                Who do not want to climb down from
                                Their chestnut tree</span>
                            <span>2011</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Golden Ray</h2>
                        <div className="content__item-text">
                            <span>Long white gloves
                                Police tread carefully
                                Escaped from the zoo
                                The perfect child facsimile is</span>
                            <span>2016</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Kale Hale</h2>
                        <div className="content__item-text">
                            <span>Please could you stop the noise?
                                I'm trying to get some rest
                                From all the unborn chicken
                                voices in my head</span>
                            <span>2019</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Tulip Heat</h2>
                        <div className="content__item-text">
                            <span>What's that?
                                I may be paranoid, but not an android</span>
                            <span>2012</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Blame Game</h2>
                        <div className="content__item-text">
                            <span>When I am king you will be first against the wall
                                With your opinion which is of no consequence at all</span>
                            <span>2017</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Fake Cake</h2>
                        <div className="content__item-text">
                            <span>Ambition makes you look pretty ugly
                                Kicking and squealing, Gucci little piggy</span>
                            <span>2017</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Red Wrath</h2>
                        <div className="content__item-text">
                            <span>You don't remember, you don't remember
                                Why don't you remember my name?</span>
                            <span>2013</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Lone Dust</h2>
                        <div className="content__item-text">
                            <span>Off with his head, man, off with his head, man
                                Why don't you remember my name? I guess he does</span>
                            <span>2018</span>
                        </div>
                    </div>
                    <div className="content__item">
                        <h2 className="content__item-title">Book Belly</h2>
                        <div className="content__item-text">
                            <span>Rain down, rain down
                                Come on, rain down on me
                                From a great height
                                From a great height, height</span>
                            <span>2021</span>
                        </div>
                    </div>
                    <nav className="content__nav">
                        <div className="content__nav-wrap">
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                            <div className="content__nav-item" style={{ backgroundImage: `url(${Image1})` }}></div>
                        </div>
                    </nav>
                    <button className="unbutton button-back"><svg viewBox="0 0 50 9" width="100%"><path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path></svg></button>
                </div>
            </main>
        </div>
    )
}

export default HomePage