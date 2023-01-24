import React from 'react'
import './style.css'

export default function AccessMap({title, text}) {
  return (
    <div className="access-map-section">
    <div className="contenu">
        <div>
            <h2>{title}</h2>
            <p>{text}</p>

            <p><span>18/20 Rue Soleillet, 75020 Paris, France</span></p>

            <h3>Transports</h3>

            <p>Metro 3 Gambetta</p>
        </div>

        <div>
            <div className="map" data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6203200887503!2d2.3893058155552693!3d48.86545007928811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d0c534e41e1%3A0xdccba11a06e8f367!2sLEVEL%20256%20%7C%20Paris%26Co!5e0!3m2!1sfr!2sfr!4v1623249445415!5m2!1sfr!2sfr">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6203200887503!2d2.3893058155552693!3d48.86545007928811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d0c534e41e1%3A0xdccba11a06e8f367!2sLEVEL%20256%20%7C%20Paris%26Co!5e0!3m2!1sfr!2sfr!4v1623249445415!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</div>
  )
}
