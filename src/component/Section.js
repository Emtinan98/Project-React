import React from 'react'
import mov4 from './img/mov4.jpg'
import mov5 from './img/mov5.jpg'
import mov6 from './img/mov6.jpg'
import mov7 from './img/mov7.jpg'
import mov10 from './img/mov10.jpg'
import mov11 from './img/mov11.jpg'
import mov12 from './img/mov2.jpg'
import mov13 from './img/mov8.webp'

function Section(props) {
  return (
    <div>
    <section>
    <div class="container">
    <div class="row row-cols-2 row-cols-md-5 g-5">
        <div class="card">
          <img src={mov4} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo1.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo1.year}</small></p>
            <p class="rate">{props.movieInfo1.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov5} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo2.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo2.year}</small></p>
            <p class="rate">{props.movieInfo2.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov6} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo3.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo3.year}</small></p>
            <p class="rate">{props.movieInfo3.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov7} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo4.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo4.year}</small></p>
            <p class="rate">{props.movieInfo4.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov10} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo5.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo5.year}</small></p>
            <p class="rate">{props.movieInfo5.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov11} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo6.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo6.year}</small></p>
            <p class="rate">{props.movieInfo6.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov12} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo7.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo7.year}</small></p>
            <p class="rate">{props.movieInfo7.story}</p>
          </div>
        </div>
        <div class="card">
          <img src={mov13} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.movieInfo8.title}</h5>
            <p class="card-text"><small class="text-muted">{props.movieInfo8.year}</small></p>
            <p class="rate">{props.movieInfo8.story}</p>
          </div>
        </div>
        </div></div>

        </section>
    </div>
  )
}

export default Section